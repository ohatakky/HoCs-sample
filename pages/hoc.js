import React from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

// pureな関数
export const Component = props =>
  <button onClick={props.onClick}>
    {props.msg}
  </button>

export const onClick = props => () => props.setMsg('good')

// handlerをpropsで渡す
// componentがprops以外の変数に依存しないようにする。
export default compose(
  withState('msg', 'setMsg', 'hello'),
  withHandlers({onClick})
)(Component)

// HoCsを用いて、内部でFluxを実現