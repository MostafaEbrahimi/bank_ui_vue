<template>
  <div class="form-elements">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'forms.inputs.title' | translate">
          <form>

            <div class="col-md-6 offset-md-3">
              <fieldset>
                <vuestic-switch v-model="newCustomer.isMale">
                  <span slot="trueTitle">{{'forms.controls.male' | translate}}</span>
                  <span slot="falseTitle">{{'forms.controls.female' | translate}}</span>
                </vuestic-switch>
              </fieldset>
            </div>

          </form>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'create-new-customer',
    data () {
      return {
        newCustomer: {
          isMale: false
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
