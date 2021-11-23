import { mount, shallowMount, createLocalVue  } from '@vue/test-utils'
import BlogPost from '@/components/BlogPost'
describe('BlogPost', () => {
   
    it('Is method an object ', () => {
      expect(typeof BlogPost.methods).toBe('undefined')
    })
  })
  
    describe('BlogPost', () => {
      
      it('is computed object?', () => {
        expect(typeof BlogPost.computed).toBe('object')
      })
    })
  
    describe('BlogPost', () => {
    
      it('Is components object', () => {
        expect(typeof BlogPost.components).toBe('object')
      })
    })