import { Button ,Collapse,useDisclosure,Box} from "@chakra-ui/react";
import "./../App.css";
import { useTheme } from "@emotion/react";

const MenuButtons = ({InsideCollapse ,MenuBtnName, text }) => {
    const { isOpen, onToggle } = useDisclosure()

  const theme = useTheme();
  const mainColor = theme.colors.main;
  return (
    <>
      <Button
        onClick={onToggle}
        color={mainColor[100]}
        bg={"transparent"}
        _hover={{ bg: "transparent" }}
        name={MenuBtnName}
        position={"relative"}
        className="button"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color={mainColor[500]}
          mt="4"
          bg={`linear-gradient(to right, ${mainColor[400]}, ${mainColor[100]})`}
          rounded="md"
          shadow="md"
        >
        {InsideCollapse}
        </Box>
      </Collapse>
    </>
  );
};

export default MenuButtons;
