<template>
    <div>
        <vuestic-widget v-show="showUsers" :headerText="$t('admin.customers')">
            <div class="form-group">
              <div class="input-group">
                <input id="simple-input" v-model="search" required/>
                <label class="control-label" for="simple-input">{{'admin.search_customer_national_id' | translate}}</label><i class="bar"></i>
              </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped first-td-padding">
                        <thead>
                            <tr>
                                <td>{{'admin.customer.firstname' | translate }}</td>
                                <td>{{'admin.customer.lastname' | translate }}</td>
                                <td>{{'admin.customer.nationalid' | translate }}</td>
                                <td>{{'admin.customer.email' | translate }}</td>
                                <td>{{'admin.customer.birthdaydate' | translate }}</td>
                                <td>{{'admin.customer.sex' | translate }}</td>
                                <td>{{'admin.customer.address' | translate }}</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="customer in filteredUsers">
                                <td>{{ customer.firstname | slice }}</td>
                                <td>{{ customer.lastname | slice }}</td>
                                <td>{{ customer.nationalid | slice }}</td>
                                <td>{{ customer.email | slice }}</td>
                                <td>{{ customer.birthdaydate | slice }}</td>
                                <td>{{ customer.sex | slice }}</td>
                                <td>{{ customer.address | slice }}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </vuestic-widget>
        <div v-show="!showUsers">
          <div class="dashboard">
            <div class="row">
              <div class="col-md-12">
                <vuestic-alert type="danger" :withCloseBtn="false">
                  {{'errors.problem_in_network_communication' | translate }}
                </vuestic-alert>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'customer-user-table',
  data () {
    return {
      search: '',
      showUsers: false,
      users: []
    }
  },
  computed: {
    filteredUsers: function () {
      return this.users.filter(customer => {
        return customer.nationalid.match(this.search) > -1
      })
    }
  },
  created: function () {
    this.$http.get('http://localhost:8080/getAdminUser').then(response => {
      if (response.ok) {
        this.showUsers = true
        this.users = response.body
      }
    }, error => {
      this.showUsers = false
      console.log(error)
    })
  }
}
</script>

<style lang="scss">

</style>
