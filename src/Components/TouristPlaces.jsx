function TouristPlaces({img,places,desc,price,visit,state,rating,budjet}){
    return(
        <>
            <div className=" w-[30vw] h-max mx-auto border  border-black p-2 rounded-md">
                <p className="text-xl font-bold my-1">{state}</p>
                <img src={img} className="w-full" alt="" />
                <p className=" font-bold my-1">{places}</p>
                <p className=" text-sm my-1 font-sans">{desc}</p>
                <p className="text-sm my-1 underline">{price}</p>
              <div className="flex justify-between items-center">
              <p className="text-sm text-blue-600 font-bold">Visit in : {visit}</p>
              <p className={`text-xl font-bold ${rating >= 4.5 ? "text-green-500" : " text-orange-500"}`}>{rating}</p>
              </div>
              <p className="text-1xl font-bold">{budjet} ₹ </p>
            </div>
        </>
    )
}
export default TouristPlaces