import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
  useRef,
  useCallback} from 'react';
// import Character from './Character'
import '../style/character.css'
import Search from './Search'
import Character from './Character'


const initialState =  {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_FAVORITE':
          return {
          ...state,
          favorites: [...state.favorites, action.payload]
        }
      // if(state.favorites.includes(action.payload)){
      //   return {
      //     ...state,
      //     favorites: [...state.favorites, action.payload]
      //   }
      // }
    default:
      return state;

  }
}


const Characters= () => {

    const [ characters, setCharacters ] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('')
    const searchInput = useRef(null)


    // const handleSearch =(event) =>  {
    //   setSearch(event.target.value)
    // }

    // const handleSearch = () => {
    //   setSearch(searchInput.current.value)
    // }
    const handleSearch = useCallback(() => {
      setSearch(searchInput.current.value)
    }, [])
    // const filteredUsers = characters.filter(user => {
    //   return user.name.toLowerCase().includes(search.toLowerCase())
    // })

    const filteredUsers = useMemo (() =>
      characters.filter((user) =>  {
        return user.name.toLowerCase().includes(search.toLowerCase())
      }),
      [characters, search]
    )


    const handleClick = favorite => {
      dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    useEffect( () => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(data => setCharacters(data.results))
    }, [])



    return (
        <div className="Characters grid-container">
          <h3>Favoritos</h3>
          <hr/>
          {favorites.favorites.map(favorite => (
            <li key={favorite.id}>
            {favorite.name}
            </li>
          ))}

          <Search search={search} handleSearch={handleSearch} searchInput={searchInput} ></Search>

          <h3>Filtrados</h3>
            {/* <h3>Todos</h3> */}
            <hr/>
            {filteredUsers.map((character) => (
              <Character character={character} handleClick={handleClick} key={character.id}/>
            ))}

        </div>

    );
}
export default Characters;