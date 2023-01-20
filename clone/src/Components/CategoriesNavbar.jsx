import { Box, Button, ButtonGroup, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

function CategoriesNavbar() {
  return (
    <Flex alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
      <ButtonGroup>
        
        <Button>Shop Categories</Button>
        <Spacer />

        <Button>BRANDS</Button>
        <Spacer />

        <Button>OFFERS</Button>
        <Spacer />

        <Button>NEW</Button>
        <Spacer />

        <Button>SPLURGE</Button>
        <Spacer />

        <Button>MAGAZINE</Button>
        <Spacer />

        <Button>ELITE OFFERS</Button>
      </ButtonGroup>
    </Flex>
  );
}

export default CategoriesNavbar;
