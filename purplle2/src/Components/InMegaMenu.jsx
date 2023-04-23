import { Box, Button, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

function InMegaMenu({text,boxbg="green"}) {
  return (
    <Box role={"group"}  >
          <Button>{text}</Button>
          {
//           <Grid templateColumns='repeat(3, 1fr)' bg="black" display={"none"} gap={6} _groupHover={{display:"block",position:"absolute",left:"0px",top:"101%",width:"100%"}} >
//   <GridItem  h='150' bg='blue.500' />
//   <GridItem  h='150' bg='blue.500' />
//   <GridItem  h='150' bg='blue.500' />
  
// </Grid>
  }
{
  <SimpleGrid h={"400px"} overflow="scroll" bg={"black"} display={"none"} columns={4} spacing={1} _groupHover={{display:"grid",position:"absolute",left:"15%",top:"101%",width:"70%"}} >
  <Box  bg={boxbg} height="500px"></Box>
  <Box  bg={boxbg} height="500px"></Box>
  <Box  bg={boxbg} height="500px"></Box>
  <Box  bg={boxbg} height="500px"></Box>

</SimpleGrid>
}
          </Box>
  )
}

export default InMegaMenu