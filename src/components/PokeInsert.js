import './css/PokeInsert.css'
import React, { useState, useCallback } from 'react';

const PokeInsert=({onSubmit})=>{
    
    const [inputName, setInputName] = useState()
    const onChange =(e)=>{setInputName(e.target.value)}
    const onInsert=(e)=>{
        e.preventDefault();
        setInputName('');
        onSubmit(inputName);
    }

    return(
        <form className="pokeInsert" onSubmit={onInsert}>
            <input type="text" onChange={onChange}  value={inputName} placeholder="포켓몬 이름을 입력하세요"/>
            <button type="submit">등록</button>
        </form>
    )
}

export default PokeInsert;