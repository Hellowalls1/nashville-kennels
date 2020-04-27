import React, { useContext, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"


export const AnimalForm = ({ animal, customer, toggleEdit }) => {
    const { locations } = useContext(LocationContext)
    const { updateAnimal } = useContext(AnimalContext)

    // Separate state variable to track the animal as it is edited
    const [ updatedAnimal, setAnimal ] = useState(animal)

    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const handleControlledInputChange = (event) => {
        const newAnimal = Object.assign({}, updatedAnimal)
        newAnimal[event.target.name] = event.target.value
        setAnimal(newAnimal)
    }

    const editAnimal = () => {
        const locationId = parseInt(updatedAnimal.locationId)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            updateAnimal({
                id: updatedAnimal.id,
                name: updatedAnimal.name,
                breed: updatedAnimal.breed,
                locationId: locationId,
                customerId: parseInt(localStorage.getItem("kennel_customer"))
            })
                .then(toggleEdit)
        }
    }

    return (
        <form className="animalForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Animal name"
                        defaultValue={animal.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Animal breed: </label>
                    <input type="text" name="breed" required className="form-control"
                        placeholder="Animal breed"
                        defaultValue={animal.breed}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select name="locationId" className="form-control"
                        defaultValue={animal.locationId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customer">Customer:</label>
                    <input type="text" name="customer" disabled className="form-control"
                        defaultValue={customer.name}
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editAnimal()
                }}>
                Save Updates
            </button>
        </form>
    )
}