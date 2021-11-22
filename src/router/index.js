import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      { path: '/', component: () => import('../views/MainPage.vue') },
      { path: '/profile/:id', component: () => import('../views/Profile.vue') },
      { path: '/financial-transactions', component: () => import('../views/FinancialTransactions.vue') },
      { path: '/financial-transactions', component: () => import('../views/FinancialTransactions.vue') },
      { path: '/trips', component: () => import('../views/trips/Trips.vue') },
      { path: '/add-new-trip-section', component: () => import('../views/trips/AddNewTrip.vue') },
      { path: '/orders', component: () => import('../views/orders/Orders.vue') },
      { path: '/add-new-order-section', component: () => import('../views/orders/AddNewOrderSection.vue') },
      { path: '/response-to-order-requests', component: () => import('../views/orders/ResponseToOrderRequests.vue') },
      { path: '/send-email', component: () => import('../views/SendEmail.vue') },
      { path: '/customers', component: () => import('../views/customers/Customers') },
      { path: '/add-new-customer', component: () => import('../views/customers/AddNewCustomer') },
      { path: '/customers', component: () => import('../views/customers/Customers') },
      { path: '/edit-customer/:id', component: () => import('../views/customers/EditCustomer.vue') },
      { path: '/customers-documentation', component: () => import('../views/customers/CustomerDocumentation') },
      { path: '/edit-customer-documentation/:id', component: () => import('../views/customers/EditCustomerDocumentation') },
      { path: '/setting', component: () => import('../views/Setting') },
      { path: '/coupons', component: () => import('../views/coupon/Coupons') },
      { path: '/invoice/:id', component: () => import('../views/coupon/Coupons') },
      { path: '/coupons-users', component: () => import('../views/coupon/CouponsUsers') },
      { path: '/add-new-coupon', component: () => import('../views/coupon/AddNewCoupon') },
      { path: '/chats', component: () => import('../views/Chats') },

    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
