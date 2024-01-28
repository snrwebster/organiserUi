import { Button, ButtonGroup, Collapse, Grid, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const {isOpen,onToggle} = useDisclosure(false);

  const handleLogout = () =>{
    localStorage.removeItem("User")
    navigate("/")
  }
  return (
    <Grid
      display={"flex"}
      flexDirection={"row"}
      w={"100%"}
      justifyContent={"space-between"}
    >
      <Button onClick={() => navigate(-1)} />
      <ButtonGroup orientation="vertical">
        <Button onClick={onToggle} />
        <Collapse in={isOpen} animateOpacity>
            <Button onClick={handleLogout}>
                {"Logout"}
            </Button>
        </Collapse>
      </ButtonGroup>
    </Grid>
  );
};

export default Header;
