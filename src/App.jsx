import Card from "./card"
const foods = [
  {
    foodName: "Margherita Pizza",
    type: "Vegetarian",
    rating: 4.5,
    price: 249,
    img: "https://img.freepik.com/premium-photo/pizza-with-different-toppings-it_915071-17624.jpg",
    desc: "Classic Margherita pizza with fresh tomatoes, mozzarella cheese, and basil."
  },
  {
    foodName: "Chicken Biryani",
    type: "Non-Vegetarian",
    rating: 4.7,
    price: 299,
    img: "https://static.vecteezy.com/system/resources/thumbnails/028/536/608/small_2x/flavorful-feast-indulge-in-the-goodness-of-chicken-biryani-generative-ai-photo.jpg",
    desc: "Flavorful and aromatic chicken biryani with basmati rice and spices."
  },
  {
    foodName: "Caesar Salad",
    type: "Vegetarian",
    rating: 4.2,
    price: 189,
    img: "https://img.pikbest.com/ai/illus_our/20230414/d774bc3118ba269eb7250d9b375fd7d1.jpg!w700wp",
    desc: "Fresh Caesar salad with romaine lettuce, croutons, Parmesan cheese, and dressing."
  }, {
    foodName: "Paneer Butter Masala",
    type: "Vegetarian",
    rating: 4.6,
    price: 399,
    img: "https://img.freepik.com/premium-photo/india39s-paneer-butter-masala_410516-47578.jpg",
    desc: "Creamy paneer butter masala cooked in rich tomato gravy with Indian spices."
  }

];

function App(){
  return(
    <>
     <div className="flex gap-2 m-2 flex-wrap">
      {
        foods.map((item)=><Card img={item.img} foodName={item.foodName} rating={item.rating} desc={item.desc} price={item.price}/>)
      }
     </div>
    </>
  )
}
export default App