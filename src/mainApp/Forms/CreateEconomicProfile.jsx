import {
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import './CreateEconomicProfile.css'

const CreateEconomicProfile = () => {
  const [employee, setEmployee] = useState('');
  const [salary, setSalary] = useState('');

  const handleEmployeeChange = (event) => {
    console.log(event)
    setEmployee(event);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };
  return (
    <form>
      <div className="form-container">
        <div className={`form-slide ${employee === "" ? "active" : ""}`}>
          <FormControl>
            <FormLabel>Employee?</FormLabel>
            <RadioGroup onChange={(e)=>handleEmployeeChange(e)} value={employee}>
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="2">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        </div>
        <div className={`form-slide ${employee === "1" ? "active" : ""}`}>
          <FormControl>
            <FormLabel>Monthly salary:</FormLabel>
            <Input type="text" />
          </FormControl>
        </div>
      </div>
    </form>
  );
};

export default CreateEconomicProfile;
