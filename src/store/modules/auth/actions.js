export default {
  async login(context, payload) {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let data = JSON.stringify({
      "email": payload.user.email,
      "password": payload.user.password
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow'
    };

    const response = await fetch("https://msafr.we-work.pro/api/admin/login", requestOptions);

    const responseData = await response.json();

    if (!responseData.status) {
      const error = new Error( responseData.msg || 'User not founded. Check your login data.');
      console.log(error)
      throw error;
    }

    console.log(responseData);

    localStorage.setItem('token', responseData.msg.token);
    localStorage.setItem('isAdmin', responseData.msg.isAdmin);
    localStorage.setItem('name', responseData.msg.name);
    localStorage.setItem('id', responseData.msg.id);

    context.commit('setUser', {
      token: responseData.token,
      isAdmin: responseData.isAdmin,
    });

  },

  async signup(context, payload) {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "accountType": payload.user.accountType,
      "name": payload.user.name,
      "phone": payload.user.phone,
      "yearDOB": payload.user.yearDOB,
      "monthDOB": payload.user.monthDOB,
      "dayBOB": payload.user.dayBOB,
      "gender": payload.user.gender,
      "country": payload.user.country,
      "email": payload.user.email,
      "password": payload.user.password,
      "companyName": payload.user.companyName,
      "companyNumOfEmployees": payload.user.companyNumOfEmployees,
      "companyImgSrc": payload.user.companyImgSrc,
      "companyUrl": payload.user.companyUrl,
      "companyCountry": payload.user.companyCountry,
      "companyBusinessCategory": payload.user.companyBusinessCategory,
    });


    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const response = await fetch("https://ya-forms-api.herokuapp.com/API/signup", requestOptions);

    const responseData = await response.json();

    if (response.status === 406) {
      const error = new Error('This email is already in use.');
      throw error;
    }

    else if (!response.ok) {
      const error = new Error(
          responseData.message || 'Failed to authenticate. Check your login data.'
      );
      throw error;
    }
  },

  async forget(context, payload) {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "email":payload.email,
    });


    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const response = await fetch("https://ya-forms-api.herokuapp.com/API/forgetPassword", requestOptions);

    const responseData = await response.json();

    if (response.status === 500) {
      const error = new Error('Some thing went wrong.');
      throw error;
    }

    else if (!response.ok) {
      const error = new Error(
          responseData.message || 'Failed to authenticate. Check your login data.'
      );
      throw error;
    }


  },

  async reset(context, payload) {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "email" : payload.email,
      "token": payload.token
    });


    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const url = `https://ya-forms-api.herokuapp.com/API/forgetPassword/:` + payload.token;

    const response = await fetch(url, requestOptions);

    const responseData = await response.json();

    if (response.status === 500) {
      const error = new Error('Some thing went wrong.');
      throw error;
    }

    else if (!response.ok) {
      const error = new Error(
          responseData.message || 'Failed to reset. Check your data.'
      );
      throw error;
    }


  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const isAdmin = localStorage.getItem('isAdmin');

    if (token && isAdmin) {
      context.commit('setUser', {
        token: token,
        isAdmin: isAdmin,
      });
    }
  },

  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
    });

    localStorage.removeItem('token')
    localStorage.removeItem('isAdmin')
  },

};