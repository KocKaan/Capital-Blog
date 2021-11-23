import Vuex from 'vuex';
import { mount, shallowMount, createLocalVue  } from '@vue/test-utils'
import Loading from '@/components/Loading'


describe('Loading.vue', () => {
      it('renders a div', () => {
      const wrapper = shallowMount(Loading);
      expect(wrapper.contains('div')).toBe(true);
    });
  });

  describe('Loading.vue', () => {
    it('renders a ', () => {
    const wrapper = shallowMount(Loading);
    expect(wrapper.contains('template')).toBe(false);
  });
});



