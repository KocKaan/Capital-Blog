import Vuex from 'vuex';
import { mount, shallowMount, createLocalVue  } from '@vue/test-utils'
import BlogCard from '@/components/BlogCard'

import { __createMocks as createStoreMocks } from '../../../src/store/mock';


jest.mock('../../../src/store/mock');

const localVue = createLocalVue();

localVue.use(Vuex);

/*describe('BlogCard', () => {
  let storeMocks;
  let wrapper;
  
  beforeEach(() => {
    // Create a fresh store and wrapper
    // instance for every test case.
    console.log("KKADOFJO:AJKWFO:JAO:FJOAJWOPFJOAJWOFJOAJEFOJAOFJAJOFJAOEJFJAEJF");
    storeMocks = createStoreMocks();
    wrapper = shallow(BlogCard, {
      store: storeMocks.store,
      localVue,
    });
    
  });

});*/


describe('BlogCard', () => {
   
  it('Is method an object ', () => {
    expect(typeof BlogCard.methods).toBe('object')
  })
})

  describe('BlogCard', () => {
    
    it('is computed object?', () => {
      expect(typeof BlogCard.computed).toBe('object')
    })
  })

  describe('BlogCard', () => {
  
    it('Is components object', () => {
      expect(typeof BlogCard.components).toBe('object')
    })
  })


 /* describe('BlogCard.vue', () => {
    let store;
    const state = {
      editPost: false,
    };
  
    beforeEach(() => {
      store = new Vuex.Store({
        state,
      });
    });
  
    it('renders a div', () => {
      const wrapper = shallowMount(BlogCard, {
        store,
        localVue,
      });
      expect(wrapper.contains('div')).toBe(true);
    });
  });*/


