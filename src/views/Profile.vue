<template>
  <div class="pe-3 ps-3 pt-4 pb-5">
    <div class="pb-2 row border-bottom">
      <div class="col-3 d-flex flex-column justify-content-center align-items-center">
        <b-avatar src="https://placekitten.com/300/300" size="9rem"></b-avatar>
        <b-form-rating
            class="mt-2"
            v-model="rate"
            color="#008000"
            show-value
            show-value-max
            precision="2"
        ></b-form-rating>
      </div>

      <div class="col-3 d-flex flex-column  justify-content-center">
        <h3><b-badge variant="success">الاسم: محمد عماد</b-badge></h3>
        <h6>مسافر او عميل موثق</h6>
      </div>

      <div class="col-6 d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex">
          <b-avatar class="me-3" src="https://placekitten.com/300/300" size="6rem"></b-avatar>
          <b-avatar class="me-3" src="https://placekitten.com/300/300" size="6rem"></b-avatar>
          <b-avatar class="me-3" src="https://placekitten.com/300/300" size="6rem"></b-avatar>
        </div>
        <div class="mt-2">
          <h6>تاريخ اخر دخول: 15-10-2020</h6>
          <h6>تاريخ التسجيل: 15-10-2020</h6>
        </div>
      </div>
    </div>

    <div class="pt-4 pb-4 d-flex justify-content-center border-bottom">
      <div class="user-details-card me-3 ms-3 d-flex flex-column justify-content-center align-items-center">
        <h5 class="mt-3">0.00 ريال</h5>
        <h5 class="mt-3">الخرنة</h5>
        <div class="user-details-card-footer d-flex justify-content-center align-items-center pt-2 pb-2 bg-success text-white w-100">
          اقراء المزيد
        </div>
      </div>

      <div class="user-details-card me-3 ms-3 d-flex flex-column justify-content-center align-items-center">
        <h5 class="mt-3">0.00 ريال</h5>
        <h5 class="mt-3">التامين المحجوز</h5>
        <div class="user-details-card-footer d-flex justify-content-center align-items-center pt-2 pb-2 bg-success text-white w-100">
          اقراء المزيد
        </div>
      </div>

      <div class="user-details-card me-3 ms-3 d-flex flex-column justify-content-center align-items-center">
        <h5 class="mt-3">0.00 ريال</h5>
        <h5 class="mt-3">قيمة طلب محجوز</h5>
        <div class="user-details-card-footer d-flex justify-content-center align-items-center pt-2 pb-2 bg-success text-white w-100">
          اقراء المزيد
        </div>
      </div>

      <div class="user-details-card me-3 ms-3 d-flex flex-column justify-content-center align-items-center">
        <h5 class="mt-3">0.00 ريال</h5>
        <h5 class="mt-3">قيمة الكوبونات</h5>
        <div class="user-details-card-footer d-flex justify-content-center align-items-center pt-2 pb-2 bg-success text-white w-100">
          اقراء المزيد
        </div>
      </div>

      <div class="user-details-card me-3 ms-3 d-flex flex-column justify-content-center align-items-center">
        <h5 class="mt-3">0.00 ريال</h5>
        <h5 class="mt-3">نقاط سلبية</h5>
        <div class="user-details-card-footer d-flex justify-content-center align-items-center pt-2 pb-2 bg-success text-white w-100">
          اقراء المزيد
        </div>
      </div>



    </div>

    <div class="pt-4 pb-4 d-flex flex-column justify-content-center border-bottom">
      <div class="btns d-flex justify-content-center">
        <button type="button" class="btn btn-outline-success">حذف المحدد</button>
        <button type="button" class="btn btn-outline-success">إرسال SMS</button>
        <button type="button" class="btn btn-outline-success">إرسال بريد</button>
        <button type="button" class="btn btn-outline-success">إرسال إشعار</button>
        <button type="button" class="btn btn-outline-success">إرسال نوافذ</button>
      </div>

      <div class="d-flex mt-3">
        <b-form-input class="me-3" type="text" placeholder="المشرف يضع الملاحظاته هنا"></b-form-input>
        <b-button class="pe-3 ps-3" variant="success">حفظ</b-button>
      </div>

    </div>

    <div class="pt-4 pb-4 d-flex flex-column justify-content-center border-bottom">
      <h3 class="header">طلباتي</h3>
      <div class="btns d-flex mt-4">
        <button type="button" class="me-2 btn btn-outline-success">كل طلباتي</button>
        <button type="button" class="me-2 btn btn-outline-success">طلباتي الفعالة</button>
        <button type="button" class="me-2 btn btn-outline-success">المنهية</button>
        <button type="button" class="me-2 btn btn-outline-success">جاري التنفيذ</button>
        <button type="button" class="me-2 btn btn-outline-success">جاري التاكيد</button>
        <button type="button" class="me-2 btn btn-outline-success">الملغي</button>
        <button type="button" class="me-2 btn btn-outline-success">المنفذ</button>
        <button type="button" class="me-2 btn btn-outline-success">المعلق</button>
      </div>

    </div>


    <div class="pt-4 pb-4 d-flex flex-column justify-content-center border-bottom">
      <h3 class="header">رحالتي</h3>
      <div class="btns d-flex mt-4">
        <button type="button" class="me-2 btn btn-outline-success">كل طلباتي</button>
        <button type="button" class="me-2 btn btn-outline-success">طلباتي الفعالة</button>
        <button type="button" class="me-2 btn btn-outline-success">المنهية</button>
        <button type="button" class="me-2 btn btn-outline-success">جاري التنفيذ</button>
        <button type="button" class="me-2 btn btn-outline-success">جاري التاكيد</button>
        <button type="button" class="me-2 btn btn-outline-success">الملغي</button>
        <button type="button" class="me-2 btn btn-outline-success">المنفذ</button>
        <button type="button" class="me-2 btn btn-outline-success">المعلق</button>
      </div>

    </div>


    <div class="pt-4 pb-4 d-flex flex-column justify-content-center border-bottom">
      <h3 class="header">الشات</h3>
      <div class="btns d-flex mt-4">
        <button type="button" class="me-2 btn btn-outline-success">كل طلباتي</button>
        <button type="button" class="me-2 btn btn-outline-success">طلباتي الفعالة</button>
        <button type="button" class="me-2 btn btn-outline-success">المنهية</button>
        <button type="button" class="me-2 btn btn-outline-success">جاري التنفيذ</button>
        <button type="button" class="me-2 btn btn-outline-success">جاري التاكيد</button>
        <button type="button" class="me-2 btn btn-outline-success">الملغي</button>
        <button type="button" class="me-2 btn btn-outline-success">المنفذ</button>
        <button type="button" class="me-2 btn btn-outline-success">المعلق</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      rate: 3.35,
    }
  }

}
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid green !important;
}

.user-details-card {
  border: 1px solid green;
  width: 150px;
  height: 170px;
  border-radius: 15px;
}

.user-details-card-footer {
  cursor: pointer;
}

.user-details-card-footer:hover {
  background-color: #dddddd !important;
  color: green !important;
}

.header {
  font-family: 'Almarai', sans-serif;
}
</style>