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
      name: 'enteghalvajh',
      path: '/hesabhayeriali/enteghalvajh',
      component: lazyLoading('hesabhayeriali/EnteghalVajh'),
      meta: {
        default: true,
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
    }
  ]
}
