import { Button, Collapse, Box, ButtonGroup } from "@chakra-ui/react";
import "./../App.css";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const MenuButtons = ({
  isOpen,
  onToggle,
  colId,
  InsideCollapse,
  MenuBtnName,
  text,
  isLoading
}) => {
  
  console.log("1");

  const theme = useTheme();
  const mainColor = theme.colors.main;
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <ButtonGroup>
        <Button
          id={colId}
          onClick={onToggle}
          color={mainColor[100]}
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          name={MenuBtnName}
          position={"relative"}
          className="button"
          isLoading={isLoading}
          loadingText="Checking"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {text}
        </Button>
        <Collapse id={colId} in={isOpen} animateOpacity>
          <Box
            p="40px"
            color={mainColor[500]}
            mt="4"
            bg={`linear-gradient(to right, ${mainColor[400]}, ${mainColor[100]})`}
            rounded="md"
            shadow="md"
            position={"absolute"}
            right={0}
            left={0}
          >
            {InsideCollapse}
          </Box>
        </Collapse>
      </ButtonGroup>
    </Box>
  );
};

export default MenuButtons;
