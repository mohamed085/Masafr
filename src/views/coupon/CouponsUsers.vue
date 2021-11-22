<template>
  <div class="pb-5">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1>العملاء</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-secondary">مشاركة <i class="far fa-share-square"></i></button>
          <button type="button" class="btn btn-sm btn-outline-secondary">تصدير <i class="fas fa-file-download"></i></button>
        </div>
      </div>
    </div>

    <div class="search-inputs mb-3 mt-2 d-flex flex-wrap">

      <b-form class="search-form d-flex" @submit.prevent="search('phone')">
        <b-form-input v-model="phoneKey" required placeholder="بحث بالجوال"></b-form-input>
        <b-button type="submit" class="me-1 ms-1" variant="light"><i class="fas fa-search"></i></b-button>
      </b-form>

    </div>

    <h2 class="mt-4 mb-3">مستخدمين الكوبونات</h2>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr class="bg-success text-white">
            <th scope="col">#</th>
            <th scope="col">الاسم</th>
            <th scope="col">الهاتف</th>
            <th scope="col">استخدام كوبون اخر</th>
            <th scope="col">تاريخ الاضافة</th>
          </tr>
        </thead>
        <tbody>
         <tr>
          <td>
            <input type="checkbox" class="alert-secondary">
          </td>
          <td>Mohamed Emad</td>
          <td>0121565315</td>
          <td>
            <b-form-checkbox v-model="useOtherCoupon" name="check-button" switch></b-form-checkbox>
          </td>
          <td>15-10-2020</td>
            </tr>
         <tr>
          <td>
            <input type="checkbox" class="alert-secondary">
          </td>
          <td>Mohamed Emad</td>
          <td>0121565315</td>
          <td>
            <b-form-checkbox v-model="useOtherCoupon" name="check-button" switch></b-form-checkbox>
          </td>
          <td>15-10-2020</td>
            </tr>
        </tbody>
      </table>

    </div>

    <div class="btn-group me-2">
      <button type="button" class="btn btn-outline-success">يستخدم كوبون اخر</button>
      <button type="button" class="btn btn-outline-success">تنفيذ</button>
      <button type="button" class="btn btn-outline-success">لا يستخدم كوبون اخر</button>
      <button type="button" class="btn btn-outline-success">حذف المحدد مع امكانية استخدام كوبون</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "CouponsUsers",
  data() {
    return {
      phoneKey: '',
      useOtherCoupon: true
    }
  },
  methods: {
    search(key) {
      alert(key)
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