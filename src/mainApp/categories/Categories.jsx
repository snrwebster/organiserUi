import BillsCategory from "./../../assets/BillsCategory.jpg";
import CalendarCategory from "./../../assets/calendarCategory.jpg";
import MainMenuButton from "../../components/MainMenuButton";
import CustomModal from "../../components/CustomModal";
import { useEffect, useState } from "react";
import CreateEconomicProfile from "../Forms/CreateEconomicProfile";
import { useDisclosure } from "@chakra-ui/react";

const Categories = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(true);
  const [hasProfile, setHasProfile] = useState(false);
  const [btnVisibility,setBtnVisibility] = useState(false)
  useEffect(() => {
    checkProfile();
  }, []);
  const checkProfile = () => {
    const profile = localStorage.getItem("economicProfile")
      ? JSON.parse(localStorage.getItem("economicProfile"))
      : onOpen();
  };
  const handleSubmitOnProfileModal = (e) => {
    console.log(e.target)
  };

  return hasProfile ? (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <MainMenuButton
        BtnName={"Bills"}
        BtnBkrd={BillsCategory}
        BtnText={"Economics"}
        color={"black"}
      />
      <MainMenuButton
        BtnName={"Calendar"}
        BtnBkrd={CalendarCategory}
        BtnText={"Calendar"}
        color={"white"}
      />
    </div>
  ) : (
    <CustomModal
    
    isOpen={isOpen}
      onClose={hasProfile ? onClose : (e)=> handleSubmitOnProfileModal(e)}
      content={<CreateEconomicProfile />}
      btnVisibility = {btnVisibility}
      btnText = {"Create profile"}
    />
  );
};

export default Categories;
