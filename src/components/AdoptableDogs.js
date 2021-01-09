import React from 'react'
import {DogCard} from './DogCard'

export const AdoptableDogs = ({dogs, dogAction, deleteDog, handleSubmit}) => {
    const dogCards = dogs.map(dog => {
        return <DogCard handleSubmit={handleSubmit} key={dog.id} dog={dog} dogAction={dogAction}  deleteDog={deleteDog}/>
    })
    return(
        <div>
            <h1>Adoptable Dogs</h1>
            {dogCards}
        </div>
    )
}