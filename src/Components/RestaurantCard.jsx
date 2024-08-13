
import {restImgUrl} from "../utils/constants";
import Context from "../utils/Context";
import { useContext } from "react";

let RestaurantCard = (props) => {

  // const myName = useContext(Context)

    const {name,avgRating,cloudinaryImageId,cuisines,sla,locality} = props.item.info
    return(
      <div className='h-[350px] w-[200px] m-1 p-1 rounded bg-slate-100 items-center'>
        <img className='h-[160px] w-[200px] rounded-md' alt='Restaurant Image' src={restImgUrl + cloudinaryImageId} />
        <div className="m-1 items-center">
            <h4 className="font-semibold">{name}</h4>
            <p>{avgRating} Rating</p>
            <p>{cuisines[0]}</p>
            <p>{sla.deiveryTime}</p>
            <p>{locality}</p>
            {/* <p>{myName}</p> */}
        </div>
      </div>
    )
  }

  export default RestaurantCard;

  export const withVegLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute m-2 bg-green-500 text-black p-1 rounded-xl">Veg</label>
          <RestaurantCard {...props} />
        </div>
      )
    }

  }