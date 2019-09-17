import {expect} from 'chai'
import Vue from 'vue'
import {shallowMount,mount} from '@vue/test-utils'
import Input from '@/components/input'
import sinon from 'sinon'
const sinonChai = require("sinon-chai");
const chai = require('chai')
chai.use(sinonChai);

describe('Input', () => {
  it('Input在页面上', () => {
    expect(Input).to.be.exist
  })

  it('可以设置disabled', () => {
    const wrapper = mount(Input,{
      propsData: {
        disabled: true,
      },
      attachToDocument:true
    })
    const {vm} = wrapper
    const el = vm.$el.querySelector('input')
    expect(el.disabled).to.eq(true)
    wrapper.destroy()
  })

  it('可以设置readonly', () => {
    const wrapper = mount(Input,{
      propsData: {
        readonly: true,
      },
      attachToDocument:true
    })
    const {vm} = wrapper
    const el = vm.$el.querySelector('input')
    console.log(el)
    expect(el.readOnly).to.eq(true)
    wrapper.destroy()
  })

  it('可以设置value', () => {
    const wrapper = mount(Input,{
      propsData: {
        value: 'test',
      },
      attachToDocument:true
    })
    const {vm} = wrapper
    const el = vm.$el.querySelector('input')
    expect(el.value).to.eq('test')
    wrapper.destroy()
  })

  it('可以设置error', () => {
    const wrapper = mount(Input,{
      propsData: {
        error: '警告',
      },
      attachToDocument:true
    })
    const {vm} = wrapper
    const el = vm.$el.querySelector('use')
    expect(el.getAttribute('xlink:href')).to.eq('#iadded')
    const errorMsg = vm.$el.querySelector('.errorMsg')
    expect(errorMsg.innerText).to.eq('警告')
    wrapper.destroy()
  })

  it('支持change/input/focus/blur事件',()=>{
    ['change', 'focus', 'input', 'blur'].forEach((eventName) => {
      const wrapper = mount(Input)
      const callback = sinon.fake()
      wrapper.vm.$on(eventName, callback)
      let event = new Event(eventName)
      Object.defineProperty(event,'target',{
        value:{value:'test'},
        enumerable:true
      })
      let el = wrapper.vm.$el.querySelector('input')
      el.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('test')

    })
  })
})
