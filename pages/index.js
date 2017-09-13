'use strict'
import React from 'react'
/**
 * Components
 */
import SelectSuite from '../components/Forms/SelectSuite'
import Header from '../components/Header'
import Informations from '../components/Informations'
import FlexContainer from '../components/FlexContainer'
/**
 * Content
 */
import MainPageContent from '../data/MainPage'

export default class extends React.Component {

  render () {
    return (
      <div>
        <Header { ...MainPageContent.header } />
        <FlexContainer>
          <Informations { ...MainPageContent.informations }/>
          <SelectSuite { ...MainPageContent.select } />
        </FlexContainer>
      </div>
    )
  }
}
