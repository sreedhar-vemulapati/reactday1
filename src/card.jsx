import React from "react"
function Card({img,foodName,rating,desc,type,price}){
    return(
        <>
        <div className=" border w-[30vw] h-[30vw] mx-auto my-5 p-5 rounded-lg flex-shrink-0 relative">
           <div className=" relative">
                 <img className=" w-full object-cover rounded-sm" src={img} alt="" />
                {  rating>=4.5 ?  <div className=" absolute  top-0 m-0 text-green-600 font-bold rounded-lg p-1 text-sm">Best seller</div> :""}
                {/* <div className={ `h-3 w-3 bg-green-500 absolute bottom-0 right-0 m-1 rounded-full ${type === "Vegetarian" ? "bg-green-500" :"bg-red-600"}`}></div> */}
           </div>
            <p className=" text-sm my-2">{desc}</p>
            <div className="flex justify-between">
                <h3 className=" font-bold">{foodName}</h3>
                <p>{price} ₹</p>
            </div>
            <button className=" absolute bottom-0 left-0 p-1 text-orange-500 bg-orange-50 rounded-tr-lg" onClick={() =>alert(`${foodName}  orderd successfully !`)}>Order now</button>
            {price >=299 ? <div className=" bg-gray-50 p-1 rounded-tl-lg absolute bottom-0 right-0 font-bold text-green-600 ">free dilivery</div> :""}
           
        </div>
        </>
    )
}
export default Card