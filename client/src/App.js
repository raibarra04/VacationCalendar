import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
          <Route path="/search" exact element={<Search />} />
          <Route path="/results" exact element={<Results />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
