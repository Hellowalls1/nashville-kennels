import React, { useContext, useRef } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"


export default props => {
    
    const { locations } = useContext(LocationContext)
    const { addAnimal } = useContext(AnimalContext) //post call coming from animal provider

    //Refs used in forms
    const name = useRef() //referenceing the fieldset for the name
    const location = useRef() //referenceing the fieldset for the location
    const breed = useRef()

    //Creates new object and saves it to the api
    //makes sure that the animal object has the customerId and locationId foreign keys on it
    const constructNewAnimal = () => {

        const locationId = parseInt(location.current.value) //defining locationId into a variable mused be parsed since it is a string
        const userId = parseInt(localStorage.getItem("kennel_customer")) //user id comes from local storage and is that "kennel_customer" must be parsed 
       
       //when user saves animal this function runs making new animal
       //must be called in the click event on line 71 in the button 
        const newAnimalObj = {
            name: name.current.value,
            breed: breed.current.value,
            locationId: locationId, //line 18
            customerId: userId //line 19

        }
        console.log(newAnimalObj)
        //save animal to the api using addAnimal and animal object
        addAnimal(newAnimalObj).then(props.toggle) //Post the newAnimalObj then add a toggle to close the modal (getting passed from AnimalList at the bottom inside the modal)
    }
    return (
        <form className="AnimalForm">
            <h2 className="AnimalForm__title">Name of Animal:</h2>
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
                    <label htmlFor="animalBreed">Breed of Animal: </label>
                    <input
                        type="text"
                        id="animalBreed"
                        ref={breed}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Animal Breed"
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
                      constructNewAnimal()
                    }
                }
                className="btn btn-primary">
                Admit Animal
            </button>
        </form>
    )
}