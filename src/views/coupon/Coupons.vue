<template>
  <div class="pb-5">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1>الكوبونات</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-secondary">مشاركة <i class="far fa-share-square"></i></button>
          <button type="button" class="btn btn-sm btn-outline-secondary">تصدير <i class="fas fa-file-download"></i></button>
        </div>
      </div>
    </div>

    <h2 class="mt-4 mb-3">الكوبونات الموجودة</h2>
    <button @click="addNewCoupon" type="button" class="btn btn-sm btn-outline-success mb-3"><i class="far fa-plus"></i> إضافة كوبون جديد</button>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr class="bg-success text-white">
            <th scope="col">#</th>
            <th scope="col">صورة الهدية</th>
            <th scope="col">اسم الكوبون</th>
            <th scope="col">تاريخ بداية الكوبون</th>
            <th scope="col">تاريخ نهاية الكوبون</th>
            <th scope="col">الكمية</th>
            <th scope="col">القيمة</th>
            <th scope="col">نوع الكوبون</th>
            <th scope="col">الحاصلين</th>
            <th scope="col">تاريخ الإضافة</th>
            <th scope="col">تعديل</th>
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
            <td>Coupon</td>
            <td>15-10-2020</td>
            <td>15-10-2020</td>
            <td>200</td>
            <td>20</td>
            <td>كوبون خصم</td>
            <td>5</td>
            <td>15-10-2020</td>
            <td class="d-flex icons">
              <router-link to=""><i class="fas fa-edit"></i></router-link> |
              <router-link to=""><i class="fas fa-times"></i></router-link>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" class="alert-secondary">
            </td>
            <td>
              <b-avatar src="https://placekitten.com/300/300"></b-avatar>
            </td>
            <td>Coupon</td>
            <td>مفتوح</td>
            <td>مفتوح</td>
            <td>200</td>
            <td>20</td>
            <td>كوبون هدية</td>
            <td>5</td>
            <td>مفتوح</td>
            <td class="d-flex icons">
              <router-link to=""><i class="fas fa-edit"></i></router-link> |
              <router-link to=""><i class="fas fa-times"></i></router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="btn-group me-2">
      <button type="button" class="btn btn-sm btn-outline-success">حذف المحدد من هنا لكن الحاصلين عليه يبقون بالسجلات ما ينحذفو</button>
    </div>

  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "Coupons",
  methods: {
    addNewCoupon() {
      router.push('/add-new-coupon')
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

</style>