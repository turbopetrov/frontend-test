export default{
  state:{
    user:null,
    loginStatus: false,
    token: localStorage.getItem('token')
  },
  actions:{

  },
  getters:{
    TOKEN(state){
      return state.token
    },
    LOGIN_STATUS(state){
      return state.loginStatus
    }
  },
  mutations:{
    setUser(state, currentUser){
      state.user = currentUser;
    },
    changeLoginStatus(state, status){
      state.loginStatus = status
    }

  }
}