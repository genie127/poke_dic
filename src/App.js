import PokeInsert from "./components/PokeInsert";
import PokeList from "./components/PokeList";
import PokeTemplate from "./components/PokeTemplate";
import React, { useState, useRef } from 'react';


import './reset.css'
function App() {

  //포켓몬 목록
  const [pokeList, setPokeList] = useState([
    {id:'1', name:'가디', img:'/images/가디.png', status:true},
    {id:'2', name:'고라파덕', img:'/images/고라파덕.png',status:true}, 
    {id:'3', name:'꼬렛', img:'/images/꼬렛.png',status:false}])
  
  //포켓몬 추가
  const nextId = useRef(4);

  const onSubmit = (name)=>{
    const newForm ={id:nextId.current, name, img:`/images/${name}.png`, status:true};

    setPokeList(pokeList.concat(newForm))

    nextId.current += 1;
  }

  //포켓몬 삭제
  const onDelete=(id)=>{
    const deletePoke= pokeList.filter((poke)=>(poke.id !== id))
    setPokeList(deletePoke)
  }

  //포켓몬 비활성화
  const onToggle=(id)=>{
    const offPoke = pokeList.map((poke)=>{
      return  poke.id==id?{...poke, status: !poke.status}:poke
      
    })
    setPokeList(offPoke)
  }

  return (
    <div className="App">
      <PokeTemplate>
        <PokeInsert onSubmit={onSubmit}/>
        <PokeList pokeList={pokeList} onDelete={onDelete} onToggle={onToggle}/>
      </PokeTemplate>
    </div>
  );
}

export default App;
