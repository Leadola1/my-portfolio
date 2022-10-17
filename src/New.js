import React from 'react'
import Typical from 'react-typical'
 
function New() {

    return (
      <Typical
        steps={['Hello', 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }



 
export default New;