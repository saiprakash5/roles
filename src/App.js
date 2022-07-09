import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import {Signin, Api} from './components/signin'
import {SimpleAccordion} from './components/accordion'
import { Signup } from "./components/signup";
import {Teacher, Tapi} from './components/teacher'
import {Edit} from './components/edit'
import { Principle,Papi } from "./components/princilpe";
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
              <Route path="/api" element={<Api />}/>
              <Route path="/signup" element={<Signup />} />
              <Route path="/tapi" element={<Tapi />}/>
              <Route path="/papi" element={<Papi />}/>
              <Route path="/teacher" element={<Teacher />} />
              <Route path="/prin" element={<Principle />} />
              <Route path="/edit/:id" element={<Edit />} />
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
