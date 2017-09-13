'use strict';
import React from 'react'
import Link from 'next/link'

const renderItems = (items) => {
  return items.map((item, i) =>
    <li className="informations__guide__list__item" role="inform" key={i} dangerouslySetInnerHTML={ {__html: item.tip} }/>
  )
}

const Informations = (props) => (
  <section className="informations">
    <div className="informations__guide">
      <h1 className="informations__guide__header" dangerouslySetInnerHTML={ {__html: props.text} }></h1>
      <ul className="informations__guide__list">
        {renderItems(props.items)}
      </ul>
    </div>
  </section>
)

export default Informations
