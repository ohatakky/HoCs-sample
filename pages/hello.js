import React from 'react'

export const withMsg = Component => props =>
  <Component {...props} msg='hello' />

export const withHello = Component => props =>
  <Component {...props} hello='msg' />

export const Component = props =>
  <p>{`${props.msg} ${props.hello}`}</p>

export default withMsg(withHello(Component))