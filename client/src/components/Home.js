/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

import Reviews from './Reviews'
import Neighborhood from './Neighborhood'
import Booking from './Booking'
import SimilarListings from './SimilarListing'
import Amenity from './Amenity'

import HomeContext from '../Home.context'

const Home = (props) => {
  if (!props.home && props.location.pathname !== '/home') return ( 
    <HomeContext.Consumer>
      {({getHome}) => (
        getHome({id: props.location.pathname.slice(6)})
      )}
    </HomeContext.Consumer>
  )
  if (!props.home) return <Container>Loading...</Container>
  const { imgUrl, type, title, address, theSpace, amenities, reviews, similarHomes } = props.home
  return (
    <Container>
      <Hero src={imgUrl} alt={'home image'}/>
      <InnerContainer>
      <Details>
        <Head css={spacing}>
          <RoomType>{type}</RoomType>
          <Title>{title}</Title>
          <Area>{address.street}</Area>
        </Head>
        <Description css={spacing}>
          {theSpace.description}
        </Description>
        <Anemities css={spacing}>
          <Subtitle>Amenities</Subtitle>
          <div css={amenitiesGrid}>
            {amenities.map((amenity) => <Amenity value={amenity}/>)}
          </div>
        </Anemities>
        <Reviews reviews={reviews} reviewCount={reviews.length} />
        <Neighborhood coordinates={{lat: address.lat, lng: address.lng}}/>
        {/* <SimilarListings similarHomes={similarHomes}/> */}
      </Details>
      <Booking reviews={reviews} {...props.home}/>
      </InnerContainer>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  color: #484848;
`
const InnerContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  margin: 1rem auto;
`
const Hero = styled.img`
  width: 100vw;
  height: 60vh;
`
const Details = styled.div`
  width: 45%;
  margin-right: 0;
`
const RoomType = styled.h5`
  text-transform: uppercase;
  font-weight: 500;
`
const Title = styled.h1`
  font-size: 2rem;
`
const Area = styled.p`
  text-transform: capitalize;
`
const Description = styled.p`
  line-height: 1.5;
`
const Head = styled.header` 
`
const Anemities = styled.div`
  color: #484848;
  font-size: 0.8rem;
`
const spacing = css`
  padding: 1rem 0;
  border-bottom: 1px solid grey;
`
const Subtitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1rem;
`
const amenitiesGrid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
  color: #CCCCCC;
  font-size: 1rem;
`