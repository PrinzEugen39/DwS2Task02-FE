import Navbar from "../components/PizzaNavbar";
import Sidebar from "../components/PizzaSidebar";
import Pizza from "./Food/1-FoodsList";

import { Grid, GridItem } from "@chakra-ui/react";

import { FoodsProvider } from "../features/Food/FoodContext";

export default function PizzaLayout() {
  return (
    <FoodsProvider>
      <Grid templateColumns="repeat(9,1fr)" bg="orange.100">
        <GridItem
          as="aside"
          colSpan={{ base: 9, md: 3, xl: 2 }}
          bg="whatsapp.50"
          borderLeft="12px solid"
          borderColor="whatsapp.500"
          minHeight={{ lg: "100vh" }}
          p={{ base: "16px", lg: "30px" }}
        >
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          colSpan={{ base: 9, md: 6, xl: 7 }}
          minHeight="100vh"
          p="2rem"
        >
          <Navbar />
          <Pizza />
        </GridItem>
      </Grid>
    </FoodsProvider>
  );
}
