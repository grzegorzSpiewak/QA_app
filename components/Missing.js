'use strict';
import React from 'react'

const renderItems = (items) => {
  const itemsValue = Object.keys(items).map(key => items[key])

  return itemsValue.map((item, i) =>
    <li className="result__list__item" role="inform" key={i}><b>{item}</b></li>
  )
}

const Missing = (props) => (
  <section className="result">
    <div className="result__wrap">
      <h1 className="result__header">The following variables are missing from this call</h1>
      <ul className="result__list">
        { renderItems(props) }
      </ul>
    </div>
  </section>
)

export default Missing
