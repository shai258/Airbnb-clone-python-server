import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MyMap = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.coordinates.lat, lng: props.coordinates.lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.coordinates.lat, lng: props.coordinates.lng }} />}
  </GoogleMap>
)

export default MyMap