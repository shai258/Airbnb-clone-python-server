import React, {Component} from 'react'
import styled from '@emotion/styled'

class Footer extends Component {
  state = {
    isFooterVisible: false
  }

  handleFooter = () => {
    this.setState({
      isFooterVisible: !this.state.isFooterVisible
    })  
  }

  render() {
  const {isFooterVisible} = this.state
  return (
    <div>
      <FooterWrapper isFooterVisible={isFooterVisible}>
      <FooterContent>
      <FooterHeaders>Airbnb</FooterHeaders>
      <FooterHeaders>Discover</FooterHeaders>
      <FooterHeaders>Hosting</FooterHeaders>
      <FooterHeaders>Icons</FooterHeaders>
      </FooterContent>
      <FooterBottom>
      <AirbnbIcon viewBox="0 0 1000 1000" 
          role="presentation" 
          aria-hidden="true" 
          focusable="false">
          <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
        </AirbnbIcon>
      <CopyRights>© Airbnb, Inc.</CopyRights>
      <FooterButtons>
      <Buttons>English</Buttons>
      <Buttons>ILS - ₪</Buttons>
      </FooterButtons>
      </FooterBottom>
      </FooterWrapper>
      <FooterDisplayerOff isFooterVisible={isFooterVisible} onClick={this.handleFooter}><i className="fas fa-microphone-alt"></i><FooterDisplayContent>Terms, Privacy, Currency and More</FooterDisplayContent></FooterDisplayerOff>
      <FooterDisplayerOn isFooterVisible={isFooterVisible} onClick={this.handleFooter}><CloseIcon className="fas fa-times"></CloseIcon><FooterDisplayContent>Close</FooterDisplayContent></FooterDisplayerOn>
    </div>
    )
  } 
}

export default Footer

const AirbnbIcon = styled.svg`
  height: 1.3rem;
  width: 1.3rem;
  display: block;
  margin-right: 10px;
  fill: currentColor;
`
const FooterWrapper = styled.div`
  display: ${props=> props.isFooterVisible ? 'block' : 'none'};
  position: fixed;
  bottom: 0;
  right: 0;
  background: white;
  border-top: 1px solid lightgray;
  padding-left: 24.5%;
  padding-top: 2%;
  margin-top: 3%; 
  width: 100%;
`
const FooterContent = styled.div`
  display: flex;
  align-items: center;
`
const FooterHeaders = styled.h5`
  margin-right: 13rem;
  rgb(72, 72, 72) !important;
`
const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: rgb(118, 118, 118);
  font-size: 0.8rem;
  border-top: 1px solid lightgray;
  padding-top: 0.5rem;
  font-weight: 600;
  margin-top: 2%;
  margin-bottom: 2.5%;
  align-items: center;
  width: 70%;
`
const CopyRights = styled.div`
`
const FooterButtons = styled.div` 
  margin-left: 70%;
`
const Buttons = styled.button`
  padding: 8px 12px;
  margin: 0.4rem;
  text-align: center;
  background: white;
  border: 1px solid rgb(242, 242, 242);
  color: rgb(118, 118, 118);
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: rgb(242, 242, 242);
  }
`
const FooterDisplayerOff = styled.button`
  display: ${props=> props.isFooterVisible ? 'none' : 'block'};
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0.7rem 1.7rem;
  font-size: 0.85rem;
  font-weight: 600;
  background: white;
  color: #484848;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  cursor: pointer;
`
const FooterDisplayerOn = styled.button`
  display: ${props=> props.isFooterVisible ? 'block' : 'none'};
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0.7rem 1.7rem;
  font-size: 0.85rem;
  font-weight: 600;
  background: white;
  color: #484848;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  cursor: pointer;
`
const FooterDisplayContent = styled.span`
  margin-left: 0.5rem;
  text-align: center;
`
const CloseIcon = styled.i`
  font-size: 14px;
`