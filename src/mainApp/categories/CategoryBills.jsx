import { Box, Button } from "@chakra-ui/react";
import MenuButtons from "../../components/MenuButtons";
import AddBillForm from "../Forms/AddBillForm";

const CategoryBills = () => {
  return (
    <Box marginInline={"10%"} paddingBlock={"2%"}>
      <MenuButtons InsideCollapse={<AddBillForm/>}  MenuBtnName={"AddBill"} text={"Add new Bill"}></MenuButtons>
    </Box>
  );
};

export default CategoryBills;
