import React from 'react'
import {DogCard} from './DogCard'

export const FavoriteDogs = ({favoriteDogs, dogAction, handleSubmit}) => {
    const DogCards = favoriteDogs.map(dog => {
            return <DogCard handleSubmit={handleSubmit} key={dog.id} dog={dog} dogAction={dogAction}/>
        })
    return (
        <div>
            <h1>favs</h1>
            {DogCards}
        </div>
    )
}