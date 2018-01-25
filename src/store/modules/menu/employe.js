import lazyLoading from './lazyLoading'

export default {
  name: 'Employe',
  path: '/employe',
  component: lazyLoading('employe/CustomerRequestsTable'),
  meta: {
    default: true,
    title: 'employee.employee',
    iconClass: 'vuestic-icon vuestic-icon-dashboard'
  }
}
