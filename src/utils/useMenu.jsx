import { useState,useEffect } from "react";
import { menu_url } from '../utils/constants'

const useMenu = (id) => {

    const [menu,setMenu] = useState(null);
    const [filteredMenu,setFilteredMenu] = useState([]);

    useEffect(() => {
        const fetchMenu = async() => {
            const res = await fetch(menu_url+id);
            const out = await res.json()
            // console.log(out.data)
            setMenu(out.data.cards[2].card.card.info)
            const restItems = out.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
            const filResItems = restItems.filter((item) => item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
            
            setFilteredMenu(filResItems)
        }
        fetchMenu();
    },[])

    const menuItems = [ menu, filteredMenu ]
    return menuItems;
}

export default useMenu;