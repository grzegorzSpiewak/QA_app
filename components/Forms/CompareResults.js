import Router from 'next/router'
import React, {Component} from 'react'

import Missing from '../Missing'
import Present from '../Present'
import FlexContainer from '../FlexContainer'

class CompareResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      select: {
        testResults: '',
      }
    }
    this.handleVariables = this.handleVariables.bind(this)
    this.compareResults = this.compareResults.bind(this)
    this.handlePasteData = this.handlePasteData.bind(this)
  }

  handleVariables (e) {
    const select = this.state.select
    select.testResults = e.target.value
    this.setState({
      testResults: select
    })
  }

  handlePasteData (value) {
    const data = JSON.stringify(value)
    const pairs =  data.replace(/(?:\\[rn]|[\r\n]+)+/g, '", "')
    const cleanPairs = pairs.replace(/\\t/g, ' ')
    const dataCheck = []

    cleanPairs.split(', ').map(elem => elem.replace(/(^"|"$)/g, "")).map(elem => {
      const splitPairs = elem.split(' ')
      let name = splitPairs[0]
      let value = splitPairs[1]
      if (splitPairs.length > 2) {
        name = splitPairs[0]
        value = splitPairs.splice(1).join(' ')
      }
      const pairsToCheck = {
        name,
        value
      }
      dataCheck.push(pairsToCheck)
    })
    return dataCheck
  }

  compareResults (e) {
    e.preventDefault()
    const varRequired = this.props.items
    const pasteData = this.state.select.testResults
    const varToCheck = this.handlePasteData(pasteData)
    const varToCheckNames = varToCheck.map(check => check.name)
    const presentNames = []
    const presentData = []
    const missingNames = []

    if(varRequired.length !== varToCheckNames.length) {
      varRequired.forEach(reqName => {
        if(!varToCheckNames.includes(reqName)) {
          missingNames.push(reqName)
        } else {
          presentNames.push(reqName)
        }
      })
    }

    varToCheck.map(searched => {
      const name = searched.name
      if(presentNames.includes(name)) {
        presentData.push(searched)
      }
    })

    this.setState({
      missingNames,
      presentData
    })
  }

  render () {
    return (
      <section className="compare">
        <h1 className="compare__header">Copy and paste variables from saved logs</h1>
        <form className="compare__form" id="compare">
          <textarea className="compare__form__textarea"onChange={ this.handleVariables.bind(this) }/>
          <input type="button" value="Compare" name="compare_results" className="compare__form__submit" onClick={ this.compareResults.bind(this) }/>
        </form>

          { this.state && this.state.missingNames ? <Missing {...this.state.missingNames} /> : null }
          { this.state && this.state.presentData ? <Present {...this.state.presentData} /> : null }

      </section>
    )
  }
}

export default CompareResults;
