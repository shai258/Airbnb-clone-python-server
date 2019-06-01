import React from 'react'

import styled from '@emotion/styled'

import Card from './Card'
import HomeContext from '../Home.context'

const EditorsPick = () => {
  return (
    <EditorsPickWrapper>
      <EditorsPickTitle>Editors pick</EditorsPickTitle>
      <HomeContext.Consumer>
        {({editorPicks}) => (
          <CardWrapper>
            {editorPicks.map((home, index) => {
              return <Card {...home} key={index} />
            })}
          </CardWrapper>
        )}
      </HomeContext.Consumer>
    </EditorsPickWrapper>
  )
}

export default EditorsPick

const EditorsPickWrapper = styled.div`
  margin-top: 3%;
  margin-left: 24.5%;
  color: rgb(72, 72, 72);
`
const EditorsPickTitle = styled.h2`
  font-size: 1.5rem;
`
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  margin-top: 1rem;
  width: 71.5%;
`