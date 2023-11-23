import { Routes, Route } from "react-router-dom";
import Categories from "./categories/Categories";
import CategoryBills from "./categories/CategoryBills";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/Bills" element={<CategoryBills />} />
    </Routes>
  );
};

export default Main;
