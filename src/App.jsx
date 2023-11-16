import Register  from "./register/Register";
import RegistrationForm from "./register/registerForm/RegistrationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
