import axios from 'axios';
export default {
  state:{
    workers:null
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
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((response)=>{
          commit('SET_WORKERS_TO_STATE', response.data.data)
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