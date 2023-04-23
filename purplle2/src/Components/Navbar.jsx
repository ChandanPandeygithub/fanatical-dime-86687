
import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={4}>
  <GridItem   display={"block"} colSpan={1} h='10' bg='tomato' />
  <GridItem colSpan={1} h='10' bg='gray' />

  <GridItem colSpan={1} colEnd={6} h='10' bg='tomato' />

</Grid>
//     <SimpleGrid columns={3} spacing='40px'>
//   <Box bg='tomato' w={"60%"} height='80px'></Box>
//   <Box bg='tomato'  w={"100%"} height='80px'></Box>
//   <Box bg='tomato'  w={"50%"} height='80px'></Box>
  
// </SimpleGrid>
//     <Grid templateColumns='repeat(3,1fr)' gap={6}>
    
//     <Box w='50%' h='10' bg='blue.500' />
//     <Box w='100%' h='10' bg='blue.500' />
//     <Box w='50%' h='10' bg='blue.500' />

//   </Grid>
  )
}
