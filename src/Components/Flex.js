import React from 'react'

export default function Flex(props) {
    

  return (
             <div className='wid'>
                    <div className={props.items.classname}><a className='firsta a' href={props.items.href}>view</a></div>
                    {/* <div className='item item2'><a className='firsta' href="">view</a></div>
                    <div className='item item3'><a className='firsta' href="">view</a></div>
                    <div className='item item4'><a className='firsta' href="">view</a></div>
                    <div className='item item5'><a className='firsta' href="">view</a></div>                    */}
               </div>       
  )
}
