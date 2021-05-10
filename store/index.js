import Vue from "vue";

export const state = () => ({
  tasks: [
    {
      id: 1,
      title: 'QQ active 1',
      text: 'some lorem text here',
      date: '2020-05-11',
      status: 'active',
    },
    {
      id: 2,
      title: 'QQ deleted 1',
      text: 'some lorem text here',
      date: '2020-05-11',
      status: 'deleted',
    },
    {
      id: 3,
      title: 'QQ done 1',
      text: 'some lorem text here',
      date: '2020-05-11',
      status: 'done',
    },
    {
      id: 4,
      title: 'QQ done 2',
      text: 'some lorem text here',
      date: '2020-05-11',
      status: 'done',
    },
  ],
  users: [
    {
      name: 'admin',
      password: 'pass',
    }
  ],
  authorized: false,
  user: {},
});

export const getters = {
  activeTasks(state) {
    return state.tasks.filter(t => t.status === 'active');
  },
  doneTasks(state) {
    return state.tasks.filter(t => t.status === 'done');
  },
  deletedTasks(state) {
    return state.tasks.filter(t => t.status === 'deleted');
  },
};

export const mutations = {
  setTasks(state, payload) {
    state.tasks = payload;
  },
  setAuthorized(state, payload) {
    state.authorized = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },
  setUsers(state, payload) {
    state.users = payload;
  },
};

export const actions = {
  editTask({ state, commit }, payload) {
    if (payload.isNew) {
      const task = {...payload};
      task.status = 'active';
      task.id = state.tasks.length;
      task.isNew = 0;
      const tasks = [...state.tasks];
      tasks.push(task);
      commit('setTasks', tasks);
      return;
    }
    const tasks = state.tasks.map(t => {
      if (t.id === payload.id) t = {...payload};
      return t;
    });
    commit('setTasks', tasks)
  },
  login({state, commit}, payload) {
    if (state.users.filter(u => {
      return u.name === payload.name && u.password === payload.password;
    })) {
      commit('setAuthorized', true);
      commit('setUser', payload);
    }
  },
  signup({state, commit}, payload) {
    const users = [...state.users];
    users.push(payload)
    commit('setUsers', users);
    commit('setUser', payload);
    commit('setAuthorized', true);
  }
};
