import React from "react";
import Color from "../assets/Color.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Cards from "../Components/Tabs/Cards"
const Services = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="p-5">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:p-5 shadow-lg rounded-lg md:m-5">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">Welcome to Ahpamed Prints</h1>
          <p className="text-lg text-gray-700">
            Whether you're looking to elevate your brand with stunning{" "}
            <strong className="font-semibold">transparent business cards</strong>,
            create eye-catching marketing materials, or bring your creative visions
            to life, we’ve got you covered. With state-of-the-art technology,
            premium materials, and a commitment to quality, Ahpamed Prints
            delivers exceptional results tailored to your needs. Explore our wide
            range of printing services and discover how we can help you make a
            lasting impression. Your vision, our expertise—let’s create something
            extraordinary together.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={Color}
            alt="Ahpamed Prints Transparent Business Cards"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Tab Section */}
      <Box sx={{ maxWidth: { lg: 1500, xs: 320, sm: 480 }, bgcolor: "background.paper", p: 2 }}>
        <TabContext value={value}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              <Tab label="Business cards" value={0} />
              <Tab label="Item Two" value={1} />
              <Tab label="Item Three" value={2} />
              <Tab label="Item Four" value={3} />
              <Tab label="Item Five" value={4} />
              <Tab label="Item Six" value={5} />
              <Tab label="Item Seven" value={6} />
            </Tabs>
          </Box>

          {/* Tab Panels */}
          <TabPanel value={0}>
           <Cards/>
          </TabPanel>
          <TabPanel value={1}>Item Two</TabPanel>
          <TabPanel value={2}>Item Three</TabPanel>
          <TabPanel value={3}>Item Four</TabPanel>
          <TabPanel value={4}>Item Five</TabPanel>
          <TabPanel value={5}>Item Six</TabPanel>
          <TabPanel value={6}>Item Seven</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Services;
