import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import "./AddBillForm.css"

const AddBillForm = () => {

  const handleClick = () => {
    // Function to be executed when the span element is clicked
    console.log('Span element clicked');
    // Add your logic here
  };


  const handleEnter = (event) => {
    // Function to be executed when the enter key is pressed
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log('Enter key pressed');
      // Add your logic here
    }
  };
  return (
    <form>
      <FormControl>
        <FormLabel textAlign={"center"}>NAME OF BILL </FormLabel>
        <InputGroup>
          <Input type="text" onKeyDown={handleEnter} />
          <InputRightElement>
            <Box onClick={handleClick} boxSize={"30px"}><span className="arrow"/></Box>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default AddBillForm;
