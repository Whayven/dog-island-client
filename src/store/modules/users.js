/* eslint-disable no-unused-vars */
import axios from "axios";
import router from "../../router";

const state = {
  user: {},
  response: ""
};

const getters = {
  user: state => state.user,
  response: state => state.response
};

// Clear responses after 3 seconds!
const actions = {
  async login({ commit }, user) {
    await axios
      .post("api/users/login", user)
      .then(() => {
        router.push("/profile");
      })
      .catch(e => {
        commit("setResponse", e.response.data);
      });
    setTimeout(() => commit("setResponse", ""), 3000);
  },
  async fetchUser({ commit }) {
    const response = axios
      .get("/api/users/user")
      .then(response => {
        commit("setUser", response.data);
      })
      .catch(e => {
        router.push("/").catch(e => {});
      });
  },
  async register({ commit }, user) {
    await axios
      .post("/api/users/register", user)
      .then(response => {
        commit("setResponse", response.data);
      })
      .then(() => {
        if (state.response == "Registered successfully") {
          router.push("/login");
        }
      })
      .catch(e => {
        commit("setResponse", e.response.data);
      });
    setTimeout(() => commit("setResponse", ""), 3000);
  },
  async logout({ commit }) {
    await axios.get("/api/users/logout").then(() => {
      router.push("/").catch(e => {});
      commit("setUser", {});
    });
  }
};

const mutations = {
  setUser: (state, elem) => (state.user = elem),
  setResponse: (state, res) => (state.response = res)
};

export default {
  state,
  getters,
  actions,
  mutations
};
