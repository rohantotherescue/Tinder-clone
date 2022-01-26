import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Tcards.css';
import axios from "./axios";

function Tcards() {
    const [people, setPeople]= useState([]);
    useEffect( ()=>{
            async function fetchData()
            {
                const req= await axios.get("/tinder/cards");
                setPeople(req.data);
            }
            fetchData();
    },[]
    );
    const swiped=(direction, nameToDelete)=>{
        console.log("swiped");
    };
    const outOfFrame= (name)=>{
        console.log("Bayeeee");
    };
  return (
  <div className='tinderCards'>
        <div className= 'cardContainer'>
            {
                people.map((person)=> (
                    <TinderCard
                        className= "swipe"
                        key={person.name}
                        preventSwipe= {["up","down"]}
                        onSwipe={(dir)=> swiped(dir, person.name)}
                        onCardLeftScreen= {()=> outOfFrame(person.name)}
                    >
                        {/* The above things were the attributes of tindercards  */}
                        <div style={{backgroundImage: `url(${person.imgUrl})`}} className='card'>
                            <h2>{person.name}</h2>
                        </div>
                    </TinderCard>
                ))
            }
            </div>
  </div>
  );
}

export default Tcards;
