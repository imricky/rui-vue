import {expect} from 'chai'
import Vue from 'vue'
import {shallowMount, mount} from '@vue/test-utils'
import Row from '@/components/row'
import Col from '@/components/col'
import sinon from 'sinon'

const sinonChai = require("sinon-chai")
const chai = require('chai')
chai.use(sinonChai)

describe('Row', () => {
  it('Row在页面上', () => {
    expect(Row).to.be.exist
  })

  it('可以设置align', () => {
    const wrapper = mount(Row, {
      propsData: {
        align: 'left',
      },
      attachToDocument: true
    })
    const {vm} = wrapper
    expect(getComputedStyle(vm.$el).justifyContent).to.eq('flex-start')
    wrapper.destroy()
  })

  it('可以设置gutter', () => {
    Vue.component('g-col', Col)
    const wrapper = mount(Row, {
      slots: {
        default: `<g-col span="12">123</g-col>
        <g-col span="12">123</g-col>`,
      },
      propsData:{
        gutter:20
      },
      attachToDocument:true,
      sync:false
    })

    const rows = wrapper.vm.$el.querySelectorAll('div')
    console.log(rows) //为什么看不到取不到row

    const cols = wrapper.vm.$el.querySelectorAll('.col')
    expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
    expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
    wrapper.destroy()
  })

})
