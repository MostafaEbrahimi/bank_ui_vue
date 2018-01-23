/**
 * Created by yarik on 18.7.17.
 */
import lazyLoading from './lazyLoading'

export default {
  name: 'admin',
  meta: {
    expanded: false,
    title: 'admin.admin',
    iconClass: 'vuestic-icon vuestic-icon-auth'
  },
  children: [
    {
      name: 'Customers',
      path: '/admin/customers',
      component: lazyLoading('admin/CustomersTable'),
      meta: {
        default: true,
        title: 'admin.customers',
        newWindow: false
      }
    },
    {
      name: 'Add',
      path: '/admin/addnew',
      component: lazyLoading('admin/AddNewCustomer'),
      meta: {
        default: false,
        title: 'admin.add',
        newWindow: false
      }
    }
  ]
}
