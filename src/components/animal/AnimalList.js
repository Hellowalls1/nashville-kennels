import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider" //importing the context object from the Provider
import Animal from "./Animal"
import "./Animals.css"

export default () => {

    //Brings in Array of Locations/ useContext() hook allows you to use data structures and functions that a parent provider component exposes
    /* use the .map() array method to iterate the array of animals and generate HTML for each one by invoking the Animal component function */
    const { animals } = useContext(AnimalContext)

    return (
        <div className="animals">

        {
            animals.map(ani => <Animal key={ani.id} animal={ani} />) 
        }
        </div>
    )
}