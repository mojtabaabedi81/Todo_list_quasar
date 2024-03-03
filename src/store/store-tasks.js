const state = {
  tasks: {
    'ID1': {
      id: 1,
      name: "go to shopping",
      completed: false,
      dueDate: '2020/09/12',
      dueTime: '8:30'
    },
    'ID2': {
      id: 2,
      name: "get bananas",
      completed: false,
      dueDate: '2020/09/13',
      dueTime: '14:30'
    },
    'ID3': {
      id: 3,
      name: "get apples",
      completed: false,
      dueDate: '2020/09/14',
      dueTime: '16:30'
    }
  }
}

const mutations = {}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
