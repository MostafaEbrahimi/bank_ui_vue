<template>

    <vuestic-widget :headerText="'account.selectaccount.title' | translate">
        <vuestic-simple-select
          style ="width:100%"
          :label="'account.account' | translate"
          v-model="selected_account"
          option-key="accountNumber"
          v-bind:options="accounts">
        </vuestic-simple-select>

    </vuestic-widget>

</template>

<script>
export default {
  name: 'accounts-component',
  data () {
    return {
      selected_account: {},
      showNetworkError: false,
      accounts: []
    }
  },
  created: function () {
    this.$http.get('http://localhost:8091/customer/home', {
      headers: {
        'Authorization': 'Bearer ' + this.$localStorage.get('token_key', 'fake')
      }
    }).then(response => {
      console.log(response)
      if (response.ok) {
        this.showNetworkError = true
        this.accounts = response.body
      }
    }, error => {
      this.showNetworkError = false
      console.log(error)
    })
  },
  watch: {
    selected_account: function (account) {
      this.$emit('account-changed', account)
    }
  }
}
</script>

<style lang="scss">
  .selected-account{
    color: red;
  }
</style>
