<template>
  <div>
    <accounts-component v-on:account-changed="changeAccount" ></accounts-component>
    <vuestic-widget :headerText="'account.khadamatsharj.title' | translate">
      <form>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group ">
              <div class="input-group">
                <input type="number" v-model="khadamatsharj.sourceAccount" required/>
                <label class="control-label" >{{'account.enteghalvajh.sourceAccount' | translate}}</label><i class="bar"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group ">
              <div class="input-group">
                <input type="number" v-model="khadamatsharj.destinAccount" required/>
                <label class="control-label" >{{'account.enteghalvajh.destinAccount' | translate}}</label><i class="bar"></i>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group ">
              <div class="input-group">
                <input type="number" v-model="khadamatsharj.pricevalue" required/>
                <label class="control-label" >{{'account.enteghalvajh.priceValue' | translate}}</label><i class="bar"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 justify-content-center" >
            <button href="#" @click.prevent="submitKhadamatSharj" class="btn btn-primary">
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
  name: 'khadamat-sharj',
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
      selectedAccount: {},
      khadamatsharj: {
        sourceAccount: '',
        destinAccount: '',
        priceValue: 0
      }
    }
  },
  methods: {
    changeAccount (account) {
      this.selectAccount = account
      console.log(this.selectAccount)
    },
    submitEnteghalVajh () {
      this.$http.post('http://localhost:8091/customer/khadamatsharj' + '?auth=token', this.enteghalvajhObj).then(response => {
        if (response.ok) {
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
