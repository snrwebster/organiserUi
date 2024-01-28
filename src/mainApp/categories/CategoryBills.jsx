import { Box, Button,useDisclosure } from "@chakra-ui/react";
import MenuButtons from "../../components/MenuButtons";
import AddBillForm from "../Forms/AddBillForm";
import AllBill from "../views/BillViews/AllBill";
import { useState } from "react";

const CategoryBills = () => {
  const [openButton, setOpenButton] = useState(null); 
  const [isLoading,setIsLoading]= useState(false)
  const handleToggle = (buttonType) => {
    console.log(openButton)
    setOpenButton((prev) => (prev === buttonType ? null : buttonType));
    console.log("i run the fucntion")
  };

  return (
    <Box display={"flex"} justifyContent={"center"} flex={1}>
      <MenuButtons
        colId={1}
        isOpen={openButton==="AddBill"}
        onToggle={() => handleToggle("AddBill")}
        InsideCollapse={<AddBillForm  />}
        MenuBtnName={"AddBill"}
        text={"Add new Bill"}
        isLoading={isLoading}
      ></MenuButtons>
      <MenuButtons
        colId={2}
        isOpen={openButton === "seeBills"}
        onToggle={() => handleToggle("seeBills")}
        InsideCollapse={<AllBill setIsLoading={setIsLoading} />}
        MenuBtnName={"seeBills"}
        text={"see all bills"}
        isLoading={isLoading}
      ></MenuButtons>
    </Box>
  );
};

export default CategoryBills;
