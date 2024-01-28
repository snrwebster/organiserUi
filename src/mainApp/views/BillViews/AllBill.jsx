import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import "@inovua/reactdatagrid-community/theme/blue-dark.css";
import React, { useCallback, useEffect, useState } from "react";
import apiReqHandler from "../../../helpers/apiRequest";
import {
  Button,
  ButtonGroup,
  Collapse,
  Grid,
  useDisclosure,
} from "@chakra-ui/react";
import CustomModal from "../../../components/CustomModal";

const AllBill = ({ setIsLoading }) => {
  const userEmail = JSON.parse(localStorage.getItem("User")).email;
  const [dataTable, setDataTable] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isOpenCol, setIsOpenCol] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [content, setContent] = useState(null);

  const GetBills = () => {
    try {
      const api = "https://localhost:7111/SnrOrgApi/Bills/";
      const endpoint = "GetAllBills/";

      apiReqHandler(api, endpoint, userEmail, "POST")
        .then(setIsLoading(true))
        .then((response) => {
          if (response.length > 0) {
            let ExpDataTable = [];
            response.forEach((item) => {
              let dataSource = {
                id: item.ID,
                billName: item.BillName,
                billValue: item.BillValue,
                billIssuedDate: item.BillIssueDate,
                billExpDate: item.BillExpDate,
              };

              ExpDataTable.push(dataSource);
              setDataTable(ExpDataTable);
            });
          } else {
          }
        })
        .then(setIsLoading(false));
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    GetBills();
  }, []);
  const handleRowClick = (e) => {
    selected === e.data.id ? setIsOpenCol((prev) => !prev) : null;
  };

  const onSelectionChange = useCallback(({ selected }) => {
    setSelected(selected);
  }, []);
  const handleParPay = () => {
    onOpen();
    setContent(
      <>
        <Button>test</Button>
      </>
    );
  };
  const columns = [
    { name: "billName", header: "Bill name", defaultFlex: 1 },
    { name: "billValue", header: "Bill value", defaultFlex: 1 },
    { name: "billIssuedDate", header: "Bill issued date", defaultFlex: 1 },
    { name: "billExpDate", header: "Bill Expiration date", defaultFlex: 1 },
  ];
  return (
    <Grid>
      <ReactDataGrid
        enableSelection
        onSelectionChange={onSelectionChange}
        pagination
        theme="blue-dark"
        onRowClick={(e) => handleRowClick(e)}
        style={{ minHeight: "50vh", height: "70vh" }}
        columns={columns}
        dataSource={dataTable}
      />
      <Collapse in={isOpenCol}>
        <Button onClick={handleParPay}>Feed Them</Button>
        <Button onClick={handleParPay}>Unload the Burden</Button>
        <Button>Edit</Button>
        <CustomModal isOpen={isOpen} onClose={onClose} content={content} />
      </Collapse>
    </Grid>
  );
};

export default AllBill;
