import {Component} from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import Card from './Card'
import Footer from './Footer'

import HomeContext from '../Home.context';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeType: null,
      checkin: null,
      checkout: null,
      guests: null,   
      price: null    
    }
  }

  render() {
    return (
      <div>
        <ul css={filterBar}>
          <li css={link}>Dates</li>
          {/* <input type="date" placeholder="start-date"/> */}
          {/* <input type="date" placeholder="end-date"/> */}
          <li css={link}>Guests</li>
          {/* <input type="number" max="10"/> */}
          <li css={link}>Home type</li>
          {/* <input type="text"/> */}
          <li css={link}>Price</li>
          {/* <input type="number"/> */}
        </ul>
        <HomeContext.Consumer>
          {({homes}) => (
            <div css={cardsContainer}>
              {homes.map((home, index) => {
                return <Card {...home} key={index} />
              })}
            </div>
          )}
        </HomeContext.Consumer>
        <Footer/>
      </div>
    )
  }
}

export default Search

const filterBar = css `
  margin-bottom: 15px;
  color: #484848;
  border-bottom: 1px solid rgb(235, 235, 235);
  border-top: 1px solid rgb(235, 235, 235);
  padding: 17px 70px;
`
const link = css `
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  margin-right: 13px;
  border: 1px solid rgb(242, 242, 242);
  border-radius: 5px;
  padding: 5px 10px;
  &:hover {
    background: #F2F2F2;
  }
`
const cardsContainer = css `
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  padding: 20px 70px;
`