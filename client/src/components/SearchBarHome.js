import { Component } from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  Link
} from 'react-router-dom';

import HomeContext from '../Home.context';

class SearchBar extends Component {
  state = {
    location: null,
    checkin: null,
    checkout: null,
    guests: 1
  }

  handleChange ({ name, value }) {
    this.setState ({[name]:value})
  }

  render() {
    const url=`/search/?location=${this.state.location}&checkin=${this.state.checkin}&checkout=${this.state.checkout}&guests=${this.state.guests}`
    return (
      <OutterSearchBarWrapper>
        <SearchBarWrapper>
          <SearchHeader css={locationSection}>
            <span>CITY, ADDRESS, LANDMARK</span>
            <SearchInput name='location' placeholder='Paris,France' onChange={e => this.handleChange(e.target)}/>
          </SearchHeader>
          <SearchHeader css={dateSection}>
            <span>CHECK IN</span>
            <SearchInput type="date" name='checkin' placeholder="mm/dd/yyyy" onChange={e => this.handleChange(e.target)}/>
          </SearchHeader>
          <SearchHeader css={dateSection}>
            <span>CHECK OUT</span>
            <SearchInput type="date" name='checkout' placeholder="mm/dd/yyyy" onChange={e => this.handleChange(e.target)}/>
          </SearchHeader>
          <SearchHeader css={guestSection}>
            <span>GUESTS</span>
            <SearchInput type="number" max="10" name='guests' placeholder="1 guest" onChange={e => this.handleChange(e.target)}/>
          </SearchHeader>          
        </SearchBarWrapper>
        <HomeContext.Consumer>
          {({getHomes}) => (
            <Link to={url}><SearchButton onClick={() => getHomes(this.state)}><i className="fas fa-search"></i></SearchButton></Link>
          )}
        </HomeContext.Consumer>
      </OutterSearchBarWrapper>
    )
  }
} 

export default SearchBar

const OutterSearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 52%;
  margin: 0 auto;
`
const SearchBarWrapper = styled.div`
  display: flex;
  background: white;
  box-shadow: 0 10px 36px rgba(0,0,0,0.65);
  border-radius: 10px 10px 10px 10px;
  margin: 0 auto;  
  margin-top: 5rem;
  color: rgb(72, 72, 72);
`
const SearchHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 20px;
  border-right: 1px solid rgb(235, 235, 235);
`
const SearchInput = styled.input`
  font-size: 1.1rem;
  margin-top: 0.5rem;
  border: none;
  background: none;
  font-weight: 600;
  color: rgb(72, 72, 72);
  &:focus {
    outline: none;
  }
`
const SearchButton = styled.button `
  background:rgb(255, 90, 95);
  color: white;
  margin-top: 5rem;
  margin-left: 0.7rem;
  padding: 25px;
  border-radius: 10px 10px 10px 10px;
  font-size: 1.7rem;
  cursor: pointer;
  border: none;
`
const locationSection = css`
  flex-grow: 4;
`
const dateSection = css`
  flex-grow: 1;
`
const guestSection = css`
  border: none;
  margin-right: -5rem;;
  flex-grow: 2;
`