import { Box, Button, HStack } from '@chakra-ui/react';
import React from 'react'
import style from "../Style/MegaMenu.module.css";
import InMegaMenu from './InMegaMenu';

function MegaMenuItemBox({text="Shop Category"}) {
    let array={
        "shop categories":["Skin Care","Make Up","Hair Care","Appliances","personal Care","Men","Fragrance","Health and Wellness","Mom and Baby"],
    "brand":[""],
    "offers":[],
    "new":[],
    "splurge":[],
    "magazine":[],
    "elite offers":[]
    }
        

    
  return (
    <Box marginX={"2%"}  className={style.MegaMenuItemBox}>
    <Button
    className={style.ctgryBtn}
    // pos={"relative"}
    textTransform={"uppercase"}
    fontWeight="bold"
    fontSize={{ base: "10px", md: "15px" }}
    variant={"unstyled"}
    size={"sm"}
  >
    {text}
  </Button>
  <HStack className={style.megamenuitemBoxChild} display="none" padding={"0.5%"} >
   <InMegaMenu text={"Skin Care"} />
   <InMegaMenu text={"Make up"} boxbg="pink" />
   <InMegaMenu text={"Hair Care"} boxbg="pink" />
   <InMegaMenu text={"Appliances"} boxbg="pink" />
   <InMegaMenu text={"personal Care"} boxbg="pink" />
   <InMegaMenu text={"Men"} boxbg="pink" />
   <InMegaMenu text={"Fragrance"} boxbg="pink" />
   <InMegaMenu text={"Health and Wellness"} boxbg="pink" />
   <InMegaMenu text={"Mom and Baby"} boxbg="pink" />

  </HStack>
    </Box>
  )
}

export default MegaMenuItemBox