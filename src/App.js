import React, { Component } from 'react'
import './App.css'
import {Header} from './components/Header'
import {AdoptableDogs} from './components/AdoptableDogs'
import {FavoriteDogs} from './components/FavoriteDogs'
import {SearchBar} from './components/SearchBar'
import AddDogForm from './components/AddDogForm'

const BASE_URL = 'https://dogs-backend.herokuapp.com/dogs/'

class App extends Component {

  componentDidMount() {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(dogs => this.setState({
        dogs
    })
    )
  }

  state = {
    dogs: [],
    favoriteDogs: [],
    searchTerm: ""
  }

  updateDog = (dog, id) => {
   const newDog = {id, ...dog}
   console.log(newDog)
    this.setState({
      dogs: [
        ...this.state.dogs.filter(dog => dog.id !== id),
        newDog
      ]
    })  


    fetch(BASE_URL + id, {
      method: 'PUT',
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(dog)
    })

  }

  addFavoriteDog = dog => {
    if (!this.state.favoriteDogs.includes(dog)){
    this.setState({favoriteDogs: [...this.state.favoriteDogs, dog] })
    }
  }

removeFavoriteDog = dog => {
  const favDogs = this.state.favoriteDogs.filter(favDog => {
    return favDog !== dog
      })
      this.setState({
        favoriteDogs: favDogs
  })
}

addAdoptableDog = dog => {
  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dog)
  })
  .then(response => response.json())
  .then(dog => this.setState({dogs: [...this.state.dogs, dog] }))
}

filterDogs = () => {
  const {dogs, searchTerm} = this.state
 return dogs.filter(dog => {
    return dog.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || dog.breed.toLowerCase().includes(searchTerm) || dog.age.toString() === searchTerm
  })
}

deleteDog = (dog) => {
  const newDogs = this.state.dogs.filter(newDogs => {
    return newDogs !== dog
  })
  this.setState({
    dogs: newDogs
})

  fetch(BASE_URL + dog.id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    }
  })                          
}


updateSearchTerm = term =>{
  this.setState({
    searchTerm: term
  })
  this.filterDogs(term)
}


  render(){
  return (
    <div className="App">
      <Header/>
      <FavoriteDogs handleSubmit={this.updateDog} favoriteDogs={this.state.favoriteDogs} dogAction={this.removeFavoriteDog}/>
      <SearchBar searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} />
      <AdoptableDogs handleSubmit={this.updateDog} dogs={this.filterDogs()} dogAction={this.addFavoriteDog} deleteDog={this.deleteDog}/>
      <AddDogForm handleSubmit={this.addAdoptableDog}/>
    </div>
  )
  }
}

export default App;
