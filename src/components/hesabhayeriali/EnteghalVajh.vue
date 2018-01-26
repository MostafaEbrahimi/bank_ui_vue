<template>
  <div>
    <accounts-component v-on:account-changed="changeAccount" ></accounts-component>
    <vuestic-widget :headerText="'account.enteghalvajh.title' | translate">
      <div v-show="viewFlagControllers.successEnteghalVajh" class="row">
        <div class="col-md-12">
          <vuestic-alert type="success" :withCloseBtn="true">
            {{ 'account.enteghalvajh.successMessage' | translate }}
          </vuestic-alert>
        </div>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group ">
              <div class="input-group">
                <input type="number" v-model="enteghalvajhObj.distAccount" required/>
                <label class="control-label" >{{'account.enteghalvajh.destinAccount' | translate}}</label><i class="bar"></i>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group ">
              <div class="input-group">
                <input type="number" v-model="enteghalvajhObj.amount" required/>
                <label class="control-label" >{{'account.enteghalvajh.priceValue' | translate}}</label><i class="bar"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class=" justify-content-center" >
            <button href="#" @click.prevent="submitEnteghalVajh" class="btn btn-primary">
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

export default {
  name: 'enteghal-vajh',
  components: {
    AccountsComponent
  },
  data () {
    return {
      viewFlagControllers: {
        successEnteghalVajh: false,
        failedEnteghalVajh: false,
        sendRequest: false
      },
      enteghalvajhObj: {
        sourceAccount: 0,
        distAccount: 0,
        amount: 0
      }
    }
  },

  methods: {
    changeAccount (account) {
      this.enteghalvajhObj.sourceAccount = account.accountNumber
      console.log(account)
    },
    submitEnteghalVajh () {
      this.$http.post('http://localhost:8091/customer/create/draft', this.enteghalvajhObj, {
        headers: {
          'Authorization': 'Bearer ' + this.$localStorage.get('token_key', 'fake')
        }
      }).then(response => {
        if (response.ok) {
          if (response.body.amount !== undefined) {
            this.viewFlagControllers.successEnteghalVajh = true
          } else {
            this.viewFlagControllers.failedEnteghalVajh = true
          }
          console.log(response)
        } else {
          console.log(response)
        }
      }, error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss">

</style>
