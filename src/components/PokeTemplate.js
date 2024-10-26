import './css/PokeTemplate.css';
import PokeList from './PokeList';

const PokeTemplate=({children})=>{
    return(
        <div className="PokeTemplate">
            <h1 className='title'>포켓몬 도감</h1>
            {children}
        </div>
    )
}

export default PokeTemplate;