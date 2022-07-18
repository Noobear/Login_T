import React from "react";
import "./index.css";
import Home from "./Home";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import {BrowserRouter, Routes, Route} from "react-router-dom";


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       fsoftwareengineer, {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;