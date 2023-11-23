import { Button } from "@chakra-ui/react";
import MenuButtons from "../../components/MenuButtons";
import AddBillForm from "../Forms/AddBillForm";

const CategoryBills = () => {
  return (
    
      <MenuButtons InsideCollapse={<AddBillForm/>}  MenuBtnName={"AddBill"} text={"Add new Bill"}></MenuButtons>
    
  );
};

export default CategoryBills;
