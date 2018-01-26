<template>
  <div>
    <accounts-component v-on:account-changed="changeAccount" ></accounts-component>
    <div class="row">
      <div class="col-md-6">
          <bank-branch-component v-on:branch-changed="changeBranch" ></bank-branch-component>
      </div>
      <div class="col-md-6">
          <type-of-facility v-on:facility-changed="changeTypeOfFacility" ></type-of-facility>
      </div>

    </div>

    <vuestic-widget :headerText="'account.facility.title' | translate">
      <form>
        <div v-show="successOnSubmitRequest" class="row">
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
                <input type="number" v-model="requestForFacility.amount" required/>
                <label class="control-label" >{{'account.facility.amount' | translate}}</label><i class="bar"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="justify-content-center" >
            <button href="#" @click.prevent="submitFacilityRequest" class="btn btn-primary">
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
import TypeOfFacility from './TypeOfFacility'

export default {
  name: 'request-facility',
  components: {
    AccountsComponent,
    BankBranchComponent,
    TypeOfFacility
  },
  data () {
    return {
      successOnSubmitRequest: false,
      selectedAccount: {},
      selectedBranch: {},
      requestForFacility: {
        accountID: 0,
        branchID: 0,
        amount: '',
        timeOfFacility: 10000,
        isDayOrMounth: true,
        typeOfFacility: '',
        cashType: 'RIAL',
        warantyType: 'SANAD'
      }
    }
  },
  methods: {
    changeAccount (account) {
      this.selectAccount = account
      this.requestForFacility.accountID = account.id
    },
    changeBranch (branch) {
      this.selectBranch = branch
      this.requestForFacility.branchID = branch.id
    },
    changeTypeOfFacility (facility) {
      this.requestForFacility.typeOfFacility = facility.keyName
    },
    submitFacilityRequest () {
      console.log(this.requestForFacility)
      this.$http.post('http://localhost:8091/customer/request/facility', this.requestForFacility, {
        headers: {
          'Authorization': 'Bearer ' + this.$localStorage.get('token_key', 'fake')
        }
      }).then(response => {
        if (response.ok) {
          this.successOnSubmitRequest = true
          console.log(response)
        } else {
          this.successOnSubmitRequest = false
          console.log(response)
        }
      }, error => {
        this.successOnSubmitRequest = false
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss">

</style>
