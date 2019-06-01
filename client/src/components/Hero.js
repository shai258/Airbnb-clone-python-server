import React  from 'react'

import styled from '@emotion/styled'

import SearchBarHome from './SearchBarHome'

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroImg src="https://media.cntraveler.com/photos/57a2278b29716cb04b9387ac/master/pass/torres-del-paine-national-park-GettyImages-548748529.jpg"></HeroImg>
      <HeroTitle>Plan your next trip</HeroTitle>
      <SearchBarHome/>
    </HeroWrapper>
  )
}

export default Hero

const HeroWrapper = styled.div`
  height:90.5vh;
`
const HeroImg = styled.img`
  position: absolute;
  top:0;
  z-index: -1;
  height: 100%;
  width: 100vw;
`
const HeroTitle = styled.h1`
  font-size: 3rem;
  color: white;
  text-shadow: 0 6px 32px #484848;
  text-align: center;
  margin-top: 3%;
  margin-right: 40%;
`