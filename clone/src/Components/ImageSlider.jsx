
import React from 'react'
import { ImageSlide } from 'react-chakra-slide-show';
 import { useMemo } from 'react';
import { Container } from '@chakra-ui/react';
function ImageSlider() {
   const image =useMemo(()=>[
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673943131_republic-day-header-web-1.gif",
   " https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674020691_web-banner.jpg",
   " https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673969538_lakme_mega-beauty-haul-2596x836-1.jpeg",
   " https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674047074_1298x418-5.gif",
   " https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674020691_web-banner.jpg",
   " https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673978743_face_compact_web_hp.jpg",
   " https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673969539_k-beauty-web-new-1.gif",
   " https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673969899_wands-of-hair-straightening_webhp-1.jpg"

   ],[])
    
    const caption = useMemo(()=>["","","","","","","",""],[])
  return (
    <Container>
    <ImageSlider images ={image} captions={caption}></ImageSlider>
    </Container>
  )
}

export default ImageSlider