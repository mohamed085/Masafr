<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar bg-success collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/" exact class="nav-link" aria-current="page">
            <i class="fas fa-home"></i>الصفحة الرئيسية
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/financial-transactions" exact class="nav-link" aria-current="page">
            <i class="far fa-file"></i>المعاملات المالية والخزانة
          </router-link>
        </li>
        <li class="nav-item">
          <div @click="displayItems('tripe')" class="nav-link d-flex justify-content-between" aria-current="page">
            <router-link to="" class="sub-nav-link">
              <i class="far fa-file"></i> الرحلات
            </router-link>
            <div>
              <i v-if="displayTripeSubItem" class="fas fa-chevron-up"></i>
              <i v-if="!displayTripeSubItem" class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div v-if="displayTripeSubItem" class="ms-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link to="/trips" exact class="nav-link" aria-current="page">
                  <i class="far fa-file"></i>كل الرحلات
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/add-new-trip-section" exact class="nav-link" aria-current="page">
                  <i class="fas fa-plus"></i>اضافة اقسام رحلات
                </router-link>
              </li>
            </ul>
          </div>

        </li>
        <li class="nav-item">
          <div @click="displayItems('order')" class="nav-link d-flex justify-content-between" aria-current="page">
            <router-link to="" class="sub-nav-link">
              <i class="far fa-file"></i> الطلبات
            </router-link>
            <div>
              <i v-if="displayOrdersSubItem" class="fas fa-chevron-up"></i>
              <i v-if="!displayOrdersSubItem" class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div v-if="displayOrdersSubItem" class="ms-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link to="/orders" exact class="nav-link" aria-current="page">
                  <i class="far fa-file"></i>كل الطلبات
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/add-new-order-section" exact class="nav-link" aria-current="page">
                  <i class="fas fa-plus"></i>اضافة اقسام طلبات
                </router-link>
              </li>
            </ul>
          </div>

        </li>
        <li class="nav-item">
          <router-link to="/send-email" exact class="nav-link" aria-current="page">
            <i class="fas fa-envelope-square"></i>إرسال ايميل و اشعار ونوافذ و SMS
          </router-link>
        </li>



        <li class="nav-item">
          <div @click="displayItems('customer')" :class="displayCustomerSubItem" class="nav-link d-flex justify-content-between" aria-current="page">
            <router-link to="" class="sub-nav-link">
              <i class="fas fa-users"></i>العملاء
            </router-link>
            <div>
              <i v-if="displayCustomerSubItem" class="fas fa-chevron-up"></i>
              <i v-if="!displayCustomerSubItem" class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div v-if="displayCustomerSubItem" class="ms-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link to="/customers" exact class="nav-link" aria-current="page">
                  <i class="fas fa-users"></i>كل العملاء
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/add-new-customer" exact class="nav-link" aria-current="page">
                  <i class="fas fa-plus"></i>اضافة عميل جديد
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/customers-documentation" exact class="nav-link" aria-current="page">
                  <i class="fas fa-user"></i>توثيق العملاء
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <div @click="displayItems('coupon')" class="nav-link d-flex justify-content-between" aria-current="page">
            <router-link to="" class="sub-nav-link">
              <i class="far fa-file"></i>الكوبونات
            </router-link>
            <div>
              <i v-if="displayCouponSubItem" class="fas fa-chevron-up"></i>
              <i v-if="!displayCouponSubItem" class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div v-if="displayCouponSubItem" class="ms-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link to="/coupons" exact class="nav-link" aria-current="page">
                  <i class="far fa-file"></i>الكوبونات الموجودة
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/coupons-users" exact class="nav-link" aria-current="page">
                  <i class="fas fa-users"></i>الاشخاص المستفدين بالكوبونات
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/add-new-coupon" exact class="nav-link" aria-current="page">
                  <i class="fas fa-plus"></i>اضافة كوبون جديد
                </router-link>
              </li>
            </ul>
          </div>

        </li>

        <li class="nav-item">
          <router-link to="/setting" class="nav-link" aria-current="page">
            <i class="far fa-file"></i>اعدادات عامة
          </router-link>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
export default {
  name: "sidebar-nav",
  data() {
    return {
      displayCustomerSubItem: false,
      displayOrdersSubItem: false,
      displayTripeSubItem: false,
      displayCouponSubItem: false,

    }
  },
  methods: {
    displayItems(item) {
      if (item === 'customer')
        this.displayCustomerSubItem = !this.displayCustomerSubItem
      else if (item === 'order')
        this.displayOrdersSubItem = !this.displayOrdersSubItem
      else if (item === 'tripe')
        this.displayTripeSubItem = !this.displayTripeSubItem
      else if (item === 'coupon')
        this.displayCouponSubItem = !this.displayCouponSubItem
    }
  }
}
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  scrollbar-gutter: stable;
}

.sidebar::-webkit-scrollbar {
  width: 5px;
}

.sidebar::-webkit-scrollbar-track {
  background-color: #333;
  border-radius: 100px;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: #dddddd;
  border-radius: 100px;
}



.nav-link {
  cursor: pointer;
  font-size: 16px;
  color: #ffffff !important;
}

.sub-nav-link {
  color: #ffffff;
  text-decoration: none;
}

.nav-item {
  padding: 0;
}

.nav-link.active,
.nav-link:hover,
.nav-link.router-link-active {
  background-color: #dddddd;
  color: #111111 !important;
}

.nav-link:hover .sub-nav-link,
.nav-link.active .sub-nav-link {
  color: #111111 !important;
}

.nav-link i {
  margin: 0 5px;
}

@media (max-width:1024px)  {
  .sidebar {
    margin-top: 0;
    padding-top: 10px;
  }
}


</style>