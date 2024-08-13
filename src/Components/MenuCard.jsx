import React,{useState} from 'react'

import { useParams } from 'react-router-dom';
import useMenu from '../utils/useMenu';
import RestMenu from './RestMenu';

const MenuCard = () => {

    const {id} =useParams()
    const menuItems = useMenu(id);
    const [menu,filteredMenu] = menuItems;
    const [showIndex,setShowIndex] = useState(null)
   

    return (
        menu == null ? <p className='m-auto text-start w-[50vw] font-bold'>Loading menu...</p> :
        <div className='m-auto text-center w-[50vw]'>
            <div className='text-start p-2'>
                <h1 className='font-black'>{menu.name}</h1>
                <h3 className='font-semibold'>{menu.costForTwoMessage}</h3>
            </div>
            {/* <RestMenu items={filteredMenu} key={menu.id} /> */}
            
            {filteredMenu.map((menu,index) => (
                <RestMenu item={menu} showItem={index===showIndex ? true : false} setShowIndex={() =>setShowIndex(index)} />
            ))}
        </div>
    )
}

export default MenuCard