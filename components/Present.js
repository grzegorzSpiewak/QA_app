'use strict';
import React from 'react'

const renderItems = (items) => {
  const itemsValue = Object.keys(items).map(key => items[key])

  return itemsValue.map((item, i) =>
    <li key={i} className="result__list__item" role="inform"><b>The {item.name} </b> returns <span className="orange__text">{item.value}</span></li>
  )
}

const Present = (props) => (
  <section className="result">
    <div className="result__wrap">
      <h1 className="result__header">The following variables are present in this call</h1>
      <ul className="result__list">
        { renderItems(props) }
      </ul>
    </div>
  </section>
)

export default Present
