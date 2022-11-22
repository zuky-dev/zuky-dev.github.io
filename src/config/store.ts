import { createStore } from "vuex";

const store = createStore<State>({
    state: {
        test: null
    },
    mutations: {
        test: (state, value) => {
            state.test = value;
        }
    },
    actions: {
        testAction: state => {},
    },
    modules: {},
    getters: {
        test: state => state.test
    }
});

export default store;