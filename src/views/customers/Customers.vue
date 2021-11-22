<template>
  <div class="pb-5">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1>العملاء</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-success">مشاركة <i class="far fa-share-square"></i></button>
          <button type="button" class="btn btn-sm btn-outline-success">تصدير <i class="fas fa-file-download"></i></button>
        </div>
      </div>
    </div>

    <div class="search-inputs mb-3 mt-2 d-flex flex-wrap">
      <b-form class="search-form d-flex" @submit.prevent="search('name')">
        <b-form-input v-model="nameKey" required placeholder="بحث بالاسم"></b-form-input>
        <b-button type="submit" class="me-1 ms-1" variant="light"><i class="fas fa-search"></i></b-button>
      </b-form>

      <b-form class="search-form d-flex" @submit.prevent="search('email')">
        <b-form-input v-model="emailKey" required placeholder="بحث بالبريد"></b-form-input>
        <b-button type="submit" class="me-1 ms-1" variant="light"><i class="fas fa-search"></i></b-button>
      </b-form>

      <b-form class="search-form d-flex" @submit.prevent="search('nationality')">
        <b-form-input v-model="nationalityKey" required placeholder="بحث بالجنسية"></b-form-input>
        <b-button type="submit" class="me-1 ms-1" variant="light"><i class="fas fa-search"></i></b-button>
      </b-form>

      <b-form class="search-form d-flex" @submit.prevent="search('phone')">
        <b-form-input v-model="phoneKey" required placeholder="بحث بالجوال"></b-form-input>
        <b-button type="submit" class="me-1 ms-1" variant="light"><i class="fas fa-search"></i></b-button>
      </b-form>

      <b-form class="search-form d-flex" @submit.prevent="search('id')">
        <b-form-input v-model="idKey" required placeholder="بحث برقم الهوايه"></b-form-input>
        <b-button type="submit" class="me-1 ms-1" variant="light"><i class="fas fa-search"></i></b-button>
      </b-form>
    </div>

    <h2 class="mt-2 mb-3">فرز</h2>
    <div class="filters d-flex flex-wrap mb-3">
      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">الغير موثق</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">الموثق</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">خامل</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">نشظ</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">موقوف</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">سعودي مسافر</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">تامين محجوز</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">اجنبي عميل</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">مرفوض التوثيق</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">المخالفين</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">الارصدة</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">اجنبي مسافر</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">الرصيد المعلق</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">الاي ماك متشابهه</span>
      </div>

      <div class="filter d-flex">
        <b-form-checkbox></b-form-checkbox>
        <span class="me-2 ms-2 mt-auto mb-auto">عملاء جدد</span>
      </div>
    </div>

    <h2 class="mt-4 mb-3">العملاء الموجودين</h2>
    <button @click="addNewCustomer" type="button" class="btn btn-sm btn-outline-success mb-3"><i class="far fa-user-plus"></i> إضافة عميل جديد</button>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr class="bg-success text-white">
            <th scope="col">#</th>
            <th scope="col">الصورة</th>
            <th scope="col">الاسم</th>
            <th scope="col">الجنسية</th>
            <th scope="col">النوع</th>
            <th scope="col">حالة العميل</th>
            <th scope="col">رصيد</th>
            <th scope="col">سلبيات</th>
            <th scope="col">تخفيض</th>
            <th scope="col">عدد الرحلات</th>
            <th scope="col">رحلات فعالة</th>
            <th scope="col">عدد الطلبات</th>
            <th scope="col">الطلبات الفعالة</th>
            <th scope="col">تامين محجوز</th>
            <th scope="col">الحالة</th>
            <th scope="col">الاشعارات</th>
            <th scope="col">الشات</th>
            <th scope="col">اخر دخول</th>
            <th scope="col">رصيد معلق</th>
            <th scope="col">متخذ القرار</th>
            <th scope="col">تحرير البيانات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" class="alert-secondary">
            </td>
            <td>
              <b-avatar src="https://placekitten.com/300/300"></b-avatar>
            </td>
            <td>Mohamed Emad</td>
            <td>مصري</td>
            <td>مسافر</td>
            <td>
              <b-badge variant="info">انتظار التوثيق</b-badge>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
              <b-badge variant="dark">10</b-badge>
            </td>
            <td>0</td>
            <td>
              <b-badge variant="success">10</b-badge>
            </td>
            <td>2</td>
            <td>
              <b-badge variant="success">1</b-badge>
            </td>
            <td>
              <b-badge variant="dark">100</b-badge>
            </td>
            <td>
              <b-badge variant="success">نشط</b-badge>
            </td>
            <td>
              <b-badge variant="success">مفتوح</b-badge>
            </td>
            <td>
              <b-badge variant="success">مفتوح</b-badge>
            </td>
            <td>125 يوم و 6 ساعات</td>
            <td>100</td>
            <td>الادمن</td>
            <td class="d-flex icons">
              <router-link to=""><i class="fas fa-user"></i></router-link> |
              <router-link to=""><i class="fas fa-user-edit"></i></router-link> |
              <router-link to=""><i class="fas fa-user-times"></i></router-link>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" class="alert-secondary">
            </td>
            <td>
              <b-avatar src="https://placekitten.com/300/300"></b-avatar>
            </td>
            <td>Mohamed Emad</td>
            <td>مصري</td>
            <td>مسافر</td>
            <td>
              <b-badge variant="success">موثق</b-badge>
            </td>
            <td>0</td>
            <td>-</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>
              <b-badge variant="secondary">خامل</b-badge>
            </td>
            <td>
              <b-badge variant="success">مفتوح</b-badge>
            </td>
            <td>
              <b-badge variant="success">مفتوح</b-badge>
            </td>
            <td>125 يوم و 6 ساعات</td>
            <td></td>
            <td></td>
            <td class="d-flex icons">
              <router-link to=""><i class="fas fa-user"></i></router-link> |
              <router-link to=""><i class="fas fa-user-edit"></i></router-link> |
              <router-link to=""><i class="fas fa-user-times"></i></router-link>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" class="alert-secondary">
            </td>
            <td>
              <b-avatar src="https://placekitten.com/300/300"></b-avatar>
            </td>
            <td>Mohamed Emad</td>
            <td>مصري</td>
            <td>مسافر</td>
            <td>
              <b-badge variant="warning">رقم التاكيد 2355</b-badge>
            </td>
            <td>0</td>
            <td>-</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>
              <b-badge variant="secondary">خامل</b-badge>
            </td>
            <td>
              <b-badge variant="danger">مغلق</b-badge>
            </td>
            <td>
              <b-badge variant="success">مفتوح</b-badge>
            </td>
            <td>125 يوم و 6 ساعات</td>
            <td></td>
            <td></td>
            <td class="d-flex icons">
              <router-link to=""><i class="fas fa-user"></i></router-link> |
              <router-link to=""><i class="fas fa-user-edit"></i></router-link> |
              <router-link to=""><i class="fas fa-user-times"></i></router-link>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" class="alert-secondary">
            </td>
            <td>
              <b-avatar src="https://placekitten.com/300/300"></b-avatar>
            </td>
            <td>Mohamed Emad</td>
            <td>مصري</td>
            <td>مسافر</td>
            <td>
              <b-badge variant="danger">تفعيل 3333</b-badge>
            </td>
            <td>0</td>
            <td>-</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>
              <b-badge variant="danger">حظر</b-badge>
            </td>
            <td>
              <b-badge variant="success">مفتوح</b-badge>
            </td>
            <td>
              <b-badge variant="danger">مغلق</b-badge>
            </td>
            <td>125 يوم و 6 ساعات</td>
            <td></td>
            <td></td>
            <td class="d-flex icons">
              <router-link to=""><i class="fas fa-user"></i></router-link> |
              <router-link to=""><i class="fas fa-user-edit"></i></router-link> |
              <router-link to=""><i class="fas fa-user-times"></i></router-link>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" class="alert-secondary">
            </td>
            <td>
              <b-avatar src="https://placekitten.com/300/300"></b-avatar>
            </td>
            <td>Mohamed Emad</td>
            <td>مصري</td>
            <td>مسافر</td>
            <td>
              <b-badge variant="dark">غير موثق</b-badge>
            </td>
            <td>0</td>
            <td>-</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>
              <b-badge variant="warning">غير نشط</b-badge>
            </td>
            <td>
              <b-badge variant="danger">مغلق</b-badge>
            </td>
            <td>
              <b-badge variant="danger">مغلق</b-badge>
            </td>
            <td>125 يوم و 6 ساعات</td>
            <td></td>
            <td></td>
            <td class="d-flex icons">
              <router-link to=""><i class="fas fa-user"></i></router-link> |
              <router-link to=""><i class="fas fa-user-edit"></i></router-link> |
              <router-link to=""><i class="fas fa-user-times"></i></router-link>
            </td>
          </tr>

        </tbody>
      </table>

    </div>



    <div class="btn-group me-2">
      <button type="button" class="btn btn-outline-success">حذف المحدد</button>
      <button type="button" class="btn btn-outline-success">إرسال SMS</button>
      <button type="button" class="btn btn-outline-success">إرسال بريد</button>
      <button type="button" class="btn btn-outline-success">إرسال إشعار</button>
      <button type="button" class="btn btn-outline-success">إرسال نوافذ</button>
    </div>

  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "Customers",
  data() {
    return {
      nameKey: '',
      emailKey: '',
      nationalityKey: '',
      phoneKey: '',
      idKey: '',
    }
  },
  methods: {
    search(type) {
      alert(type)
    },
    addNewCustomer() {
      router.push('/add-new-customer')
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-family: 'Almarai', sans-serif;
}

.table .icons a {
  margin: 0 5px;
  color: #111;
}

.table .icons a:hover {
  color: #0a53be;
}

.search-form {
  border: 1px solid #ddd;
  padding: 0;
  border-radius: 7px;
  margin: 5px;
  background-color: #ffffff;
}

.search-form input {
  border: none;
}

.search-form button {
  padding: 0 5px;
}

</style>