<template>
  <div>
    <vuestic-widget :headerText="$t('account.requestReport.title')">
          <div class="table-responsive">
              <table class="table table-striped first-td-padding">
                      <thead>
                          <tr>
                              <td>{{'account.requestReport.type' | translate }}</td>
                              <td>{{'account.requestReport.forWhy' | translate }}</td>
                              <td>{{'account.requestReport.accountNumber' | translate }}</td>
                              <td>{{'account.requestReport.requestStatus' | translate }}</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="request in requests">
                              <td>{{ getType(request.type) }}</td>
                              <td>{{ getForWhy(request.requestResponse) }}</td>
                              <td>{{ request.account.accountNumber  }}</td>
                              <td v-html="getStatus(request.status)">{{ getStatus(request.status)  }}</td>
                          </tr>
                      </tbody>
              </table>
          </div>
        </vuestic-widget>
  </div>

</template>

<script>
export default {
  name: 'report-request',
  data () {
    return {
      showNetworkError: false,
      requests: [
        {
          account: {
            accountNumber: ''
          },
          requestResponse: {
            forWhy: ''
          }
        }
      ]
    }
  },
  created: function () {
    this.$http.get('http://localhost:8091/customer/report/request', {
      headers: {
        'Authorization': 'Bearer ' + this.$localStorage.get('token_key', 'fake')
      }
    }).then(response => {
      console.log(response)
      if (response.ok) {
        this.requests = response.body
      }
    }, error => {
      this.showNetworkError = false
      console.log(error)
    })
  },
  methods: {
    getForWhy (value) {
      if (value !== null) {
        return value.forWhy
      } else {
        return 'پاسخ داده نشده'
      }
    },
    getStatus (type) {
      switch (type) {
        case 'READED':
          return 'خوانده شده'
        case 'ACCEPT':
          return '<span class="accept">' + 'پذیرفته شده' + '</span>'
        case 'REJECT':
          return '<span class="reject">' + 'رد شده' + '</span>'
        case 'NOT_OPEN':
          return 'مشاهده نشده'
        case 'REDIRECTED':
          return 'ارسال به سایر'
      }
    },
    getType (type) {
      switch (type) {
        case 'FACILITY':
          return 'تسهیلات'
        case 'CHECKBOOK':
          return 'دسته چک'
        case 'CARD':
          return 'کارت'
      }
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
