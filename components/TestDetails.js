'use strict';
import React from 'react'

const TestDetails = (props) => (
  <section className="test-details">
    <div className="test-details__wrap">
      <h1 className="test-details__header">This is <span className="orange__text">{props.testName}</span> test call</h1>
      <h2 className="test-details__caption" dangerouslySetInnerHTML={ {__html: props.testDetails} } />
    </div>
  </section>
)

export default TestDetails
