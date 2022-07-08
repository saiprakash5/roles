import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import {Signin} from './components/signin'
import {SimpleAccordion} from './components/accordion'
function App() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router>
              <Header />
              
              <Routes>
              <Route path="/" element={<Signin />} />
       </Routes>
       </Router>
      </div>
      <React.Fragment>
          {isMatch ? <SimpleAccordion /> : <Footer />}
        </React.Fragment>
    </div>
  );
}

export default App;
