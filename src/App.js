import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Home from "./Home.jsx";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "55vh",
        fontSize: "3vw",
        color: "white",
        textShadow: "1px 1px 2px black",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}

export default App;
