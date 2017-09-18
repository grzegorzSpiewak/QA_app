'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../utils/store'
import { startClock, addCount, serverRenderClock } from '../utils/actions/actions'
import withRedux from 'next-redux-wrapper'

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

class Index extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  click() {
    console.log(this.props)
  }

  render () {
    return (
      <div>
        <Header { ...MainPageContent.header } />
        <FlexContainer>
          <button onClick={this.click.bind(this)}>Click me</button>
          <Informations { ...MainPageContent.informations }/>
          <SelectSuite { ...MainPageContent.select } />
        </FlexContainer>)
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, state) => {
  console.log(dispatch)
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, (store) => {
  return store
}, mapDispatchToProps)(Index)
