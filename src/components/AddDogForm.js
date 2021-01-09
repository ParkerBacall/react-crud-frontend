import React, { Component } from 'react'

class AddDogForm extends Component {

    state ={
        dog: {
        name: "",
        breed: "",
        age: 0,
        image: ''
        }
    }

    componentDidMount() {
        if(this.props.defaultDog) { 
            this.setState({ ...this.props.defaultDog})
        } 
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const {name, breed, age, image} = this.state
        this.props.handleSubmit({name, breed, age, image})
        this.setState({
            name: "",
            breed: "",
            age: 0,
            image: ''
        })
    }

    render(){
    return (
        <form className="add-dog-form"
            onSubmit={this.handleSubmit}
        >
            <input  
            type="text"
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange} 
            ></input>
            <input  
            name="breed" 
            value={this.state.breed} 
            onChange={this.handleChange} 
            ></input>
            <input  
            type="number"
            name="age" 
            value={this.state.age} 
            onChange={this.handleChange} 
            ></input> 
            <input  
            type="text"
            name="image" 
            value={this.state.image} 
            onChange={this.handleChange} 
            ></input>
            <input type='submit'></input>

        </form>
    )
    }
}

export default AddDogForm 