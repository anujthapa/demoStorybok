import * as React from 'react'
import Button from 'sms-styleguide/src/Button'
import Textinput from 'sms-styleguide/src/Textinput'
import Textarea from 'sms-styleguide/src/Textarea'

interface formComponent {
  onsaveHandaler?: any
  onSubmitHandaler?: Function
}

class Form extends React.Component<formComponent> {
  state = {
    name: '',
    email: '',
    subject: '',
    details: '',
   
  }
  inputHandeler = e => {
      this.setState({ [e.target.name]: e.target.value })
      console.log(e.target.name,e.target.value);
      
  }

  onSubmitHandaler = e => {
    e.preventDefault()
    const newObj = {
      name: this.state.name,
      email: this.state.email,
      details: this.state.details,
      subject: this.state.subject,
    }    
    this.props.onsaveHandaler(newObj)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandaler}>
          <div className="input mb">
            <div className="hidden">
              <label className="required">Name</label>
            </div>
            <div className="icon-container">
              <Textinput
                type="text"
                name="name"
                value={this.state.name}
                palceholder="please enter your firstname"
                onchange={e => this.inputHandeler(e)}
              />
              <span className="fas fa-user icon"></span>
            </div>
          </div>

          <div className="input mb">
            <div className="hidden">
              <label className="required">Email</label>
            </div>
            <div className="icon-container">
              <Textinput
                type="email"
                name="email"
                value={this.state.email}
                palceholder="please enter your email"
                onchange={e => this.inputHandeler(e)}
              />
              <span className="fas fa-envelope icon"></span>
            </div>
          </div>

          <div className="input mb">
            <div className="hidden">
              <label className="required">Subject</label>
            </div>
            <div className="icon-container">
              <Textinput
                type="text"
                name="subject"
                value={this.state.subject}
                palceholder="please enter your subject"
                onchange={e => this.inputHandeler(e)}
              />
              <span className="fas fa-pencil-alt icon"></span>
            </div>
          </div>

          <div className="input mb">
            <div className="hidden">
              <label className="required">Message</label>
            </div>
            <div className="icon-container">
              <Textarea
                name="details"
                value={this.state.details}
                palceholder="please write your details"
                onchange={ e => this.inputHandeler(e)}
              />
              <span className="fas fa-quote-left icon"></span>
            </div>
          </div>

          <div className="input mb">
            <Button  children="Save Message" />
          </div>
        </form>
      </div>
    )
  }
}

export default Form
