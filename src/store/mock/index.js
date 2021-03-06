import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = {
    editPost: null,
  };
  export function __createMocks(custom = { state: {} }) {
    
    const mockState = Object.assign({}, state, custom.state);
  
    return {
      state: mockState,
      store: new Vuex.Store({
          state: mockState,
      }),
    };
}
    export const store = __createMocks().store;
/*export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
    const mockGetters = Object.assign({}, getters, custom.getters);
    const mockMutations = Object.assign({}, mutations, custom.mutations);
    const mockActions = Object.assign({}, actions, custom.actions);
    const mockState = Object.assign({}, state, custom.state);
  
    return {
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
      store: new Vuex.Store({
        getters: mockGetters,
        mutations: mockMutations,
        actions: mockActions,
        state: mockState,
      }),
    };
  }*/
  