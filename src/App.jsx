import TouristPlaces from "./Components/TouristPlaces";
const touristPlaces = [
    {
      place: "Velliangiri Hills",
      state: "Tamil Nadu",
      weather: "Winter",
      price: "Free",
      rating: 4.7,
      budjet:4000,
      image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/35/32/a4/trek-to-temple.jpg?w=1800&h=1000&s=1",
      description: "Known as the 'Kailash of the South,' Velliangiri Hills is a revered pilgrimage site and a beautiful trekking destination offering panoramic views and spiritual experiences."
    },
    {
      place: "Taj Mahal",
      state: "Uttar Pradesh",
      weather: "Winter",
      price: "₹50 for Indian tourists, ₹1100 for foreign tourists",
      rating: 4.8,
      budjet:10000,
      image:"https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
      description: "A UNESCO World Heritage Site, the Taj Mahal is an iconic symbol of love with its stunning marble architecture, intricate inlay work, and serene gardens."
    },
    {
      place: "Jaipur (Pink City)",
      state: "Rajasthan",
      weather: "Winter",
      price: "Varies by attraction, e.g., Amber Fort entry ₹25-₹200",
      rating: 4.5,
      budjet:12000,
      image:"https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
      description: "Jaipur, known as the Pink City, is famous for its historic forts, palaces, vibrant bazaars, and cultural heritage that showcase the grandeur of Rajasthan."
    },
    {
      place: "Backwaters of Kerala",
      state: "Kerala",
      weather: "Winter",
      price: "Houseboat rentals start at ₹5,000 per day",
      rating: 4.6,
      budjet:8000,
      image:"https://www.tripsavvy.com/thmb/UoylMLyzOBPdDp34ForEiJd9m3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-522478216-5ab12c4e3de4230036949cee.jpg",
      description: "A unique network of tranquil canals, lakes, and rivers, the backwaters of Kerala offer a relaxing escape and a close view of local life, best enjoyed on a houseboat."
    },
    {
      place: "Leh-Ladakh",
      state: "Jammu and Kashmir",
      weather: "Summer",
      price: "Varies; permits required for some areas",
      rating: 4.9,
      budjet:20000,
      image:"https://www.ttrikon.com/system/images/000/409/542/21062194d085e1ac6d316c4dcbcb73fb/x800gt/IMG_20180128_122710_HDR.jpg?1714965839",
      description: "Leh-Ladakh is a stunning high-altitude destination with beautiful landscapes, perfect for adventurous travelers looking for trekking, biking, and scenic beauty."
    },
    {
      place: "Manali",
      state: "Himachal Pradesh",
      weather: "Summer",
      price: "Varies based on activities",
      rating: 4.5,
      budjet:15000,
      image:"https://static.wanderon.in/wp-content/uploads/2024/04/featurd-image-min.jpg",
      description: "Manali is a popular hill station surrounded by mountains and forests, known for its scenic views, adventure sports, and as a gateway to Leh."
    },
    {
      place: "Rishikesh",
      state: "Uttarakhand",
      weather: "Summer",
      price: "Varies by activity (rafting, yoga classes)",
      rating: 4.4,
      budjet:14000,
      image:"https://s7ap1.scene7.com/is/image/incredibleindia/1-triveni-ghat-rishikesh-uttarakhand-2-city-hero?qlt=82&ts=1726646286991",
      description: "A spiritual hub and adventure center, Rishikesh offers river rafting, yoga, and serene settings along the Ganges, attracting both pilgrims and thrill-seekers."
    },
    {
      place: "Goa Beaches",
      state: "Goa",
      weather: "Winter",
      price: "Free beach access; varies by resort and activities",
      rating: 4.7,
      budjet:9000,
      image:"https://zenseresort.com/wp-content/uploads/2016/02/Goa-Beaches.gif",
      description: "Famous for its vibrant beach life, nightlife, and culture, Goa is an ideal winter destination with sunny beaches, water sports, and festivals."
    },
    {
      place: "Andaman and Nicobar Islands",
      state: "Andaman and Nicobar Islands",
      weather: "Winter",
      price: "Varies by island and activity",
      rating: 4.6,
      budjet:200000,
      image:"https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/39f3727a-9024-4b7f-8560-dd8061cde8c0/INTRO+TO+ANDAMAN+NICOBAR.jpg",
      description: "The islands offer pristine beaches, crystal-clear waters, and adventure sports like snorkeling and scuba diving, making it an ideal tropical winter getaway."
    },
    {
      place: "Coorg",
      state: "Karnataka",
      weather: "Winter",
      price: "Free entry; costs vary for activities",
      rating: 4.5,
      budjet:5000,
      image:"https://www.indiatravel.app/wp-content/uploads/2024/02/places-to-visit-in-coorg.jpg",
      description: "Known as the Scotland of India, Coorg offers scenic coffee plantations, waterfalls, and a pleasant winter climate for nature lovers."
    },
    {
      place: "Hampi",
      state: "Karnataka",
      weather: "Winter",
      price: "Entry ₹30-₹500",
      rating: 4.7,
      budjet:2000,
      image:"https://traveleva-blogs.gumlet.io/wp-content/uploads/2024/01/places-to-visit-in-hampi.jpg?compress=true&quality=80&w=768&dpr=2.6",
      description: "A UNESCO World Heritage site, Hampi showcases ancient ruins, temples, and landscapes that make it a historic and cultural winter destination."
    },
    {
      place: "Ooty",
      state: "Tamil Nadu",
      weather: "Summer",
      price: "Varies by activity and accommodation",
      rating: 4.6,
      budjet:3000,
      image:"https://www.indiatravel.app/wp-content/uploads/2024/02/places-to-visit-in-ooty.jpg",
      description: "A beautiful hill station known for its cool weather in summer, Ooty has picturesque tea gardens, lakes, and scenic train rides perfect for summer visitors."
    }
  ];
  
  
function App(){
    return(
        <>
        <div className=" bg-orange-100 text-center font-bold text-2xl p-5">Tourist Places in India...</div>
        <div className="bg-orange-100 flex gap-4 flex-shrink-0 flex-wrap w-full mx-auto  ">
            {
                touristPlaces.map((data)=><TouristPlaces budjet={data.budjet} rating={data.rating} state={data.state} img={data.image} places={data.place} desc={data. description} price={data.price} visit={data.weather} />)
            }
        </div>
        </>
    )
}
export default App