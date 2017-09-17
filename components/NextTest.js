import Router from 'next/router'
import React, {Component} from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'


class NextTest extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      visible: false
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.setState({
      visible: !this.state.visible
    })
    console.log(this.state.visible)
  }

  render () {
    const renderItems = (items) => {
      return items.map((item, i) =>
        <li className={this.state.visible? "informations__guide__list__item green" : "informations__guide__list__item"} role="inform" key={i} dangerouslySetInnerHTML={ {__html: item.name} } onClick={this.onClick.bind(this)}/>
      )
    }

    return (
      <section className="informations">
        <div className="informations__guide">
          <h1 className="informations__guide__header" dangerouslySetInnerHTML={ {__html: this.props.header} } />
          <ul className="informations__guide__list">
            {renderItems(this.props.items)}
          </ul>
        </div>
      </section>
    )
  }
}

export default NextTest;
