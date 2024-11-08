import User from "./Components/User";
const users = [
    {
      name: "Sreedhar",
      profession: "Frontend developer",
      image: "https://i.pinimg.com/474x/a6/54/00/a65400bec578fe36f9b022ee92681fad.jpg"
    },
    {
      name: "Sumedh",
      profession: "Actors",
      image: "https://i.pinimg.com/236x/9d/32/6d/9d326d4b8acb87414fa12ddeaab85f28.jpg"
    },
    {
      name: "Mallika Singh",
      profession: "Actors",
      image: "https://i.pinimg.com/736x/e7/05/d9/e705d9560012c1178c61485a4be42b35.jpg"
    },
    {
      name: "SarahKim",
      profession: "Content Writer",
      image: "https://img.freepik.com/premium-photo/natural-real-person-portrait-closeup-woman-girl-female-outside-nature-forest-artistic-edgy-cute-pretty-face-ai-generated_590464-133624.jpg"
    },
    {
      name: "DavidBrown",
      profession: "Project Manager",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkbxb6u33rRWrOZTZ7RmVCeSGDmjNYA20dTA&s"
    },
    {
      name: "EmilyDavis",
      profession: "Data Scientist",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69Dnz-2iGhLNaCLI2wBki0_h0DGPD8LwJGH7myah4nKI653zdi0437VZNC0d0eiAT7Y8&usqp=CAU"
    }
  ];
  
function App(){
    return(
        <>
       <div className=" border bg-red-100">
        {
            users.map((user)=><User name={user.name} profession={user.profession} img={user.image}/>)
        }
       </div>
        </>
    )
}
export default App