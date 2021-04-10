import React from 'react'
import '../style/character.css'

const Character = ({character, handleClick}) => {

    return (
        <div className="character_container" key={character.id}>
              <img src={character.image} alt="" className="img"/>
              <div className="character_data">
                  <h2>{character.name}</h2>
                  <h2>{character.status}</h2>
                  <button type="button" onClick={() => handleClick(character)}>ADD TO FAVORITE</button>
              </div>
              </div>
    )
}

export default Character