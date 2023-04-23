
import React from 'react';
import { BsEmojiSmile } from "react-icons/bs";
import { FcGenericSortingDesc } from "react-icons/fc";
import { Button, Icon, Portal } from "@chakra-ui/react";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    ButtonGroup,
  } from '@chakra-ui/react'
function PopOver() {
  return (
    <Popover  trigger="hover">
  <PopoverTrigger>
  <Button colorScheme={"ghost"} p={"0px"} leftIcon={<BsEmojiSmile size={"30px"} />} rightIcon={<FcGenericSortingDesc size={"30px"} color='gray'/>}></Button>
  
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>Header</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        <Button colorScheme='blue'>Button</Button>
      </PopoverBody>
      <PopoverFooter>This is the footer</PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>
  )
}

export default PopOver