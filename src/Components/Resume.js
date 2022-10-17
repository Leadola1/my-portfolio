import React from 'react'
import Data from './data'
import Flex from './Flex'

export default function Resume() {
        const cards=Data.map((items)=>{
          return (
            <Flex
              key={items.id}
              items={items}
            
            
            />
          )
        })

  return (
    <div className='main-div' id="resume">
        <div className='resume-pad'>
            <h2 className='resume-h2'>Recent Projects</h2>
            
                <div className='wrapper'>
                    {cards}{console.log(cards.className)}
                    {/* <div className='item item2'><a className='firsta' href="">view</a></div>
                    <div className='item item3'><a className='firsta' href="">view</a></div>
                    <div className='item item4'><a className='firsta' href="">view</a></div>
                    <div className='item item5'><a className='firsta' href="">view</a></div>                    */}
               </div>
                
            
        </div>
    </div>
  )
}
