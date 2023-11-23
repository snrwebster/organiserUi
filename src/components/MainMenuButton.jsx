import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainMenuButton = ({ BtnName, BtnBkrd, BtnText, color, navTarget }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleOnClick = (e) => {
    navigate(`${e.target.name}`)
  };

  return (
    <Button
      boxShadow={"70px 42px 37px 1px rgba(0,0,0,0.77)"}
      transitionDuration={"1s"}
      _hover={{
        boxShadow: "5px 9px 7px 1px rgba(0,0,0,0.77)",
        transitionDuration: "2s",
        transform: "translate(1.5em)",
      }}
      name={`${BtnName}`}
      variant={"link"}
      backgroundSize={"contain"}
      backgroundImage={BtnBkrd}
      width={"20em"}
      height={"200px"}
      p={0}
      onClick={(e) => handleOnClick(e)}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Text color={isHovered ? `${color}` : "transparent"}>{BtnText}</Text>
    </Button>
  );
};

export default MainMenuButton;
