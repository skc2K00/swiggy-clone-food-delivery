import React, { useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import { SlArrowUp } from "react-icons/sl";
import MenuItems from './MenuItems'

const RestMenu = (props) => {
    console.log(props)
    const {item,showItem,setShowIndex} = props
    
    
    const toggleShowMenu = () => {
        setShowIndex()
    }

  return (
    <>
        {/* {items.map((item,index) => 
        <div className='m-auto p-2 shadow-lg w-[50vw]'>
            <div className='flex justify-between' onClick={toggleShowMenu}>
                <span className='font-extrabold m-4'>{item.card.card.title} ({item.card.card.itemCards.length})</span>
                {!showMenu ? <span className='p-2'><SlArrowDown /></span> : <span className='p-2 mr-4'><SlArrowUp /></span>}
            </div>
            {showMenu && <div className='text-start ml-3'>
                <MenuItems cards={item.card.card.itemCards}/>
            </div>}
        </div>)} */}
        <div className='m-auto p-2 shadow-lg w-[50vw]'>
            <div className='flex justify-between' onClick={toggleShowMenu} >
            <span className='font-extrabold m-4'>{item.card.card.title} ({item.card.card.itemCards.length})</span>
            {!showItem ? <span><SlArrowDown /></span> : <span><SlArrowUp /></span>}
            </div>
            {showItem && <MenuItems cards={item.card.card.itemCards}/>}
        </div>
    </>
    
  )
}

export default RestMenu