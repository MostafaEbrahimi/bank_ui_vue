<template>
  <div>
    <accounts-component v-on:account-changed="changeAccount" ></accounts-component>
    <bank-branch-component v-on:branch-changed="changeBranch" ></bank-branch-component>
    <vuestic-widget :headerText="'account.cartRequest.title' | translate">
      <form>
        <div v-show="successOnCartRequest" class="row">
          <div class="col-md-12">
            <vuestic-alert type="success" :withCloseBtn="true">
              {{ 'account.darkhastcheque.successMessage' | translate }}
            </vuestic-alert>
          </div>
        </div>
        <div class="row">
          <div class="justify-content-center" >
            <button href="#" @click.prevent="submitCartRequest" class="btn btn-primary">
              {{'account.doTransaction' | translate}}
            </button>
          </div>
        </div>
      </form>
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
      successOnCartRequest: false,
      selectedAccount: {},
      selectedBranch: {},
      requestForCart: {
        brachID: '',
        accountID: ''
      }
    }
  },
  methods: {
    changeAccount (account) {
      this.selectAccount = account
      this.requestForCart.accountID = account.id
      console.log(this.selectAccount)
    },
    changeBranch (branch) {
      this.selectBranch = branch
      console.log(branch)
      this.requestForCart.brachID = branch.id
      console.log(this.selectBranch)
    },
    submitCartRequest () {
      console.log(this.requestForCart)
      this.$http.post('http://localhost:8091/customer/request/card', this.requestForCart, {
        headers: {
          'Authorization': 'Bearer ' + this.$localStorage.get('token_key', 'fake')
        }
      }).then(response => {
        if (response.ok) {
          this.successOnCartRequest = true
          console.log(response)
        } else {
          this.successOnCartRequest = false
          console.log(response)
        }
      }, error => {
        this.successOnCartRequest = false
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss">

</style>
