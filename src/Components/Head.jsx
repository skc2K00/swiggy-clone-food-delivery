import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { foodDeliveryAppImage } from "../utils/constants";
import { useContext } from "react";
import Context from "../utils/Context";
import { useState } from "react";


import { useDispatch, useSelector } from "react-redux";

const Head = () => {

  const [btnName,setBtnName] = useState("Log In");

  const cart = useSelector((state) => state.cart)

    // const myName = useContext(Context) 
    return(
        <div className="flex justify-center">
            <div className='flex  justify-between bg-gray-100 rounded-lg m-2 p-1 shadow-orange-300 shadow-md w-[85vw]'>
              <Link to="/"><img className='h-20 w-20' src={foodDeliveryAppImage} /></Link>
              <ul className=' flex items-center'>
                <Link to="/" ><li className='p-2'>Home</li></Link>
                {/* {myName} */}
              <Link to="/search">
              <div className="flex items-center">
              <IoIosSearch />
              <li className='p-2'>Search</li>
            </div>
          </Link>
          <Link to="/offers"><li className='p-2'>Offers</li></Link>
          <Link to="/help"><li className='p-2 '>Help</li></Link>
          {/* <Link to="/signin"><li className='p-2'>Sign In</li></Link> */}
          <Link to="/cart"><li className='p-2'><span className="p-1">{cart.length}</span>Cart</li></Link>
          <Link to="/login"><li onClick={()=> {btnName === "Log In" ? setBtnName("Log Out") : setBtnName("Log In")}} className='p-2'>Login</li></Link>
        </ul>
            </div>
          </div>
      
    )
  }

  export default Head;