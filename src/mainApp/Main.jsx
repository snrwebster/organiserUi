import { Routes, Route } from "react-router-dom";
import Categories from "./categories/Categories";
import CategoryBills from "./categories/CategoryBills";
import Header from "./Header";

const Main = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/Bills" element={<CategoryBills />} />
    </Routes>
    </>
  );
};

export default Main;
