/*
 <!-- <Button className={style.ctgryBtn} pos={"relative"} textTransform={"uppercase"} fontWeight="bold" fontSize={{base:"25px",md:"20px"}} variant={"unstyled"}  size={"sm"}>Cancel</Button>
      <Button className={style.ctgryBtn} pos={"relative"} textTransform={"uppercase"} fontWeight="bold" fontSize={{base:"25px",md:"20px"}} variant={"unstyled"}  size={"sm"}>Cancel</Button>
      <Button className={style.ctgryBtn} pos={"relative"} textTransform={"uppercase"} fontWeight="bold" fontSize={{base:"25px",md:"20px"}} variant={"unstyled"}  size={"sm"}>Cancel</Button>
      <Button className={style.ctgryBtn} pos={"relative"} textTransform={"uppercase"} fontWeight="bold" fontSize={{base:"25px",md:"20px"}} variant={"unstyled"}  size={"sm"}>Cancel</Button>
        <Button className={style.ctgryBtn} pos={"relative"} textTransform={"uppercase"} fontWeight="bold" fontSize={{base:"25px",md:"20px"}} variant={"unstyled"}  size={"sm"}>Cancel</Button>
        <Button className={style.ctgryBtn} pos={"relative"} textTransform={"uppercase"} fontWeight="bold" fontSize={{base:"25px",md:"20px"}} variant={"unstyled"}  size={"sm"}>Cancel</Button> -->


        ------------------------

        <Box onMouseOver={handleSimpleGrid} >
          <Button>Make UP</Button>
          <SimpleGrid id="simpleGrid" bg={"white"} display={"none"} columns={3} spacing={10}  >
  <Box bg="tomato" height="400px"></Box>
  <Box bg="tomato" height="400px"></Box>
  <Box bg="tomato" height="400px"></Box>
</SimpleGrid>
          </Box>


 <Box>
          <Button>Skin Care</Button>
  <SimpleGrid bg={"blue"} display={"none"} columns={3} spacing={10} >
  <Box bg="green" height="400px"></Box>
  <Box bg="green" height="400px"></Box>
  <Box bg="green" height="400px"></Box>
</SimpleGrid>
          </Box>





<Box border={"1px solid black"}  className={style.megamenuitemBox} >
          <Button
            className={style.ctgryBtn}
            pos={"relative"}
            textTransform={"uppercase"}
            fontWeight="bold"
            fontSize={{ base: "10px", md: "15px" }}
            variant={"unstyled"}
            size={"sm"}
          >
            Shop Category
          </Button>
          <HStack
            className={style.megamenuitemBoxChild}
            display={"none"}
            padding="0.5%"
            // _groupHover={{
            //   display: "flex",
            //   justifyContent: "space-around",
            //   alignItems: "center",
            //   alignContent: "center",
            //   position: "absolute",
            //   width: "100%",
            //   //  height: "100px",
            //   top: "101%",
            //   left: "0px",
            //   backgroundColor: "red",
            // }}
          >
          <InMegaMenu text={"Skin Care"}/>
          <InMegaMenu text ="Make Up" boxbg="yellow"/>
            {
              //--
            }
          </HStack>
        </Box>
*/