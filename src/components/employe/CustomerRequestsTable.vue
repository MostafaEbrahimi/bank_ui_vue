<template>
    <div>
        <vuestic-widget :headerText="$t('admin.customers')">
            <div class="table-responsive">
                <table class="table table-striped first-td-padding">
                        <thead>
                            <tr>
                                <td>{{'employee.owner' | translate }}</td>
                                <td>{{'employee.request_type' | translate }}</td>
                                <td>{{'employee.request_date' | translate }}</td>
                                <td>{{'employee.reject' | translate }}</td>
                                <td>{{'employee.accept' | translate }}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="request in requests">
                                <td>{{ request.owner | slice }}</td>
                                <td>{{ request.type | slice }}</td>
                                <td>{{ request.request_date | slice }}</td>
                                <td @click.prevent="rejectRequest(request)">
                                  <button class="btn btn-sm btn-outline-danger">
                                    {{'employee.reject' | translate}}
                                  </button>
                                </td>
                                <td @click.prevent="acceptRequest(request)">
                                  <button class="btn btn-sm btn-outline-info">
                                    {{'employee.accept' | translate}}
                                  </button>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </vuestic-widget>
    </div>
</template>

<script>
export default {
  data () {
    return {
      showRequests: false,
      requests: [
        {
          'owner': 'ali',
          'type': 'type1',
          'request_date': 'date'
        },
        {
          'owner': 'ali',
          'type': 'type1',
          'request_date': 'date'
        },
        {
          'owner': 'ali',
          'type': 'type1',
          'request_date': 'date'
        }
      ]
    }
  },
  methods: {
    acceptRequest: function (request) {
      this.$http.get('url://localhost:8080/accept' + '?auth_name=laskjdlad' + '&reqid=' + request.id).then(response => {
        if (response.ok) {
          this.showRequests = true
          let i = this.requests.indexOf(request)
          if (i !== -1) {
            this.requests.splice(i, 1)
          }
          console.log('request Accepted Successfully')
        } else {
          console.log('reponse error')
        }
      }, error => {
        this.showRequests = false
        console.log('network error - accept' + error)
      })
    },
    rejectRequest: function (request) {
      this.$http.get('url://localhost:8080/reject' + '?auth_name=laskjdlad' + '&reqid=' + request.id).then(response => {
        if (response.ok) {
          this.showRequests = true
          console.log('request rejected Successfully')
          let i = this.requests.indexOf(request)
          if (i !== -1) {
            this.requests.splice(i, 1)
          }
        } else {
          console.log('reponse error')
        }
      }, error => {
        this.showRequests = false
        console.log('network error - reject' + error)
      })
    }
  },
  computed: {
    filteredUsers: function () {
      return this.requests.filter(customer => {
        return customer.nationalid.match(this.search) > -1
      })
    }
  },
  created: function () {
    this.$http.get('http://localhost:8080/getRequest' + '?auth=laksjd').then(response => {
      if (response.ok) {
        this.showRequests = true
        this.requests = response.body
      }
    }, error => {
      this.showRequests = false
      console.log(error)
    })
  }
}
</script>

<style lang="scss">

</style>
