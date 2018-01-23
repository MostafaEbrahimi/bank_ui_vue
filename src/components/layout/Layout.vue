<template>
  <div :class="classObject" v-resize>
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="content-wrap" id="content-wrap">
      <main id="content" class="content" role="main">
        <fingerprint-spinner
          :animation-duration="1200"
          :size="180"
          :color="'#4ae387'"
          v-show="isLoading"
          ref="preLoader"
          class="pre-loader"
          style="position: absolute;"
        />
        <!-- <vuestic-pre-loader  class="pre-loader"></vuestic-pre-loader> -->
        <router-view v-show="!isLoading"></router-view>
      </main>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {FingerprintSpinner} from 'epic-spinners'
  import Navbar from './navbar/Navbar'
  import Sidebar from './sidebar/Sidebar'
  import Resize from 'directives/ResizeHandler'


  export default {
    name: 'layout',

    components: {
      Navbar,
      Sidebar,
      FingerprintSpinner
    },
    directives: {
      resize: Resize
    },
    computed: {
      ...mapGetters([
        'sidebarOpened',
        'toggleWithoutAnimation',
        'isLoading'
      ]),
      classObject: function () {
        return {
          'sidebar-hidden': !this.toggleWithoutAnimation && !this.sidebarOpened,
          'sidebar-hidden sidebar-hidden_without-animation': this.toggleWithoutAnimation && !this.sidebarOpened
        }
      }
    },
    data () {
      return {
        isAdmin: false
      }
    },
    created: function () {
      this.isAdmin = this.$localStorage.get('isadmin', false)
    }
  }
</script>

<style lang="scss">
  @import "../../sass/_variables.scss";
  @import "../../../node_modules/bootstrap/scss/mixins/breakpoints";
  @import "../../../node_modules/bootstrap/scss/functions";
  @import "../../../node_modules/bootstrap/scss/variables";

  .content-wrap {
    margin-right: $content-wrap-ml;
    padding: $content-wrap-pt 0 $content-wrap-pb $content-wrap-pr;
    transition: margin-left 0.3s ease;

    .pre-loader {
      position: absolute;
      left: $vuestic-preloader-left;
      top: $vuestic-preloader-top;
    }

    .sidebar-hidden & {
      margin-right: $sidebar-left;
    }

    @include media-breakpoint-down(md) {
      padding: $content-mobile-wrap;
      margin-right: 0;

      .sidebar-hidden & {
        margin-right: 0;
      }
    }
  }
</style>
