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
      name: 'khadamatsharj',
      path: '/hesabhayeriali/khadamatsharj',
      component: lazyLoading('hesabhayeriali/KhadamatSharj'),
      meta: {
        default: false,
        title: 'account.khadamatsharj.title',
        newWindow: false
      }
    }
  ]
}
