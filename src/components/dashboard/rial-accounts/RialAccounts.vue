<template>
  <div class="data-visualisation-tab dashboard-tab">
    <div class="row">
      <!-- <div class="col-md-6">
        <div class="chart-container">
          <vuestic-chart v-bind:data="donutChartData" type="donut"></vuestic-chart>
        </div>
      </div> -->
      <div class="col-md-12 ui-grid" >
         <div class="row">
            <div class="col" >
              <vuestic-widget  class="info-widget" >
                <div class="info-widget-inner">
                  <div class="stats">
                    <div class="stats-number">
                      <!-- <i class="ion ion-arrow-up-c text-primary stats-icon"></i> -->
                      {{'modiriat_hesab.modiriat_hesab' | translate}}
                    </div>
                    <div class="stats-title"  @click.prevent="inc">{{'dashboard.select' | translate}}</div>
                  </div>
                </div>
              </vuestic-widget>
            </div>
            <div class="col">
              <vuestic-widget  class="info-widget" >
                <div class="info-widget-inner">
                  <div class="stats">
                    <div class="stats-number">
                      <!-- <i class="ion ion-arrow-up-c text-primary stats-icon"></i> -->
                      {{'modiriat_hesab.khadamat_enteghal_vajh' | translate}}
                    </div>
                    <div class="stats-title">{{'dashboard.select' | translate}}</div>
                  </div>
                </div>
              </vuestic-widget>
            </div>
            <div class="col" >
              <vuestic-widget  class="info-widget" >
                <div class="info-widget-inner">
                  <div class="stats">
                    <div class="stats-number">
                      <!-- <i class="ion ion-arrow-up-c text-primary stats-icon"></i> -->
                      {{'modiriat_hesab.khadamat_sharj' | translate}}
                    </div>
                    <div class="stats-title">{{'dashboard.select' | translate}}</div>
                  </div>
                </div>
              </vuestic-widget>
            </div>
            <div class="col">
              <vuestic-widget  class="info-widget" >
                <div class="info-widget-inner">
                  <div class="stats">
                    <div class="stats-number">
                      <!-- <i class="ion ion-arrow-up-c text-primary stats-icon"></i> -->
                      {{'modiriat_hesab.khadamat_chequ' | translate}}
                    </div>
                    <div class="stats-title">{{'dashboard.select' | translate}}</div>
                  </div>
                </div>
              </vuestic-widget>
            </div>
          </div>
          <div class="row">
            <div class="col" >
              <vuestic-widget  class="info-widget" >
                <div class="info-widget-inner">
                  <div class="stats">
                    <div class="stats-number">
                      <!-- <i class="ion ion-arrow-up-c text-primary stats-icon"></i> -->
                      {{'modiriat_hesab.modiriat_cart' | translate}}
                    </div>
                    <div class="stats-title">{{'dashboard.select' | translate}}</div>
                  </div>
                </div>
              </vuestic-widget>
            </div>
            <div class="col" >
              <vuestic-widget  class="info-widget" >
                <div class="info-widget-inner">
                  <div class="stats">
                    <div class="stats-number">
                      <!-- <i class="ion ion-arrow-up-c text-primary stats-icon"></i> -->
                      {{'modiriat_hesab.modiriat_emza' | translate}}
                    </div>
                    <div class="stats-title">{{'dashboard.select' | translate}}</div>
                  </div>
                </div>
              </vuestic-widget>
            </div>
            <div class="col" >
              <vuestic-widget  class="info-widget" >
                <div class="info-widget-inner">
                  <div class="stats">
                    <div class="stats-number">
                      <!-- <i class="ion ion-arrow-up-c text-primary stats-icon"></i> -->
                      {{'modiriat_hesab.cart_sookht' | translate}}
                    </div>
                    <div class="stats-title">{{'dashboard.select' | translate}}</div>
                  </div>
                </div>
              </vuestic-widget>
            </div>
            <div class="col" >
              <vuestic-widget  class="info-widget" >
                <div class="info-widget-inner">
                  <div class="stats">
                    <div class="stats-number">
                      <!-- <i class="ion ion-arrow-up-c text-primary stats-icon"></i> -->
                      {{'modiriat_hesab.oragh_bahadar' | translate}}
                    </div>
                    <div class="stats-title">{{'dashboard.select' | translate}}</div>
                  </div>
                </div>
              </vuestic-widget>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'
  import BadgeColumn from 'components/tables/BadgeColumn.vue'
  import DonutChartData from '../data-visualisation-tab/DonutChartData'
  import LocalData from 'components/vuestic-components/vuestic-datatable/data/local-data'
  import FieldsDef from '../data-visualisation-tab/fields-definition'

  Vue.component('badge-column', BadgeColumn)

  export default {
    name: 'rial-accounts',

    methods: {
      inc: function (event) {
        this.$data.counter = this.$data.counter + 1
        console.log(this.$data.counter)
      }
    },

    data () {
      return {
        counter: 0,
        donutChartData: DonutChartData,
        apiMode: false,
        sortFunctions: FieldsDef.sortFunctions,
        tableData: LocalData.data,
        onEachSide: 1,
        tableFields: FieldsDef.tableFields,
        paginationPath: 'pagination',
        itemsPerPage: [
          {
            value: 5
          },
          {
            value: 6
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "../../../../node_modules/bootstrap/scss/functions";
  @import "../../../../node_modules/bootstrap/scss/variables";
  @import "../../../../node_modules/bootstrap/scss/mixins/breakpoints";

  .chart-container {
    padding: 0 2rem;
    height: 24rem;
  }

  .ui-grid{
    .row{
      .col{
        .info-widget{
          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
          &:hover{
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
          }
        }
      }
    }
  }

  .ui-grid {
    .row {
      div[class^=col] {
        padding: 0;
        margin:10px;
        div {
          display: flex;
          align-items:center;
          justify-content: center;
          text-align: center;
          margin: .5rem .25rem;
          min-height: 3rem;
        }
      }
    }
  }

  .stats-number, .stats-title {
    line-height: 1;
  }

  .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .stats-title{
    &:hover{
      color:$theme-blue;
      cursor: pointer;
    }
  }

  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;
    margin-bottom: 0;

    .stats-icon {
      font-size: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      left: -1.25rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }


</style>
