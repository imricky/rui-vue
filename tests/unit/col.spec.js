import {expect} from 'chai'
import Vue from 'vue'
import {shallowMount, mount} from '@vue/test-utils'
import Col from '@/components/col'
import sinon from 'sinon'

const sinonChai = require("sinon-chai")
const chai = require('chai')
chai.use(sinonChai)

describe('Col', () => {
  it('Col在页面上', () => {
    expect(Col).to.be.exist
  })

  it('可以设置span属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        span: 1,
      },
      attachToDocument: true
    })
    const {vm} = wrapper
    expect(vm.$el.classList.contains('col-1')).to.eq(true)
    wrapper.destroy()
  })

  it('可以设置offset属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        offset: 1,
      },
      attachToDocument: true
    })
    const {vm} = wrapper
    expect(vm.$el.classList.contains('offset-1')).to.eq(true)
    wrapper.destroy()
  })

  it('可以设置pc属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        pc: {span: 1, offset: 2}
      },
      attachToDocument: true
    })
    const {vm} = wrapper
    expect(vm.$el.classList.contains('offset-pc-2')).to.eq(true)
    expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
    wrapper.destroy()
  })


})
