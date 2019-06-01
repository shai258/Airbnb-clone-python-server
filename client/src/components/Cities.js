/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import HomePageCard from './HomePageCard'

import HomeContext from '../Home.context'

const Cities = () => {
  return (
    <CityWrapper>
      <CitiesHeader>Explore our cities</CitiesHeader>
      <HomeContext.Consumer>
        {({favoriteCities}) => (
          <CardWrapper>
            {favoriteCities.map((city, index) => {
              return <HomePageCard city={city} key={index} />
            })}
          </CardWrapper>
        )}
      </HomeContext.Consumer>
      <Move css={moveLeft}><i class="fas fa-chevron-left"></i></Move>
      <Move css={moveRight}><i class="fas fa-chevron-right"></i></Move>
    </CityWrapper>
  )
}

export default Cities

const CityWrapper = styled.div`
  margin-left: 24.5%;
  color: rgb(72, 72, 72);
  position: relative;
`
const CitiesHeader = styled.h2`
  font-size: 1.5rem;
  
`
const CardWrapper = styled.div`
  display: flex;
`
const Move = styled.button`
  font-size: 1.7rem;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: rgb(72, 72, 72);
  background: rgb(255, 255, 255);
  border: none;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px;
  cursor: pointer;
`
const moveLeft = css`
  position: absolute;
  top: 48%;
  left: -1.3rem;
`
const moveRight = css`
  position: absolute;
  top: 48%;
  left: 70%;
`