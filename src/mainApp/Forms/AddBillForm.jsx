import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import "./AddBillForm.css";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import apiReqHandler from "../../helpers/apiRequest";

const AddBillForm = () => {
  const [vimata, setVimata] = useState(0);
  const [bill, setBill] = useState({
    billName: "",
    billValue: "",
    BillIssuedDate: "",
    BillExpDate: "",
    UserEmail: JSON.parse(localStorage.getItem("User")).email,
  });
  const [errorOnExpDate, setErrorOnExpDate] = useState(false);
  const [txtBtnSubmit, setTxtBtnSubmit] = useState("Create bill");
  const [loading, setLoading] = useState(false);

  
  const handleNextClick = (step, inpValue) => {
    {
      if (
        vimata < step &&
        inpValue !== "" &&
        inpValue !== null &&
        inpValue !== undefined
      ) {
        setVimata(step);
      }
    }
    
    // Add your logic here
  };

  const handleEnter = (event) => {
    // Function to be executed when the enter key is pressed
    if (event.key === "Enter") {
      event.preventDefault();
      valInput(event);
      setVimata(vimata + 1);
      
      // Add your logic here
    }
  };
  const handleSubmit = (event) => {
    // Function to be executed when the form is submitted
    event.preventDefault(); // Prevents the default form submission behavior
    
    setLoading(true);
    try {
      const api = "https://localhost:7111/SnrOrgApi/Bills/";
      const endpoint = "NewBill";
      const method = "POST";
      apiReqHandler(api, endpoint, bill, method).then((response) => {
        
        setLoading((n) => !n);
        if (response.Success) {
          setTxtBtnSubmit("Bill Created");
          setBill({
            ...bill,
            billName:"",
            billValue:"",
            BillIssuedDate:"",
            BillExpDate:""
          })
        } else {
          setTxtBtnSubmit("There was an error");
        }
      });
    } catch (e) {
      setTxtBtnSubmit("Catch Throw error");
      
    }
    // Add your logic here
  };
  const handleUserInput = (e) => {
    

    if (e.target.id === "billName" && e.target.type === "text") {
      setBill({
        ...bill,
        billName: e.target.value.replace(/[^a-z!@,.:#$%^&*]/gi, ""),
      });
    }
    if (e.target.id === "billValue" && e.target.type === "text") {
      setBill({
        ...bill,
        billValue: e.target.value.replace(/[^0-9.]/gi, ""),
      });
    }
    if (e.target.id === "billIssueDate" && e.target.type === "date") {
      
      const issueDate = new Date(e.target.value).toISOString().split("T")[0];
      
      setBill({
        ...bill,
        BillIssuedDate: issueDate,
      });
    }
    if (e.target.id === "billExpireDate" && e.target.type === "date") {
      const expDate = new Date(e.target.value).toISOString().split("T")[0];
     
      if (expDate > bill.BillIssuedDate) {
        setBill({
          ...bill,
          BillExpDate: expDate,
        });
      } else {
        setErrorOnExpDate(true);
        setBill({
          ...bill,
          BillExpDate: "",
        });
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel textAlign={"center"}>NAME OF BILL </FormLabel>
        <InputGroup>
          <Input
            type="text"
            id={"billName"}
            onKeyDown={handleEnter}
            value={bill.billName}
            onChange={(e) => handleUserInput(e)}
          />
          <InputRightElement>
            <Box
              onClick={() => handleNextClick(1, bill.billName)}
              boxSize={"30px"}
            >
              <span className="arrow" />
            </Box>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {vimata > 0 ? (
        <FormControl isRequired>
          <FormLabel textAlign={"center"}>Value? </FormLabel>
          <InputGroup>
            <Input
              type="text"
              id={"billValue"}
              onKeyDown={handleEnter}
              value={bill.billValue}
              onChange={(e) => handleUserInput(e)}
            />
            <InputRightElement>
              <Box
                onClick={() => handleNextClick(2, bill.billValue)}
                boxSize={"30px"}
              >
                <span className="arrow" />
              </Box>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      ) : null}
      {vimata > 1 ? (
        <FormControl isRequired>
          <FormLabel textAlign={"center"}>Issue date? </FormLabel>
          <InputGroup>
            <Input
              type="date"
              id="billIssueDate"
              value={bill.BillIssuedDate}
              onKeyDown={handleEnter}
              onChange={(e) => handleUserInput(e)}
            />
            <InputRightElement>
              <Box
                onClick={() => handleNextClick(3, bill.BillIssuedDate)}
                boxSize={"30px"}
              >
                <span className="arrow" />
              </Box>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      ) : null}
      {vimata > 2 ? (
        <FormControl isInvalid={errorOnExpDate}>
          <FormLabel textAlign={"center"}>Expiration date? </FormLabel>
          <InputGroup>
            <Input
              isRequired
              type="date"
              id="billExpireDate"
              value={bill.BillExpDate}
              onKeyDown={handleEnter}
              onChange={(e) => handleUserInput(e)}
            />
            <InputRightElement>
              <Box
                onClick={() => handleNextClick(4, bill.BillExpDate)}
                boxSize={"30px"}
              >
                <span className="arrow" />
              </Box>
            </InputRightElement>
          </InputGroup>
          {errorOnExpDate && (
            <FormErrorMessage>
              Expiration date cant be earlier than issued date.
            </FormErrorMessage>
          )}
        </FormControl>
      ) : null}
      {vimata > 3 ? (
        <FormControl>
          <Button
            onClick={handleSubmit}
            isLoading={loading}
            loadingText="Submitting"
            type="submit"
          >
            {txtBtnSubmit}
          </Button>
        </FormControl>
      ) : null}
    </form>
  );
};

export default AddBillForm;
