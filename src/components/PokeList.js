import PokeItem from "./PokeItem"
import './css/PokeList.css'

const PokeList=({pokeList, onDelete, onToggle})=>{
    
    return(
        <ul className="PokeList">
            {pokeList.map((poke)=>(<PokeItem poke={poke} key={poke.id} onDelete={onDelete} onToggle={onToggle}/>))}
        </ul>
    )
}
export default PokeList