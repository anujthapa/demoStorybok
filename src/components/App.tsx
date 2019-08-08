// import React;
import * as React from 'react'
import Form from './Form'

export default class App extends React.Component {
  state = {
    collection: [
      {
        fname: 'anuj',
        lname: 'thapa',
        details: 'my name is anuj thapa',
      },
    ],
  }

  savehandaler = obj => {
    const collection = this.state.collection.slice()
    collection.push(obj)
    this.setState({ collection: collection })
  }

  render() {
    const appStyle = {
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
    }
    const headingStyle = {
      color: 'red',
    }
    const heading= {
      color: 'red',
      marginLeft:"35%",
    }
    const content = {
      color: "white",
      marginLeft: "35%",
      marginTop: "2%"
    }

    return (
      <div style={{ ...appStyle }}>
        <div style={{ ...heading}}>
          <h2 style={{ ...headingStyle }}>Fill the form</h2>
          <Form onsaveHandaler={this.savehandaler} />
        </div>

        {this.state.collection.map(item => (
          <div style={{...content}}>
            <li>{item.fname}</li>
            <li>{item.lname}</li>
            <li>{item.details}</li>
          </div>
        ))}
      </div>
    )
  }
}
