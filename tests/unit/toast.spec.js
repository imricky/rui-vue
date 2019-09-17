import {expect} from 'chai'
import Vue from 'vue'
import {shallowMount, mount} from '@vue/test-utils'
import Toast from '@/components/toast'
import sinon from 'sinon'

const sinonChai = require("sinon-chai")
const chai = require('chai')
chai.use(sinonChai)

describe('Toast', () => {
  it('Row在页面上', () => {
    expect(Toast).to.be.exist
  })

  it('可以设置autoClose', (done) => {
    const wrapper = mount(Toast, {
      propsData: {
        autoClose: 1
      },
      attachToDocument: true
    })
    wrapper.vm.$on('close', () => {
      expect(document.body.contains(wrapper.vm.$el)).to.eq(false)
      done()
      wrapper.destroy()
    })
  })

  it('可以设置closeButton', (done) => {
    const callback = sinon.fake();
    const wrapper = mount(Toast, {
      propsData: {
        closeButton: {
          text: '关闭',
          callback,
        }
      },
      attachToDocument: true
    })

    let closeButton = wrapper.vm.$el.querySelector('.close')
    expect(closeButton.textContent.trim()).to.eq('关闭')
    setTimeout(()=>{
      closeButton.click()
      expect(callback).to.have.been.called
      done()
      wrapper.destroy()
    },200)
  })

  it('可以设置enableHtml', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {enableHtml: true}
    })
    vm.$slots.default = ['<strong id="test">hi</strong>']
    vm.$mount()
    let strong = vm.$el.querySelector('#test')
    expect(strong).to.exist
  })

  it('可以设置position', () => {
    const wrapper = mount(Toast, {
      propsData: {
        position: 'bottom'
      },
      attachToDocument: true
    })
    expect(wrapper.vm.$el.classList.contains('position-bottom')).to.eq(true)
  })

})
