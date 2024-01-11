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
  const [isEmailRegistered, setIsEmailRegistered] = useState("1");
  const [buttonMessage, setButtonMessage] = useState("Check Email!");
  const [goToLogin, setGoToLogin] = useState(false);
  const [nameBtn, setNameBtn] = useState("CheckEmail");
  const [typeBtn, setTypeBtn] = useState("button");
  const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();

  const handleSetUserEmail = (e) => {
    setUserEmail(e.target.value);
    setButtonMessage("Check Email!");
  };

  useEffect(() => {
    if (!isEmailRegistered) {
      navigate("/RegistrationForm");
    }
  }, [isEmailRegistered]);

  useEffect(() => {
    if (goToLogin) {
      navigate("/Login");
    }
  }, [goToLogin]);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setGoToLogin(true);
  };

  const handleEmailCheck = async (e) => {
    e.preventDefault();

    if (validRegex.test(userEmail)) {
      try {
        setIsLoading(true);
        apiUserReqHandler(`CheckUser/`, userEmail, `GET`)
          .then((response) => {
            setIsEmailRegistered(response.IsEmailRegistered);
          })
          .finally(setIsLoading(false))
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {
        console.log(e);
      }
    } else {
      setButtonMessage("Invalid email!");
    }
  };

  const handleKey = (e) => {
     
    if (e.key === "Enter") {
      e.preventDefault();
      if (typeBtn === "submit") {
        handleRegisterSubmit(e);
      } else {
        handleEmailCheck(e);
      }
    }
  };

  useEffect(() => {
    const user = { email: userEmail };
    localStorage.setItem("User", JSON.stringify(user));
    if (
      isEmailRegistered &&
      typeof isEmailRegistered === "boolean" &&
      validRegex.test(userEmail)
    ) {
      setTypeBtn("submit");
      setNameBtn("Submit");
      setButtonMessage("This email is used! Login With That?");
    }
  }, [isEmailRegistered]);

  useEffect(() => {
    setTypeBtn("button");
    setNameBtn("CheckEmail");
    setGoToLogin(false);
    setIsEmailRegistered("1");
  }, [userEmail]);

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
      <form onSubmit={handleRegisterSubmit} onKeyDown={handleKey}>
        <FormControl style={{ display: "flex", flexDirection: "column" }}>
          <FormLabel>
            <FormLabel>Enter your email</FormLabel>
            <Input
              type="email"
              value={userEmail}
              onChange={handleSetUserEmail}
              onKeyDownCapture={handleKey}
              onKeyDown={handleKey}
              // onKeyDown={isEmailRegistered && typeof isEmailRegistered != "boolean"
              // ? (e) => handleEmailCheck(e)
              // : handleRegisterSubmit}
              isRequired
              color={theme.colors.main[500]}
              focusBorderColor={theme.colors.main[100]}
            />
          </FormLabel>
          <Button
            type={typeBtn}
            name={nameBtn}
            isLoading={isLoading}
            loadingText="Checking"
            onClick={
              isEmailRegistered && typeof isEmailRegistered != "boolean"
                ? (e) => handleEmailCheck(e)
                : null
            }
            color={theme.colors.main[100]}
            variant="ghost"
            _hover={{
              bgColor: theme.colors.main[100],
              color: theme.colors.main[500],
            }}
          >
            {buttonMessage}
          </Button>
        </FormControl>
      </form>
    </div>
  );
};
