import React, {memo} from 'react'

const HelloWorld = () => {
  console.log("Hello World Rendered!")
  return (
    <div>Hello World</div>
  )
}

export default memo(HelloWorld)