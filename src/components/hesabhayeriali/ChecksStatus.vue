<template>
  <div>
    <vuestic-widget :headerText="$t('account.checksstatus.title')">
          <div class="table-responsive">
              <table class="table table-striped first-td-padding">
                      <thead>
                          <tr>
                              <td>{{'account.checksstatus.dasteCheckId' | translate }}</td>
                              <td>{{'account.checksstatus.checkId' | translate }}</td>
                              <td>{{'account.checksstatus.type' | translate }}</td>
                              <td>{{'account.checksstatus.cash' | translate }}</td>
                              <td>{{'account.checksstatus.toName' | translate }}</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="check in checks">
                              <td>{{check.checkID.checkBookNumber}}</td>
                              <td>{{check.checkID.checkNumber}}</td>
                              <td v-html="getPayedStatus(check.status)">{{ getPayedStatus(check.status)  }}</td>
                              <td>{{check.cash}}</td>
                              <td>{{check.toName}}</td>

                          </tr>
                      </tbody>
              </table>
          </div>
        </vuestic-widget>
  </div>

</template>

<script>

export default {
  name: 'checks-status',
  data () {
    return {
      checks: [
        {
          checkID: {
            checkBookNumber: '',
            checkNumber: ''
          }
        }
      ]
    }
  },
  created: function () {
    this.$http.get('http://localhost:8091/customer/report/check', {
      headers: {
        'Authorization': 'Bearer ' + this.$localStorage.get('token_key', 'fake')
      }
    }).then(response => {
      if (response.ok) {
        console.log(response)
        this.checks = response.body
      }
    }, error => {
      console.log(error)
    })
  },
  methods: {
    getPayedStatus (type) {
      switch (type) {
        case 'PASS':
          return '<span class="passed">' + 'پاس شده' + '</span>'
        case 'REJECTED':
          return '<span class="bargasht">' + 'برگشت خورده' + '</span>'
        case 'NOT_USE':
          return 'استفاده نشده'
      }
    }
  }
}


</script>

<style lang="scss">
  @import "../../sass/_variables.scss";
  .bargasht {
    color: $brand-warning
  }
  .passed {
    color: $brand-primary
  }
</style>
