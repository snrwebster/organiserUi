import {
  FormLabel,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Box,
  Image
} from "@chakra-ui/react";
import monkeyClosed from "./../../../assets/MonkeyNoEyes.png";
import monkeyNoSpeak from "./../../../assets/MonkeyNoSpeak.png";
import { useState } from "react";
import apiUserReqHandler from "../../../helpers/apiRequest";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const navigate =useNavigate();


  const submitLogin = (e) => {
    e.preventDefault();
    if (password != "") {
      const user = JSON.parse(localStorage.getItem("User"));
      const endpoint = "Login";
      const data = { email: user.email, password: password };
      const method = "POST";
      apiUserReqHandler(endpoint, data, method).then((response) => {
        if (response) {
          user.fName = response.fName;
          user.lName = response.lName;
          user.ID= response.id;
          localStorage.setItem('User',JSON.stringify(user));
          navigate("/Main")
        }
        else{setPassword("")}
      });
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <form
      onSubmit={submitLogin}
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FormLabel style={{ width: "35%" }}>
        <Input
          readOnly
          type="text"
          value={JSON.parse(localStorage.getItem("User")).email}
        />
      </FormLabel>
      <FormLabel style={{ width: "35%" }}>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            value={password}
            onChange={handlePassword}
          />
          <InputRightElement>
          <Box bg="transparent" boxSize={"35px"} onClick={()=>setShow(!show)}>
         {show ?<Image bg={"transparent"} src={monkeyNoSpeak}/>: <Image bg={"transparent"} src={monkeyClosed} />}
        </Box>
          </InputRightElement>
        </InputGroup>
      </FormLabel>
      <Button type="submit" name="sumbit" variant={"ghost"}>
        Login!
      </Button>
    </form>
  );
};

export default LoginForm;
