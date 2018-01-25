<template>
  <div class="login">
    <h2>{{'auth.welcome' | translate}}</h2>
    <form method="post" action="/auth/login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" v-model="login.username" id="username" required="required"/>
          <label class="control-label" for="username">{{'auth.username' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" v-model="login.password" id="password" required="required"/>
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" @click.prevent="postLogin" type="submit">
          {{'auth.login' | translate}}
        </button>
        <!-- <router-link class='link' :to="{name: 'Signup'}">{{'auth.createAccount' | translate}}</router-link> -->
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        login: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      postLogin: function () {
        this.$http.post('http://localhost:8080', this.login).then(response => {
          console.log(response)
          if (response.ok) {
            this.$localStorage.set('auth_key', 123)
            this.$localStorage.set('role', 'admin')
            // this.$localStorage.set('role', 'customer')
            // this.$localStorage.set('role', 'employee')

            this.$localStorage.set('login', 'true')
            this.$forceUpdate()
            this.$router.push('/dashboard')
          }
          this.$localStorage.set('login', 'false')
          // this.$localStorage.get('auth_key', undefined)
        }, errorResponse => {
          console.log(errorResponse)
          this.$localStorage.set('auth_key', undefined)
          this.$localStorage.set('login', 'false')
          // this.$localStorage.set('role', 'admin')
          // this.$localStorage.set('role', 'customer')
          this.$localStorage.set('role', 'employee')
          this.$forceUpdate()
          console.log('error')
          this.$router.push('/')
          // this.$localStorage.set('isadmin', true)// must be deleted
          // this.$router.push('/admin')// must be deleted
        })
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss">
  @import '../../../sass/variables';
  @import '../../../../node_modules/bootstrap/scss/mixins/breakpoints';
  @import "../../../../node_modules/bootstrap/scss/functions";
  @import '../../../../node_modules/bootstrap/scss/variables';
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>
