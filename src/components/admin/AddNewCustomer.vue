<template>
  <div class="form-elements">
    <div v-show="!submitedData" class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'forms.inputs.title' | translate">
          <form>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group ">
                  <div class="input-group">
                    <input v-model="newCustomer.firstname" required/>
                    <label class="control-label" >{{'admin.customer.firstname' | translate}}</label><i class="bar"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group ">
                  <div class="input-group">
                    <input v-model="newCustomer.lastname" required/>
                    <label class="control-label" >{{'admin.customer.lastname' | translate}}</label><i class="bar"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <vuestic-switch v-model="isMale">
                  <span slot="trueTitle">{{'forms.controls.male' | translate}}</span>
                  <span slot="falseTitle">{{'forms.controls.female' | translate}}</span>
                </vuestic-switch>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group ">
                  <div class="input-group">
                    <input v-model="newCustomer.email" required/>
                    <label class="control-label" >{{'admin.customer.email' | translate}}</label><i class="bar"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group ">
                  <div class="input-group">
                    <input type="number" v-model="newCustomer.nationalid" required/>
                    <label class="control-label" >{{'admin.customer.nationalid' | translate}}</label><i class="bar"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 offset-md-4">
                <div class="form-group ">
                  <div class="input-group">
                    <textarea v-model="newCustomer.address" required/>
                    <label class="control-label" >{{'admin.customer.address' | translate}}</label><i class="bar"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 justify-content-center" >
                <button href="#" @click.prevent="submitNewUser" class="btn btn-primary">
                  {{'admin.register_new_customer' | translate}}
                </button>
              </div>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>
    <div v-show="submitedData" class="row">
      <div class="col-md-12">
        <vuestic-alert :type="getAlertType" :withCloseBtn="false">
          {{ alertMessage }}
        </vuestic-alert>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'create-new-customer',
    data () {
      return {
        isMale: false,
        newCustomer: {
          firstname: '',
          lastname: '',
          email: '',
          nationalid: '',
          birthdaydate: '12-15-2016',
          sex: '',
          address: ''
        },
        submitedData: false,
        errorSubmit: false,
        alertMessage: ''
      }
    },
    computed: {
      submitNewUser: function () {
        // if (this.isMale)
        //   this.newCustomer.sex = 'male'
        // else { this.newCustomer.sex = 'female' }

        this.$http.post('http://localhost:8080/newcustomer' + '?auth=aut_token', this.newCustomer).then(response => {
          this.submitedData = true
          this.errorSubmit = false
          console.log(response)
        }, error => {
          this.submitedData = true
          this.errorSubmit = true
          console.log(error)
        })
      },
      getAlertType: function () {
        if (!this.errorSubmit) {
          this.alertMessage = this.$t('errors.success_on_submit_data')
          return 'success'
        } else {
          this.alertMessage = this.$t('errors.error_on_submit_data')
          return 'danger'
        }
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">

</style>
