import { Box } from "@mui/material";
import React from "react";
import CurrentDeals from "../Components/CurrentDeals";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NewlyAddedDeals from "../Components/NewlyAddedDeals";
import ServicesForYou from "../Components/ServicesForYou";
import Slider from "../Components/Slider";
import dummyData from "../dummyData.json";

const Dashboard = () => {
  return (
    <Box sx={{ width: "1425px", margin: '0 auto' }}>
      <Header />
      <Slider />
      <CurrentDeals data={dummyData} />
      <NewlyAddedDeals data={dummyData} />
      <ServicesForYou />
      <Footer />
    </Box>
  );
};

export default Dashboard;
