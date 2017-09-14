'use strict';
import React from 'react'

const renderItems = (items) => {
  return items.map((item, i) => 
    item.value ?
      <li key={i} className="result__list__item" role="inform"><b>The {item.name} </b> returns <span className="orange__text">{item.value}</span></li>
      :
      <li className="result__list__item" role="inform" key={i}><b>{item.name}</b></li>
  )
}

const Result = (props) => (
  <section className="result">
    <div className="result__wrap">
      <h1 className="result__header" dangerouslySetInnerHTML={ {__html: props.header} } />
      <ul className="result__list">
        {renderItems(props.items)}
      </ul>
    </div>
  </section>
)

export default Result
