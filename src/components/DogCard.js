import React, {Component} from 'react'
import AddDogForm from './AddDogForm'

export class DogCard extends Component {

    state={
        showForm: false
    }

     handleClick = (event) => {
        if (event.target.className === 'dog-card'){
        this.props.dogAction(this.props.dog)
        }
    }

    editDog = (newDog) =>{
        this.props.handleSubmit(newDog, this.props.dog.id)
    }

    showUpdate = () =>{
        this.setState({
            showForm: !this.state.showForm
        })
    }

      handleButton = (event) => { 
        if (event.target.className === 'button'){
            this.props.deleteDog(this.props.dog)
        }
    }

    render(){
        console.log(this.props)
    return (
        <div
        onClick={this.handleClick}
        className="dog-card">
            <img src={this.props.dog.image} alt={this.props.dog.name}/>
            <div className='dog-specs' >
            <h4><b>{this.props.dog.name}</b></h4>
             <p>Breed: {this.props.dog.breed}</p>
                <p>Age: {this.props.dog.age}</p>
        </div>
        <button className='button' onClick={this.handleButton}>delete</button>
        <button className='button' onClick={this.showUpdate}>update</button> 
        {this.state.showForm ?
         <AddDogForm handleSubmit={this.editDog} defaultDog={this.props.dog}/>
         : null
        }
        
        </div>
    )
    }
}
