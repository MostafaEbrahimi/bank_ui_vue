<template>
  <div>
    <accounts-component v-on:account-changed="changeAccount" ></accounts-component>
    <vuestic-widget :headerText="'account.accountinfo.title' | translate">
      <div v-if="showAccountInfo" style="text-align:right" class="d-flex overview-row flex-row w-100 justify-content-sm-around justify-content-xs-end">
        <div class="overview-col">
          <div class="overview-item" style="margin-top:30px">
            <h6>{{'account.accountinfo.shomarehesab' | translate}}</h6>
            {{accountinfo.accountNumber}}
          </div>
          <div class="overview-item" style="margin-top:30px">
            <h6>{{'account.accountinfo.mandehesab' | translate}}</h6>
            {{accountinfo.cash }}
          </div>
          <div class="overview-item" style="margin-top:30px">
            <h6>{{'account.accountinfo.startdate' | translate}}</h6>
            {{accountinfo.startDate}}
          </div>
        </div>
        <div class="overview-col">
          <div class="overview-item" style="margin-top:30px">
            <h6>{{'account.accountinfo.accountTypeIndivisual' | translate}}</h6>
            {{getTypeIndiv(accountinfo.accountTypeIndivisual)}}
          </div>
          <div class="overview-item" style="margin-top:30px">
            <h6>{{'account.accountinfo.accountTypeReal' | translate}}</h6>
            {{getTypeReal(accountinfo.accountTypeReal) }}
          </div>
          <div class="overview-item" style="margin-top:30px">
            <h6>{{'account.accountinfo.accountType' | translate}}</h6>
            {{getAccountType(accountinfo.accountType)}}
          </div>
        </div>
      </div>
      <div v-if="!showAccountInfo" class="row">
        <div class="col-md-12">
          <vuestic-alert type="success" :withCloseBtn="false">
            {{ 'account.please_select_account' | translate }}
          </vuestic-alert>
        </div>
      </div>
    </vuestic-widget>
  </div>


</template>

<script>
import AccountsComponent from './AccountsComponent'

export default {
  name: 'account-info',
  components: {
    AccountsComponent
  },
  data () {
    return {
      showAccountInfo: false,
      accountinfo: {
        accountNumber: 0,
        cash: 0,
        startDate: '',
        accountTypeIndivisual: '',
        accountTypeReal: '',
        accountType: ''
      }
    }
  },

  methods: {
    getAccountType (value) {
      switch (value) {
        case 'GHARZ':
          return 'قرض‌الحسنه'
        case 'SEPORDE_KOTAH':
          return 'سپرده کوتاه مدت'
        case 'SEPORDE_BOLAND':
          return 'سپرده بلند مدت'
        case 'JARI':
          return 'سپرده جاری'
      }
    },
    getTypeReal (value) {
      switch (value) {
        case 'REAL':
          return 'حقیقی'
        default:
          return 'حقوقی'
      }
    },
    getTypeIndiv (value) {
      switch (value) {
        case 'GROUP':
          return 'گروهی'
        default:
          return 'فردی'
      }
    },
    changeAccount (account) {
      this.showAccountInfo = true
      this.accountinfo = account
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
  @import "../../sass/_variables.scss";
  .overview-item h6{
    color: $brand-primary
  }
</style>
