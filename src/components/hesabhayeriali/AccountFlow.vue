<template>
  <div>
    <accounts-component v-on:account-changed="changeAccount" ></accounts-component>

    <vuestic-widget :headerText="$t('account.accountFlow.title')">
          <div class="row " style="margin-bottom:40px">
            <div class="col-sm-2  justify-content-center">
              <button class="btn btn-sm btn-primary" href="#" @click.prevent="requestForAccountFlow">
                 {{ 'account.accountFlow.updateAccountFlow' | translate }}
               </button>
            </div>
          </div>
          <div class="table-responsive">
              <table class="table table-striped first-td-padding">
                      <thead>
                          <tr>
                              <td>{{'account.accountFlow.accountFlowType' | translate }}</td>
                              <td>{{'account.accountFlow.date' | translate }}</td>
                              <td>{{'account.accountFlow.amount' | translate }}</td>
                              <td>{{'account.accountFlow.payOrNot' | translate }}</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="flow in accountFlows">
                              <td>{{ getAccountFlowTypePersian(flow.accountFlowType)  }}</td>
                              <td>{{ toDateTime(flow.date) | moment("DD-MM")  }}</td>
                              <td>{{ flow.amount  }}</td>
                              <td>{{ getPaymentOrBuy(flow.payOrNot)  }}</td>
                          </tr>
                      </tbody>
              </table>
          </div>
        </vuestic-widget>
  </div>

</template>

<script>
import AccountsComponent from './AccountsComponent'
import BankBranchComponent from './BankBranchComponent'
export default {
  name: 'darkhast-cheque',
  components: {
    AccountsComponent,
    BankBranchComponent
  },
  data () {
    return {
      selectAccount: undefined,
      accountFlows: [],
      requestAccountFlow: {
        accountNumber: '',
        allActivity: true
      }
    }
  },
  methods: {
    requestForAccountFlow () {
      this.$http.post('http://localhost:8091/customer/account/flow', this.requestAccountFlow, {
        headers: {
          'Authorization': 'Bearer ' + this.$localStorage.get('token_key', 'fake')
        }
      }).then(response => {
        if (response.ok) {
          this.accountFlows = response.body
        }
      }, error => {
        console.log(error)
      })
    },
    getAccountFlowTypePersian (type) {
      switch (type) {
        case 'HAVALE_VARIZ':
          return 'حواله خرید'
        case 'HAVALE_BARDASHT':
          return 'حواله برداشت'
        case 'PAYBILL':
          return 'پرداخت قبض'
        case 'KHARID_INTERNET':
          return 'خرید اینترنتی'
        case 'KHARID_POZ':
          return 'خرید پوز'
        case 'VARIZ_NAGHD':
          return 'برداشت وجه نقد'
        case 'PASS_CHECK':
          return 'پرداخت چکی'
        case 'VARIZ_SOOD':
          return 'واریز سود'
      }
    },
    selectedAccountEnableButton () {
      if (this.selectedAccount !== undefined) {
        this.enableRefreshButton = true
      } else {
        this.enableRefreshButton = false
      }
    },
    getPaymentOrBuy (payOrNotBoolean) {
      if (payOrNotBoolean) {
        return this.$t('account.accountFlow.bardasht')
      } else {
        return this.$t('account.accountFlow.variz')
      }
    },
    changeAccount (account) {
      this.selectAccount = account
      this.requestAccountFlow.accountNumber = account.accountNumber
      console.log(this.selectAccount)
    },
    toDateTime (secs) {
      var t = new Date(1970, 0, 1)
      t.setSeconds(secs)
      return t
    },
    submitDarkhastCheque () {
      this.$http.post('http://localhost:8091/customer/request/checkbook', this.requestAccountFlow, {
        headers: {
          'Authorization': 'Bearer ' + this.$localStorage.get('token_key', 'fake')
        }
      }).then(response => {
        if (response.ok) {
          this.successOnDarkhastCheque = true
          console.log(response)
        } else {
          this.successOnDarkhastCheque = false
          console.log(response)
        }
      }, error => {
        this.successOnDarkhastCheque = false
        console.log(error)
      })
    }
  }
}


</script>

<style lang="scss">
  @import "../../sass/_variables.scss";

</style>
