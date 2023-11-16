import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  ButtonGroup,
  theme,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiUserReqHandler from "../../helpers/apiRequest";

export const EmailForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailRegistered, setIsEmailRegistered] = useState(true);
  const navigate = useNavigate();

  const handleSetUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  useEffect(() => {
    !isEmailRegistered ? navigate("/RegistrationForm") : null;
  }, [isEmailRegistered]);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      apiUserReqHandler(`CheckUser/`, userEmail, `GET`)
        .then((response) => {
          console.log(response);
          setIsEmailRegistered(response.IsEmailRegistered);
        })
        .finally(setIsLoading(false))
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const user ={email:userEmail}
    localStorage.setItem("User", JSON.stringify(user));
  }, [isEmailRegistered]);

  
  const theme = useTheme();
  const mainColor = theme.colors.main;
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "100vh",
        background: `linear-gradient(to right, ${mainColor[100]}, ${mainColor[400]})`,
      }}
    >
      <form onSubmit={handleRegisterSubmit}>
        <FormControl
          style={{ display: "flex", flexDirection: "column" }}
          
        >
          <FormLabel>
            <FormLabel>Enter your email</FormLabel>
            <Input
              type="email"
              value={userEmail}
              onChange={handleSetUserEmail}
              isRequired
              color={theme.colors.main[500]}
              focusBorderColor={theme.colors.main[100]}
            />
          </FormLabel>
          <Button
            type="submit"
            name="Submit"
            isLoading={isLoading}
            loadingText="Checking"
            color={theme.colors.main[100]}
            variant="ghost"
            _hover={{bgColor:theme.colors.main[100],color:theme.colors.main[500]}}
          >
            Check Email
          </Button>
        </FormControl>
      </form>
    </div>
  );
};
