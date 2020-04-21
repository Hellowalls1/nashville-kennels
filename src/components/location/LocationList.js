import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider" //importing the context object from the Provider
import Location from "./Location"
import "./Locations.css"

export default () => {

    //Brings in Array of Locations/ useContext() hook allows you to use data structures and functions that a parent provider component exposes
    const { locations } = useContext(LocationContext)

    return (
        <div className="locations">

  
     {/* use the .map() array method to iterate the array of locations and generate HTML for each one by invoking the Location component function */}
  
        {
            locations.map(loc => <Location key={loc.id} location={loc} />) 
        }

        </div>
    )
}