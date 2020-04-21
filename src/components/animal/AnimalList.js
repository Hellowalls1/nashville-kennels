import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider" //importing the context object from the Provider
import Animal from "./Animal"
import "./Locations.css"

export default () => {

    //Brings in Array of Locations/ useContext() hook allows you to use data structures and functions that a parent provider component exposes
    const { animals } = useContext(AnimalContext)

    return (
        <div className="animals">

  
     {/* use the .map() array method to iterate the array of animals and generate HTML for each one by invoking the Animal component function */}
  
        {
            animals.map(anim => <Animal key={anim.id} location={anim} />) 
        }

        </div>
    )
}