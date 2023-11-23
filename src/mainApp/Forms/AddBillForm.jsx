import { FormControl, FormLabel, Input } from "@chakra-ui/react"


const AddBillForm = () => {

  return (
    <form>
        <FormControl>
            <FormLabel>NAME OF BILL </FormLabel>
            <Input type="text" />
        </FormControl>
    </form>
  )
}

export default AddBillForm