/**
 * Created by yarik on 18.7.17.
 */
import lazyLoading from './lazyLoading'

export default {
  name: 'hesabhayeriali',
  meta: {
    expanded: true,
    title: 'account.hesabhayeriali',
    iconClass: 'vuestic-icon vuestic-icon-auth'
  },
  children: [
    {
      name: 'accountinfo',
      path: '/hesabhayeriali/accountinfo',
      component: lazyLoading('hesabhayeriali/AccountInfo'),
      meta: {
        default: true,
        title: 'account.accountinfo.title',
        newWindow: false
      }
    },
    {
      name: 'enteghalvajh',
      path: '/hesabhayeriali/enteghalvajh',
      component: lazyLoading('hesabhayeriali/EnteghalVajh'),
      meta: {
        default: false,
        title: 'account.enteghalvajh.title',
        newWindow: false
      }
    },
    {
      name: 'darkhastcheque',
      path: '/hesabhayeriali/darkhastcheque',
      component: lazyLoading('hesabhayeriali/DarkhastCheque'),
      meta: {
        default: false,
        title: 'account.darkhastcheque.title',
        newWindow: false
      }
    },
    {
      name: 'accountflow',
      path: '/hesabhayeriali/accountflow',
      component: lazyLoading('hesabhayeriali/AccountFlow'),
      meta: {
        default: false,
        title: 'account.accountFlow.title',
        newWindow: false
      }
    },
    {
      name: 'checkstatus',
      path: '/hesabhayeriali/checkstatus',
      component: lazyLoading('hesabhayeriali/ChecksStatus'),
      meta: {
        default: false,
        title: 'account.checksstatus.title',
        newWindow: false
      }
    }
  ]
}
