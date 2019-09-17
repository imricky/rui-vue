import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Pagingbar from '@/components/paging-bar'

chai.use(sinonChai)

describe('Pagingbar', () => {

  it('存在.', () => {
    expect(Pagingbar).to.exist
  })

  it('可以设置totalpage 和 currentPage', () => {
    const wrapper = mount(Pagingbar, {
      propsData: {
        totalPage: 20,
        currentPage:3
      }
    })
    let current = wrapper.vm.$el.querySelector('.current')
    expect(current.textContent).to.eq('3')
  })

  it('可以触发点击事件', () => {
    const wrapper = mount(Pagingbar, {
      propsData: {
        totalPage: 20,
        currentPage:3
      }
    })
    const callback = sinon.fake()
    wrapper.vm.$on('update:currentPage', callback)
    wrapper.find('.next').trigger('click')
    expect(callback).to.have.been.called
  })
})
