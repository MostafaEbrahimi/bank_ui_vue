<template>

    <vuestic-widget :headerText="'account.branch.selectTitle' | translate">
        <vuestic-simple-select
          style ="width:100%"
          :label="'account.branch.title' | translate"
          v-model="selected_branch"
          option-key="address"
          v-bind:options="branches">
        </vuestic-simple-select>

    </vuestic-widget>

</template>

<script>
export default {
  name: 'bank-branch-component',
  data () {
    return {
      selected_branch: {},
      showNetworkError: false,
      branches: []
    }
  },
  created: function () {
    this.$http.get('http://localhost:8091/customer/branch/list', {
      headers: {
        'Authorization': 'Bearer ' + this.$localStorage.get('token_key', 'fake')
      }
    }).then(response => {
      console.log(response)
      if (response.ok) {
        this.showNetworkError = true
        this.branches = response.body
      }
    }, error => {
      this.showNetworkError = false
      console.log(error)
    })
  },
  watch: {
    selected_branch: function (branch) {
      this.$emit('branch-changed', branch)
    }
  }
}
</script>

<style lang="scss">
  .selected-account{
    color: red;
  }
</style>
