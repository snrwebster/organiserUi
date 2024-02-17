import BillsCategory from "./../../assets/BillsCategory.jpg";
import CalendarCategory from "./../../assets/calendarCategory.jpg";
import MainMenuButton from "../../components/MainMenuButton";
import { useEffect, useState } from "react";


const Categories = () => {
  const [hasProfile, setHasProfile] = useState(false);
  useEffect(()=>{
    checkProfile();
  },[])
  const checkProfile = () =>
  {
    const profile = localStorage.getItem("economicProfile")?JSON.parse(localStorage.getItem("economicProfile")):null;
    
  }
  
  
  return (hasProfile ?(
    <div style={{display:'flex',justifyContent:"space-evenly",alignItems:"center" ,height:"100vh"}}>
        
     <MainMenuButton BtnName={"Bills"} BtnBkrd={BillsCategory} BtnText={"Economics"} color={"black"}/>
     <MainMenuButton BtnName={"Calendar"} BtnBkrd={CalendarCategory} BtnText={"Calendar"} color={"white"}/>
    </div>
  ):null);
};

export default Categories;
