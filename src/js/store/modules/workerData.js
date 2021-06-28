import axios from "axios";
export default {
  state: {
    workerData: {},
  },
  getters: {
    WORKER_DATA(state) {
      return state.workerData;
    },
  },
  actions: {
    GET_WORKER_DATA_FROM_API({ commit }, user) {
      return axios
        .get(`http://test.atwinta.ru/api/v1/workers/${user}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          commit("SET_WORKER_DATA_TO_STATE", response.data);
        })
        .catch((error) => console.error(error));
    },
  },
  mutations: {
    SET_WORKER_DATA_TO_STATE(state, data) {
      state.workerData = data;
      console.log(state.workerData);
    },
  },
};
