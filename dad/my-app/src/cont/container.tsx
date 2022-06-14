import React,{useState} from 'react'
import axios from 'axios'
export default function PokeCont() {



  const [pokemons, setPokemons] = useState<any> ()
  // const [pokeData, setPokeData ] = useState <any>()
  
  const onClick = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=6").then((response)=>{
      setPokemons(response.data.results)
      console.log(response.data.results)
 })
  }





  return (
    <div className="App">
      <button onClick={onClick}>Get pokemon</button>
     {pokemons && pokemons.map((pokemon : any) => (
       <div key={pokemon.name}>
         <p>{pokemon.name}</p>
       </div>
     ))}
    </div>
  );
}