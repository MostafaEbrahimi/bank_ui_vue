<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-md-12">
        <vuestic-alert type="success" :withCloseBtn="true">
          <span class="badge badge-pill badge-success">{{'extra.alerts.success' | translate}}</span>
          {{'extra.alerts.successMessage' | translate}}
          <i class="fa fa-close alert-close"></i>
        </vuestic-alert>
      </div>
    </div>

    <dashboard-info-widgets></dashboard-info-widgets>

    <vuestic-widget class="no-padding no-v-padding">
      <vuestic-tabs :names="[$t('dashboard.hesabhayeriali'), $t('dashboard.tashilat'), $t('dashboard.arziaccounts'), $t('dashboard.modiriatvajh')]" ref="tabs">
        <div :slot="$t('dashboard.hesabhayeriali')">
          <rial-accounts></rial-accounts>
        </div>
        <div :slot="$t('dashboard.tashilat')">
          <users-members-tab></users-members-tab>
        </div>
        <div :slot="$t('dashboard.arziaccounts')">
          <setup-profile-tab></setup-profile-tab>
        </div>
        <div :slot="$t('dashboard.modiriatvajh')">
          <features-tab></features-tab>
        </div>
      </vuestic-tabs>
    </vuestic-widget>

    <dashboard-bottom-widgets></dashboard-bottom-widgets>

  </div>
</template>

<script>
  import DashboardInfoWidgets from './DashboardInfoWidgets'
  import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
  import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
  import FeaturesTab from './features-tab/FeaturesTab.vue'
  import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
  import RialAccounts from './rial-accounts/RialAccounts'
  import DashboardBottomWidgets from './DashboardBottomWidgets.vue'

  export default {
    name: 'dashboard',
    components: {
      DataVisualisationTab,
      DashboardInfoWidgets,
      UsersMembersTab,
      SetupProfileTab,
      FeaturesTab,
      RialAccounts,
      DashboardBottomWidgets
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";
</style>
