const delay = (time) => {
  return new Promise(resolve => {
    setTimeout(resolve,time);
  })
}
export default {
  namespace: "immer",
  state: {
    count: 0,
    name:"immer"
  },
  reducers: {
    count(state, payload) {
      state.count = state.count + 1
      // return {
      //   ...state,
      //   count: state.count + 1
      // }
    }
  },
  effects: {
    *countAdd(_, { put, call }) {
      yield delay(2000);
      yield put({ type: 'count' });
    }
  }
}