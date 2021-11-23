import { mount } from '@vue/test-utils'
import BlogCard from '@/components/BlogCard'

describe('BlogCard', () => {
    // Inspect the raw component options
    it('Is method an object ', () => {
      expect(typeof BlogCard.methods).toBe('object')
    })
  })

  describe('BlogCard', () => {
    // Inspect the raw component options
    it('is computed object?', () => {
      expect(typeof BlogCard.computed).toBe('object')
    })
  })