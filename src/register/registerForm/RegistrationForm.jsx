import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import monkeyClosed from "./../../assets/MonkeyNoEyes.png";
import monkeyNoSpeak from "./../../assets/MonkeyNoSpeak.png";
import { useEffect, useState } from "react";
import { useTheme } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import apiRequest from "./../../helpers/apiRequest";


const RegistrationForm = () => {
  const [lName, setLName] = useState("");
  const [fName, setFName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordReType, setPasswordReType] = useState("");
  const [isValid, setIsValid] = useState(
    password === passwordReType ? true : false
  );
  const [userCreated, setUserCreated] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePassRetype = (e) => {
    setPasswordReType(e.target.value);
  };
  const handleShowPass = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      apiRequest("CreateUSer", User, "POST").then((response) => {
        setUserCreated(response.Success);
      });
    } else {
      console.log(2);
    }
  };

  useEffect(() => {
    setIsValid(password === passwordReType);
  }, [password, passwordReType]);

  useEffect(() => {
    !localStorage.getItem("User") ? navigate("/") : null;
  }, []);
  useEffect(() => {
    if (userCreated) {
      var User = JSON.parse(localStorage.getItem("User"));
      User.userName = fName;
      User.fName = fName;
      User.lName = lName;
      User.password = password;
      localStorage.setItem("User", JSON.stringify(User));
      navigate("/Login");
    }
  }, [userCreated]);

  const theme = useTheme();
  const mainColor = theme.colors.main;
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        background: `linear-gradient(to right, ${mainColor[100]}, ${mainColor[400]})`,
      }}
      onSubmit={handleSubmit}
    >
      <div style={{ display: "flex" }}>
        <FormControl width={"40%"} m={"2em"} isRequired>
          <FormLabel color={theme.colors.main[500]}>First name</FormLabel>
          <Input
            color={theme.colors.main[500]}
            variant="flushed"
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            focusBorderColor={theme.colors.main[500]}
          />
        </FormControl>
        <FormControl width={"40%"} m={"2em"} isRequired>
          <FormLabel color={theme.colors.main[500]}>Last name</FormLabel>
          <Input
            color={theme.colors.main[500]}
            textColor={theme.colors.main[500]}
            variant="flushed"
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            focusBorderColor={theme.colors.main[500]}
          />
        </FormControl>
      </div>
      <div style={{ display: "flex" }}>
        <FormControl width={"40%"} m={"2em"} isRequired>
          <FormLabel color={theme.colors.main[500]}>Password</FormLabel>
          <Input
            color={theme.colors.main[500]}
            textColor={theme.colors.main[500]}
            variant="flushed"
            type={!showPass ? "password" : "text"}
            value={password}
            onChange={handleSetPassword}
            focusBorderColor={theme.colors.main[500]}
          />
        </FormControl>
        <Box bg="transparent" boxSize={"50px"} onClick={handleShowPass}>
         {showPass ?<Image bg={"transparent"} src={monkeyNoSpeak}/>: <Image bg={"transparent"} src={monkeyClosed} />}
        </Box>
        <FormControl width={"40%"} m={"2em"} isInvalid={!isValid} isRequired>
          <FormLabel color={theme.colors.main[500]}>Retype Password</FormLabel>
          <Input
            color={theme.colors.main[500]}
            textColor={theme.colors.main[500]}
            variant="flushed"
            type={!showPass ? "password" : "text"}
            value={passwordReType}
            onChange={handlePassRetype}
            focusBorderColor={theme.colors.main[500]}
          />
          {!isValid && (
            <FormErrorMessage>Passwords do not match</FormErrorMessage>
          )}
        </FormControl>
      </div>
      <Button type="Submit" name="submit" variant={"ghost"}>
        REGISTER
      </Button>
    </form>
  );
};

export default RegistrationForm;
