<template>
  <div>
    <accounts-component v-on:account-changed="changeAccount" ></accounts-component>
    <vuestic-widget :headerText="$t('account.requestReport.title')">
          <div class="row " style="margin-bottom:40px">
            <div class="col-sm-2  justify-content-center">
              <button class="btn btn-sm btn-primary" href="#" @click.prevent="submitGetReportOfProfit">
                 {{ 'account.incomeReport.submit' | translate }}
               </button>
            </div>
          </div>
          <div class="table-responsive">
              <table class="table table-striped first-td-padding">
                      <thead>
                          <tr>
                              <td>{{'account.incomeReport.amount' | translate }}</td>
                              <td>{{'account.incomeReport.date' | translate }}</td>
                              <td>{{'account.incomeReport.accountNumber' | translate }}</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="income in incomes">
                              <td>{{ income.amount }}</td>
                              <td>{{ income.date | moment('DD-MM') }}</td>
                              <td>{{ income.account.accountNumber  }}</td>
                          </tr>
                      </tbody>
              </table>
          </div>
        </vuestic-widget>
  </div>

</template>

<script>
import AccountsComponent from './AccountsComponent'
export default {
  name: 'income-report',
  components: {
    AccountsComponent
  },
  data () {
    return {
      showNetworkError: false,
      selectedAccount: {},
      incomes: [
        {
          account: {
            accountNumber: ''
          }
        }
      ]
    }
  },
  methods: {
    submitGetReportOfProfit () {
      console.log(this.selectedAccount)
      this.$http.get('http://localhost:8091/customer/report/profit/' + this.selectedAccount.id, {
        headers: {
          'Authorization': 'Bearer ' + this.$localStorage.get('token_key', 'fake')
        }
      }).then(response => {
        console.log(response)
        if (response.ok) {
          this.incomes = response.body
        }
      }, error => {
        this.showNetworkError = false
        console.log(error)
      })
    },
    changeAccount (account) {
      this.selectedAccount = account
    }
  }
}


</script>

<style lang="scss">
  @import "../../sass/_variables.scss";
  .accept {
    color: $brand-primary
  }
  .reject {
    color: $brand-warning
  }

</style>
