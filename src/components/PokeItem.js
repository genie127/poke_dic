import './css/PokeItem.css'
import classnames from 'classnames'

const PokeItem=({poke, onDelete, onToggle})=>{
    const {id, name, img, status} = poke;
    return(
        <li className={classnames('PokeItem',{status})} onDoubleClick={()=>{onToggle(id)}}>
            <div className="imgWrap">
                <img src={img}/>
            </div>
            <div className='txtWrap'>
                <p><span>No.{id}</span>{name}</p> 
            </div>
            <div className='delPoke' onClick={()=>onDelete(id)}>
                삭제
            </div>
        </li>
    )
}

export default PokeItem;