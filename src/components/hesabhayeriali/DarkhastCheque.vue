<template>
  <div>
    <accounts-component v-on:account-changed="changeAccount" ></accounts-component>
    <bank-branch-component v-on:branch-changed="changeBranch" ></bank-branch-component>
    <vuestic-widget :headerText="'account.darkhastcheque.title' | translate">
      <form>
        <div v-show="successOnDarkhastCheque" class="row">
          <div class="col-md-12">
            <vuestic-alert type="success" :withCloseBtn="true">
              {{ 'account.darkhastcheque.successMessage' | translate }}
            </vuestic-alert>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group ">
              <div class="input-group">
                <input type="text" v-model="darkhastcheque.nameOfOwner" required/>
                <label class="control-label" >{{'account.darkhastcheque.nameOfOwner' | translate}}</label><i class="bar"></i>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group ">
              <div class="input-group">
                <input type="number" v-model="darkhastcheque.chechbookCount" required/>
                <label class="control-label" >{{'account.darkhastcheque.chechbookCount' | translate}}</label><i class="bar"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 justify-content-center" >
            <button href="#" @click.prevent="submitDarkhastCheque" class="btn btn-primary">
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
      successOnDarkhastCheque: false,
      selectedAccount: {},
      selectedBranch: {},
      darkhastcheque: {
        chechbookCount: '',
        nameOfOwner: '',
        branchID: 0,
        accountID: 0
      }
    }
  },
  methods: {
    changeAccount (account) {
      this.selectAccount = account
      this.darkhastcheque.accountID = account.id
      console.log(this.selectAccount)
    },
    changeBranch (branch) {
      this.selectBranch = branch
      console.log(branch)
      this.darkhastcheque.branchID = branch.id
      console.log(this.selectBranch)
    },
    submitDarkhastCheque () {
      this.$http.post('http://localhost:8091/customer/request/checkbook', this.darkhastcheque, {
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

</style>
