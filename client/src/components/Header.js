import React from 'react'

import HomeHeader from './HomeHeader'
import PageHeader from './PageHeader'

const Header = () => {
    return window.location.pathname === '/' ?  <HomeHeader/> : <PageHeader/>
}

export default Header