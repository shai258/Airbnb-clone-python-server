/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

import MyMap from './MyMap'

const Neighborhood = (props) => {
  return(
    <Container>
      <Title>The neighborhood</Title>
      <Description>
        <p css={intro}>Hideout’s home is located in Selat, Bali, Indonesia.</p>
        <p>Hideout is in walking distance from a resort where you can have a lovely dinner in the restaurant with unforgettable view to Gunung Agung. You can easily reach many traditional small shops / warung.</p>
      </Description>
      <MapContainer>
        <MyMap 
          isMarkerShown
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          coordinates={props.coordinates}
        />
      </MapContainer>
      <Disclaimer>{'Exact location information is provided after a booking is confirmed.'}</Disclaimer>
    </Container>
  )
}

export default Neighborhood

const Container = styled.div`
  margin-top: 3rem;
  border-bottom: 1px solid grey;
`
const Title = styled.h1`
  color: #484848;
  font-size: ;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`
const Description = styled.div`
  line-height: 1.3;
`

const intro = css`
  margin: 1rem 0;
`

const MapContainer  = styled.div`
  width: 100%;
  height: 50%;
  margin: 1rem 0;
`
const Disclaimer = styled.p``

// const map = css`
//   width: 100%;
// `