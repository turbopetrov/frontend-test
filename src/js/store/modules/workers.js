import axios from 'axios';
export default {
  state:{
    workers:[
      // {
      //   id: 0,
      //   email: 'shunin@gmail.com',
      //   login: 'shunin',
      //   pass: 'qwerty1',
      //   name: 'Антон Владимирович Шунин',
      //   department: 'Отдел разработки',
      //   position: 'Фронтенд разработчик',
      //   hireDate: '19.01.2018',
      //   img: '../../../assets/img/account-img/shunin.jpeg'
      // },
      // {
      //   id: 1,
      //   login: 'ghikhia',
      //   email: 'ghikhia@gmail.com',
      //   pass: 'qwerty2',
      //   name: 'Георгий Тамазович Джикия',
      //   department: 'Отдел разработки',
      //   position: 'Фронтенд разработчик',
      //   hireDate: '15.08.2012',
      //   img: '../../../assets/img/account-img/ghikia.jpeg',
      // },
      // {
      //   id: 2,
      //   login: 'golovin',
      //   email: 'golovin@gmail.com',
      //   pass: 'qwerty3',
      //   name: 'Александр Сергеевич Головин',
      //   department: 'Отдел разработки',
      //   position: 'Фронтенд разработчик',
      //   hireDate: '21.05.2002',
      //   img: '../../../assets/img/account-img/golovin.jpeg'
      // },
    ]
  },
  getters:{
    WORKERS(state){
      return state.workers;
    }
  },
  actions:{
    GET_WORKERS_FROM_API({commit}){
      return axios.get('http://test.atwinta.ru/api/v1/workers',{
        headers:{
          'X-CSRF-TOKEN':localStorage.getItem('token')
        }
      })
        .then((workers)=>{
          commit('SET_WORKERS_TO_STATE', workers.data)
        })
        .catch((error)=>console.error(error))
    }
  },
  mutations:{
    SET_WORKERS_TO_STATE(state, workers){
      state.workers = workers
    }
  }
}