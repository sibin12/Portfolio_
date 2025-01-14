import React from "react";
import MainLayout from "../layout/MainLayout";  // Use layout

const Home: React.FC = () => {
  return (
    <MainLayout>
      <h1>Welcome to My Website!</h1>
      <p>This is the home page.</p>
    </MainLayout>
  );
};

export default Home;
