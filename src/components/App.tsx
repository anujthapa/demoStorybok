// import React;
import * as React from 'react'
import Form from './Form'

export default class App extends React.Component {
  state = {
    collection: [
      {
        name: 'anuj thapa',
        email: 'thapa@a.a',
        details: 'my name is anuj thapa',
        subject:"about me"
      },
    ],
  }

  savehandaler = obj => {
    const collection = this.state.collection.slice()
    collection.push(obj)
    this.setState({ collection: collection })
    console.log(this.state);
    
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
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.subject}</li>
            <li>{item.details}</li>
          </div>
        ))}
      </div>
    )
  }
}
