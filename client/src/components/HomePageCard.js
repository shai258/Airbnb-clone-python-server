import React from 'react'
import styled from '@emotion/styled'

import HomeContext from '../Home.context'

import {Link} from 'react-router-dom';


const HomePageCard = ( { city } ) => {
  return (
    <Link style={{ textDecoration: 'none', color: 'white' }} to='/search'><HomeContext.Consumer>
      {({getHomes}) => (
        <HomePageCardWrapper onClick={() => getHomes({location: city.city})} imgURL={city.imgUrl}>
          <CardInfo>
            <CardTitle>{city.city}</CardTitle>
            <CardPrice>₪{city.avgPrice}/night average</CardPrice>
          </CardInfo>
        </HomePageCardWrapper>
      )}
    </HomeContext.Consumer></Link>
  )
}


export default HomePageCard

const HomePageCardWrapper = styled.div`
  margin-top: 1rem;
  background: url(${props => props.imgURL});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 12rem;
  height: 14rem;
  margin-right: 1rem;
  cursor: pointer;
`
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80%;
  align-items: center;
  color: white;
  
`
const CardTitle = styled.h3`
  font-size: 1rem;
  
`
const CardPrice = styled.span`
  margin-top: 0.3rem;
  font-weight: 600;
  font-size: 0.9rem;
`