import React from 'react'
import Children  from './Child' // We can change the name of default export
import {DestructureChild}  from './Child' // We cannot change the name of Named  export
const Parent = () => {

    const city = "Bhopal";
    const person = {
        name: "Jit",
        lname:"Nishad"
    }
  return (
    <div>Parent
        <Children  mycity = {city} obj ={person}/>
        <DestructureChild mycity = {city} obj ={person}/>
    </div>
  )
}

export default Parent