import { Component } from 'react'

// import SignUp from '../SignUp'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

import HomeContext from '../Home.context'

class Booking extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isValidBooking: undefined,
      checkin: undefined,
      checkout: undefined,
    }
  }

  onDateChange = ({ name, value}) => {
    this.setState({
      [name]: value
    })
  }

  handleGuestsChange = ({ name, value }) => {
    this.setState({
      [name] : value
    })
  }

  handleBookingClick = async ({$oid}, { checkin, checkout}) => {
    const isValidBooking = this.validateBooking(checkin, checkout) 

    if(isValidBooking) {
      const is_occupied = await this.confirmBooking($oid, checkin, checkout)
      is_occupied.is_occupied ? alert('Unsuccessful Booking') : alert('successful Booking')
    }
  }

  validateBooking = ( checkin, checkout ) => {
    if ( !(checkin && checkout) || new Date(checkin) < new Date() ) {
      return false
    }
    return new Date(checkin) < new Date(checkout)
  }

  confirmBooking = async (id, checkin, checkout) => {
    try {
      return await fetch(`/homes/booking/${id}/?checkin=${checkin}&checkout=${checkout}`, {
        method: 'GET'
      }).then(data => data.json())
    } catch(err) {
      console.log('ERROR Confirm Booking', err)
    }
  }

  render() {

    const { reviews, price } = this.props

    const rating = (() => {
      let counter = 0
      reviews.forEach(review => {
        counter += review.rating
      })
      const rating = counter / reviews.length
      return rating
    })()

    let days = 0
    if (this.state.checkout&&this.state.checkin) days = (new Date(this.state.checkout)-new Date(this.state.checkin))/86400000
    if (days < 0) days = 0

    return (
      <Container>
        <Section>
          <BookingHeader>
            <Title>&#8362;{price}&nbsp;<small>per night</small></Title>
            <SubtitleWrapper>
              <Subtitle>
                <Stars 
                  rating={rating}/><small>&nbsp;{reviews.length}</small></Subtitle>
            </SubtitleWrapper>
          </BookingHeader>
          <DateSection>
            <SectionTitle>Dates</SectionTitle>
            <InputWrapper>
              <DateInput 
                inputValue={this.state.checkin} 
                name="checkin" 
                onChange={e => this.onDateChange(e.target)} 
                placeholder='checkin' 
                type='date'
              />
              <span><i class="fas fa-arrow-right"></i></span>
              <DateInput 
                inputValue={this.state.checkin} 
                name="checkout" onChange={e => this.onDateChange(e.target)} 
                placeholder='checkout' 
                type='date'
              />
            </InputWrapper>
          </DateSection>
          <PriceWrapper>
            <p>&#8362; {price} x {days} nights</p>
          </PriceWrapper>
        </Section>
        <Section>
          <TotalWrapper>
            <PriceWrapper>
              <p>Total</p>
              <p>&#8362;{price * days}</p>
            </PriceWrapper>
                <Button onClick={() => {
                  this.handleBookingClick(this.props._id,this.state)
                }}>Request to Book</Button>
          </TotalWrapper>
        </Section>
      </Container>
    ) 
  }
}


const Stars = ({rating}) => {
  return (
    new Array(Math.round(rating)).fill(<span css={star}><i class="fas fa-star"></i></span>).map(item => {return item})
    )
}
Booking.contextType = HomeContext

export default Booking

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  text-align: center;
  border-radius: 5px;
  background-color: #FF5A5F;
  border: none;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:active {
    background-color: rgb(223, 60, 71);
  }
`

const Container = styled.div`
  margin: 1rem 0;
  width: 377px;
  height: 600px;
  padding: 0 48px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid #EBEBEB;
  position: sticky;
  top: 1rem;
`

const Section = styled.div``
const DateSection = styled.div``

const BookingHeader = styled.header`
  margin: 24px 0;
`

const Title = styled.h3`
  font-size: 1.5rem;
  display: inline;
`

const SubtitleWrapper = styled.div`
  margin: 0.5rem 0;
  border-bottom: 1px solid #EBEBEB;
`

const Subtitle = styled.small`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`

const SectionTitle = styled.small`
  display: block;
  margin: 1rem 0 0.5rem;
  font-size: 0.7rem;
`

const star = css`
  color: #008489;
  font-size: 0.5rem;
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #EBEBEB;
`

const DateInput = styled.input`
  line-height: 3;
  padding-left: 0.5rem;
  border: ${props => props.inputValue === '' ? '1px solid red' : 'none'};
`

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #EBEBEB;
  font-weight: 500;
`

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  flex-direction: column;
`