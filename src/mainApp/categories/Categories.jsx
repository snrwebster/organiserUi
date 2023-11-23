import BillsCategory from "./../../assets/BillsCategory.jpg";
import CalendarCategory from "./../../assets/calendarCategory.jpg";
import MainMenuButton from "../../components/MainMenuButton";


const Categories = () => {
 
  
  return (
    <div style={{display:'flex',justifyContent:"space-evenly",alignItems:"center" ,height:"100vh"}}>
        
     <MainMenuButton BtnName={"Bills"} BtnBkrd={BillsCategory} BtnText={"Economics"} color={"black"}/>
     <MainMenuButton BtnName={"Calendar"} BtnBkrd={CalendarCategory} BtnText={"Calendar"} color={"white"}/>
    </div>
  );
};

export default Categories;
