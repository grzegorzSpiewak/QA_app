'use strict'
import React from 'react'
/**
 * Components
 */
import CompareResults from '../components/Forms/CompareResults'
import Header from '../components/Header'
import Informations from '../components/Informations'
import FlexContainer from '../components/FlexContainer'
import SelectSuite from '../components/Forms/SelectSuite'
/**
 * Content
 */
import TestCases from '../data/TestCases'
import ResultPageContent from '../data/ResultPage'
import MainPageContent from '../data/MainPage'

export default class Result extends React.Component {
  static getInitialProps ({ query }) {
    const testName = query.name.split('" "')
    const testNameData = TestCases[testName]
    return { testNameData, testName }
  }

  render () {
    const testNameData = this.props.testNameData
    const testName = this.props.testName

    return (
      <div>
        <Header { ...MainPageContent.header } />
        <FlexContainer>
          <Informations { ...testNameData } />
          <CompareResults { ...testNameData} />
        </FlexContainer>
      </div>
    )
  }
}
