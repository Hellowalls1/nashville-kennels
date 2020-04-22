import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider" //importing the context object from the Provider
import Animal from "./Animal"
import "./Animals.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"

export default () => {

    //Brings in Array of Locations/ useContext() hook allows you to use data structures and functions that a parent provider component exposes
    /* use the .map() array method to iterate the array of animals and generate HTML for each one by invoking the Animal component function */
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)
    {/* use .find() on customers and locations arrays to find the object representation that each foreign key references */}
    return (
        <div className="animals">
        {
            animals.map(ani => {
                const matchingPetOwner = customers.find(c => c.id === ani.customerId)
                const matchingVetClinic = locations.find (l => l.id === ani.locationId)
            
            return <Animal key={ani.id} 
            location={matchingVetClinic}
            customer={matchingPetOwner}
            animal={ani} />
        })
}
        </div>
    )
}