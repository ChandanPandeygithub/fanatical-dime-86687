import {
  Avatar,
  border,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Hide,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Square,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2" borderBottom={"2px solid purple"}>
        <HStack>
          <Input size={{ base: "md", lg: "lg" }} border="hidden"></Input>
          <Square>
            <SearchIcon />
          </Square>
        </HStack>
      </Box>
      <Spacer />

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
        <HStack>
          <Square>
            <Image
              src="https://www.shareicon.net/data/128x128/2017/01/17/872801_favorite_512x512.png"
              boxSize={{ base: "md", lg: "10" }}
            />
          </Square>
          <Square>
            <Image
              src="https://www.shareicon.net/data/128x128/2016/07/10/119534_misc_512x512.png"
              boxSize={{ base: "md", lg: "10" }}
            />
          </Square>
        </HStack>
      </Box>

      <Box>
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar
              size={"sm"}
              src={
                "https://www.shareicon.net/data/128x128/2016/07/10/119534_misc_512x512.png"
              }
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuDivider />
            <MenuItem>Link 3</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

export default Navbar;
