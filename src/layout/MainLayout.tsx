import React from "react";
import Navbar from "../components/Navbar";  // Import Navbar
import { Container } from "@mui/material";

interface MainLayoutProps {
  children: React.ReactNode; // Define the type of the children prop
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />  {/* Navbar component */}
      <Container>
        <main>{children}</main> {/* Main content area */}
      </Container>
    </div>
  );
};

export default MainLayout;
