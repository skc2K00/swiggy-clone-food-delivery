import RestaurantCard from "./RestaurantCard";

import {restaurantsUrl} from "../utils/constants";

import Shimmer from "./Shimmer";

import { useState,useEffect } from "react";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";
import { withVegLabel } from "./RestaurantCard";

let Body = () => {

    const [resData,setResData] = useState([]);
    const [resCopy,setResCopy] = useState([]);
    const [resSearch,setResSearch] = useState('')

    const RestaurantCardVeg = withVegLabel(RestaurantCard)

    useEffect(() => {
        const restauratsData = async() => {
            const response = await fetch(restaurantsUrl);
            const output = await response.json();
            // console.log(output.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setResData(output.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setResCopy(output.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        } 
        restauratsData();
    },[])

    const filterRestaurantsOnRating = () => {
        const filteredRest = resCopy.filter((restaurant) => {
            return (restaurant.info.avgRating) >= 4.3;
        })
        setResData(filteredRest);
    }

    const searchRestaurant = () => {
        const filteredRest = resCopy.filter((restaurant) => {
            return (restaurant.info.name).toLowerCase().includes(resSearch)
        })
        setResData(filteredRest);
    }

    if(resData.length ==0) {
        return (
            <div className='flex flex-wrap p-2 justify-center m-auto w-[85vw]'>
            <Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer />
            <Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer />
            </div>
        )
    }

    return( 
      <>
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 m-1 rounded ml-24" 
            onClick={filterRestaurantsOnRating}
        >
            Top Rated Restaurants
        </button>
        <input className="border-2 rounded border-gray-500 p-1" type="text" onKeyUp={(e) => {
            setResSearch(e.target.value);
        }}/>
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 m-1 rounded"
            onClick={searchRestaurant}
        >
            Search
        </button>
        <div className='flex flex-wrap p-2 justify-center m-auto w-[85vw]'>
        {resData.map((resInfo,index) => (
            <Link to={"/menucard/"+resInfo.info.id} >
                {resInfo.info.veg ? (<RestaurantCardVeg key={resInfo.info.id} item={resInfo} />) : <RestaurantCard key={resInfo.info.id} item={resInfo} />}
            </Link>
        ))}
        
      </div>
      </>
    )
  }

export default Body;