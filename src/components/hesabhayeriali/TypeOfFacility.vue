<template>

    <vuestic-widget :headerText="'account.facility_type.selecttitle' | translate">
        <vuestic-simple-select
          style ="width:100%"
          :label="'account.facility_type.title' | translate"
          v-model="selected_type"
          option-key="keyValue"
          v-bind:options="types">
        </vuestic-simple-select>

    </vuestic-widget>

</template>

<script>
export default {
  name: 'type-of-facility',
  data () {
    return {
      selected_type: {},
      types: [
        {
          keyName: 'MASKANE_HEYATE_ELMI',
          keyValue: 'مسکن هیئات علمی'
        },
        {
          keyName: 'MASKANE_NOKHBEGAN',
          keyValue: 'مسکن نخبگان'
        },
        {
          keyName: 'SARMAYE_DAR_GOSTARESH',
          keyValue: 'سرمایه در گسترش'
        },
        {
          keyName: 'BONGAH_KOCHIK_MOTEVASET',
          keyValue: 'بنگاه‌های کوچک متوسط'
        }
      ]
    }
  },
  watch: {
    selected_type: function (facility) {
      this.$emit('facility-changed', facility)
    }
  }
}
</script>

<style lang="scss">
  .selected-account{
    color: red;
  }
</style>
