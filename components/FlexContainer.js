'use strict';
import React from 'react'

const FlexContainer = ({ children }) => (
  <section className="container">
    <div className="container__wrap">
      {children}
    </div>
  </section>
)

export default FlexContainer
