import {expect} from 'chai'
import Vue from 'vue'
import {shallowMount,mount} from '@vue/test-utils'
import Button from '@/components/button'
import sinon from 'sinon'
const sinonChai = require("sinon-chai");
const chai = require('chai')
chai.use(sinonChai);

describe('Button', () => {
  it('在页面上', () => {
    expect(Button).to.be.exist
  })

  it('可以设置icon', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'added'
      }
    }).$mount()
    const iconName = vm.$el.querySelector('use').getAttribute('xlink:href')
    expect(iconName).to.equal('#iadded')
  })

  it('默认的button icon的order是1',()=>{
    const wrapper = mount(Button,{
      propsData: {
        icon: 'added'
      },
      attachToDocument:true
    })
    const icon = wrapper.vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    wrapper.destroy()
  })

  it('icon放在右边👉的时候order是2',()=>{
    const wrapper = mount(Button,{
      propsData: {
        icon: 'added',
        iconPosition:'right'
      },
      attachToDocument:true
    })
    const icon = wrapper.vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    wrapper.destroy()
  })

  it('点击icon触发点击事件',()=>{
    const spy = sinon.spy()
    const wrapper = mount(Button)
    const callback = sinon.fake()
    wrapper.vm.$on('click', callback)
    wrapper.find('button').trigger('click')
    expect(callback).to.have.been.called
  })
})
