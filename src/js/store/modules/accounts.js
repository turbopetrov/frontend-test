import Vue from 'vue';

export default {
  state:{
    allAccounts:[
      {
        id: 1,
        login: 'a',
        pass: 'qwerty1',
        name: 'Антон Владимирович Шунин',
        img: '../../../assets/img/account-img/shunin.jpeg'
      },
      {
        id: 2,
        login: 'a',
        pass: 'qwerty1',
        name: 'Георгий Тамазович Джикия',
        img: '../../../assets/img/account-img/ghikia.jpeg',
      },
      {
        id: 3,
        login: 'a',
        pass: 'qwerty1',
        name: 'Александр Сергеевич Головин',
        img: '../../../assets/img/account-img/golovin.jpeg'
      },
      {
        id: 4,
        login: 'a',
        pass: 'qwerty1',
        name: 'Антон Владимирович Шунин',
        img: '../../../assets/img/account-img/shunin.jpeg'
      },
      {
        id: 5,
        login: 'a',
        pass: 'qwerty1',
        name: 'Антон Владимирович Шунин',
        img: '../../../assets/img/account-img/shunin.jpeg'
      },
      {
        id: 6,
        login: 'a',
        pass: 'qwerty1',
        name: 'Антон Владимирович Шунин',
        img: '../../../assets/img/account-img/shunin.jpeg'
      },
      {
        id: 7,
        login: 'a',
        pass: 'qwerty1',
        name: 'Антон Владимирович Шунин',
        img: '../../../assets/img/account-img/shunin.jpeg'
      },
      {
        id: 8,
        login: 'a',
        pass: 'qwerty1',
        name: 'Антон Владимирович Шунин',
        img: '../../../assets/img/account-img/shunin.jpeg'
      },
      {
        id: 9,
        login: 'a',
        pass: 'qwerty1',
        name: 'Антон Владимирович Шунин',
        img: '../../../assets/img/account-img/shunin.jpeg'
      },
    ]
  },
  getters:{
    accounts(state){
      return state.allAccounts;
    }
  }
}