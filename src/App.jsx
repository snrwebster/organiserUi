import Register from "./register/Register";
import RegistrationForm from "./register/registerForm/RegistrationForm";
import LoginForm from "./register/registerForm/loginForm/LoginForm";
import Main from "./mainApp/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}/>
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Main/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
