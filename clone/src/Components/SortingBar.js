import { MdSort } from "react-icons/md";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

export default function SortingBar() {
  return (
    <Flex
      p={2}
      paddingLeft={10}
      gap="2"
      minWidth={"max-content"}
      justifyContent={"center"}
      alignItems={"center"}
      alignContent={"center"}
      bg={" 2px solid black"}
    >
      <Box>
        <HStack>
          <Image
            src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg"
            boxSize={{ base: "md", lg: "fit-content" }}
          />
          <Image
            src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1537798844_try-logo-3x.png"
            boxSize={{ base: "md", lg: "10" }}
          />
        </HStack>
      </Box>
      <Spacer />
      <Box>
      <Menu >
      <MenuButton as ={Button} leftIcon={<MdSort/>}>sort</MenuButton>
           <MenuList gap={10} width={"full"} border={"2px solid blue"} display={"flex"} >
            <MenuItem display={"flex"} flexDirection={"column"}>
            <MenuButton as ={Button}> action</MenuButton>
            <MenuList display="flex" flexDirection={"column"}>
            <menuItem>12</menuItem>
            </MenuList>
            </MenuItem>
          
           </MenuList>
           </Menu>
      </Box>
      <Spacer />
    </Flex>
  );
}
