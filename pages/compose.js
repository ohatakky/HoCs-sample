import React from 'react'
import compose from 'recompose/compose'

const add = x => y => x + y

const add2 = add(2)
const add4 = add(4)

// arg: ...functions
// return: ComponentEnhancer
// 合繊関数: HoF
// 合成コンポーネント: 
const result = compose(add4, add2)(2)

export default () => <p>{result}</p>