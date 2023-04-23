import {
  Box,
  Stack,
  Flex,
  Spacer,
  Container,
  HStack,
  Input,
  Button,
  ButtonGroup,
  IconButton,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  AvatarGroup,
  Avatar,
  InputLeftAddon,
  SimpleGrid,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Center, Square, Circle } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "../Style/MegaMenu.module.css";
import { Icon } from "@chakra-ui/react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { FcGenericSortingDesc } from "react-icons/fc";
import { GrBasket } from "react-icons/gr";
import { Image } from "@chakra-ui/react";
import PopOver from "./PopOver";
import InMegaMenu from "./InMegaMenu";
import MegaMenuItemBox from "./MegaMenuItemBox";
export const MegaMenu = () => {
  const [state, setState] = useState(1);
  function handleSimpleGrid() {
    const simpleGrid = document.getElementById("simpleGrid");
    simpleGrid.style.display = "block";
    simpleGrid.style.position = "absolute";
    simpleGrid.style.left = "0px";
    simpleGrid.style.top = "101%";
    simpleGrid.style.width = "100%";
    simpleGrid.style.height = "200px";
    simpleGrid.style.backgroundColor = "red";
  }
  function handleClick() {
    let element = document.getElementById("one");
    element.firstChild.style.display = "block";
    element.setAttribute("class", style.expandSearchBar);
  }
  function handleCancel() {
    let element = document.getElementById("one");
    // element.firstChild.classList.remove(style.cancel)
    element.firstChild.style.display = "none";
    element.removeAttribute("class", style.expandSearchBar);
    if (window.scrollY > 10) {
      element.setAttribute("class", style.searchBar2);
    }
  }
  function handleFocus() {
    let element = document.getElementById("one");
    element.firstChild.style.display = "block";
    //element.firstChild.classList.add(style.cancel)
    element.setAttribute("class", style.expandSearchBar);
    let children = document.querySelector("input");
    children.focus();
  }
  function hadnleScroll() {
    let searchBar = document.querySelector("#one");
    let searchIcon = document.getElementById("srcicon");
    const element = document.getElementById("three");

    // let megamenuitem = document.querySelector("#two");
    if (window.scrollY >= 10) {
      // searchBar.classList.add(style.searchBar2)

      //  searchBar.classList.remove(style.searchBar)
      // searchBar.className= style.searchBar2;
      // megamenuitem.classList.remove(`${style.megamenuitem}`);
      // megamenuitem.className= "";
      // megamenuitem.removeAttribute("class",style.megamenuitem)
      //  const element = document.getElementById("three");
      // const attr = element.getAttributeNode("class");
      // element.removeAttributeNode(attr);
      element.removeAttribute("class", style.megamenuitem);
      // element.style.width="50%"
      // searchBar.setAttribute("class", style.searchBar2);
      searchIcon.classList.add(style.ToggleSearchIcon);

      // searchBar.className= style.searchBar2;
      // searchBar.style.opacity="0";
      // searchBar.style.visibility="hidden";
    } else {
      //  searchBar.classList.add(style.searchBar)
      // searchBar.classList.remove(style.searchBar2)
      // searchBar.className= " ";
      //  searchBar.classList.add(style.searchBar2)
      //  searchBar.removeAttribute("class", style.searchBar2);

      // searchBar.className= style.searchBar;
      // megamenuitem.setAttribute("class",style.megamenuitem)
      //  const attr = document.createAttribute("class");
      //  attr.value = style.megamenuitem;
      //  const element= document.getElementById("three");
      //  element.setAttributeNode(attr);
      // element.style.width=""

      element.setAttribute("class",style.megamenuitem);
      // textField.classList.remove(style.ToggleSearchIcon)
      searchIcon.classList.remove(style.ToggleSearchIcon);

      // element.setAttribute("class",style.megamenuitem)
      // megamenuitem.classList.add(`${style.megamenuitem}`);
      // searchBar.style.opacity="1";
      // searchBar.style.visibility="visible";
    }
    handleCancel();
  }
  useEffect(() => {
    //  const element = document.getElementById("three");
    //  element.classList.add(style.thre);
    window.addEventListener("scroll", () => {
      hadnleScroll();
    });
    return () => {
      window.removeEventListener("scroll", hadnleScroll);
    };
  }, []);
  return (
    <HStack
      p={"1%"}
      
      className={style.megamenu}
      justify="space-between"
      alignItems={"center"}
      alignContent="center"
      boxShadow="sm"
      rounded="md"
      bg="white"
    >
      <HStack
        id="one"
        style={{
          transitionProperty: "width height top",
          transitionDuration: "10s 10s 15s",
        }}
      >
        <IconButton
          onClick={handleCancel}
          position="absolute"
          top="0px"
          right="2%"
          display={"none"}
          // colorScheme='blue'
          // aria-label='Search database'
          icon={<CloseIcon color={"black"} size="35px" />}
        />{" "}
        {
          // <Button  onClick={handleCancel} position={"absolute"} top="0px" right={"0px"} display="none" >Cancel</Button>
        }
        <InputGroup
          position={"relative"}

          // borderBottom={"1px solid blue"}
        >
          <Input
            role={"group"}
            id="textField"
            _placeholder={{ color: "inherit" }}
            variant={"flushed"}
            borderRadius={"0px"}
            onFocus={handleFocus}
            border="hidden"
            borderBottom="2px solid blue"
            focusBorderColor="red.400"
            placeholder="enter"
          ></Input>
          <InputRightElement
            color={"inherit"}
            onClick={handleFocus}
            children={<CiSearch color="inherit" size={"35px"} />}
          ></InputRightElement>
        </InputGroup>
      </HStack>
      <AvatarGroup spacing="1rem">
        <Avatar
          borderRadius={"none"}
          h="45px"
          w="80px"
          src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg"
        />
        <Avatar
          borderRadius={"none"}
          h="65px"
          w="80px"
          src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1537798844_try-logo-3x.png"
        />
      </AvatarGroup>
      <HStack 
        className={`${style.megamenuitem}`} 
        id={"three"}
        // display="flex"
        // justify="space-around"
        // alignItems={"center"}
        // alignContent="center"
        // spacing="5"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          alignItems: "center",
          // boxShadow: "md",
          // rounded: "sm",
          // bg: "white",
        }}
      >
        
        <MegaMenuItemBox text="shop categories"/>
        <MegaMenuItemBox text="brand"/>
        <MegaMenuItemBox text="offers"/>
        <MegaMenuItemBox text="new"/>
        <MegaMenuItemBox text="splurge"/>
        <MegaMenuItemBox text="magazine"/>
        <MegaMenuItemBox text="elite offers"/>

      </HStack>
      <Square onClick={handleClick} id="srcicon" display={"none"}>
        <CiSearch size={"35px"} color="black" />
      </Square>
      <Box as={HStack}>
        <Icon as={CiHeart} boxSize={{ base: 8, md: 10 }} />
        <PopOver />
        <Icon as={GrBasket} color="black" boxSize={{ base: 8, md: 10 }} />
      </Box>
    </HStack>
  );
};
