import  * as React from 'react'
import Button from "sms-styleguide/src/Button"
import Textinput from "sms-styleguide/src/Textinput"
import Textarea from "sms-styleguide/src/Textarea"


interface formComponent {
    onsaveHandaler?: any;
    onSubmitHandaler?: Function;   
}


class Form extends React.Component<formComponent> {
    state = {
        fname: "",
        lname: "",
        details: ""
    }
    inputHandeler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmitHandaler = (e) => {
        e.preventDefault()
        const newObj = {
            fname: this.state.fname,
            lname: this.state.lname,
            details: this.state.details,
        }
        this.props.onsaveHandaler(newObj)
    }
    
    render() {
        return (
            <div >
                <form onSubmit={this.onSubmitHandaler}>
                <Textinput name="fname" value={this.state.fname} palceholder="please enter your firstname" onchange={(e)=>this.inputHandeler(e)}/>
                <Textinput name="lname" value={this.state.lname} palceholder="please enter your lastname" onchange={(e)=>this.inputHandeler(e)} />
                <Textarea name="details" value={this.state.details} palceholder="please more about you" onchange={(e)=>this.inputHandeler(e)} /> 
                    <button type="submit">Save</button>
                </form>
              
            </div>
        )
    }
}

export default Form;