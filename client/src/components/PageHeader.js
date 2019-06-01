import React, {Component} from 'react'
import styled from '@emotion/styled'

import {Link} from 'react-router-dom';

import HomeContext from '../Home.context';

class PageHeader extends Component {

  state={
    location:null
  }

  handleChange ({name, value}){
    this.setState({[name]:value})
  }

  // handleKeyPress(e){
  //   if(e.key === 'Enter') {

  //   }
  // } 

  render(){
  return (
    <HeaderWrapper>
      <LeftBar>
        <Link to="/"><Logo src="http://pluspng.com/img-png/airbnb-logo-png--880.png"></Logo></Link>
        <label for="search">
        <InputWrapper>
          <HomeContext.Consumer>
            {
              ({getHomes}) => (
               <Link to='/search'><SearchIcon onClick={() => getHomes(this.state)}><i class="fas fa-search"></i></SearchIcon></Link> 
                )
            }
          </HomeContext.Consumer>
              <SearchInput name='location' type="text" placeholder="Search" id='search' onChange={(e) => this.handleChange(e.target)} ></SearchInput>
        </InputWrapper>
        </label>
      </LeftBar>
      <LinkWrapper>
        <HeaderLink>Become a host</HeaderLink>
        <HeaderLink>Help</HeaderLink>
        <HeaderLink>Sign up</HeaderLink>
        <HeaderLink>Log in</HeaderLink>
      </LinkWrapper>
    </HeaderWrapper>
    )
  }
}


export default PageHeader

const HeaderWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
font-size: 0.9rem;
z-index: 1;
`
const LeftBar = styled.div`
  display:flex;
  align-items: center;
`
const Logo = styled.img`
  height: 60px;
  &:hover {
    cursor: pointer;
  }
  `
const LinkWrapper = styled.div`
display: flex; 
align-items: center;
`
const HeaderLink = styled.a`
color: #484848;
font-weight: 500;
padding: 35px 15px;
&:hover {
  border-bottom: 2px solid black;
  border-color: gray;
  cursor: pointer;
}
`
const InputWrapper = styled.div`
  box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 4px 12px rgba(26, 26, 29, 0.08);
  width: 400px;
  transition: box-shadow 200ms ease-in;
  border: 1px solid #EBEBEB;
  border-radius: 4px;
  line-height: 45px;
`
const SearchInput = styled.input `
  outline: none;
  border: none;
  font-weight: bold;
  color: #000;
`
const SearchIcon = styled.span`
  font-size: 20px;
  padding: 3px 10px 0 5px;
  margin-left: 3px;
  color: black;
  width: 40px;
  vertical-align: middle;
  cursor: pointer;
`