import React, { useContext, useRef } from "react"
import { LocationContext } from "../location/LocationProvider"


export default props => {
    
    const { locations } = useContext(LocationContext)
    
    return (
        <form className="AnimalForm">
            <h2 className="AnimalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input
                        type="text"
                        id="animalName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Animal name"
                    />
                </div>
            </fieldset>
          
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="animalLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                      // create the animal function goes here
                    }
                }
                className="btn btn-primary">
                Admit Animal
            </button>
        </form>
    )
}