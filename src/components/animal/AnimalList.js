import React, { useContext, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider" //importing the context object from the Provider
import { CustomerContext } from "../customer/CustomerProvider"
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap"
import Animal from "./Animal"

import "./Animals.css"
import AnimalForm from "./AnimalForm"

export default () => {

    //Brings in Array of Locations/ useContext() hook allows you to use data structures and functions that a parent provider component exposes
    /* use the .map() array method to iterate the array of animals and generate HTML for each one by invoking the Animal component function */
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

     //setting the modal state as false (inactive) so that way it can be toggled on 
     //the state of the modal and a way to change the state
     const [modal, setModal] = useState(false)
     const toggle = () => setModal(!modal)
 
    {/* use .find() on customers and locations arrays to find the object representation that each foreign key references */}
    return (
            <>
         <Button onClick={() => {
             //check if the user is authenticated
             const userId = localStorage.getItem("kennel_customer") //where does kennel customer come from
            if (userId){
                //if the user is authenticated, show the animal form
                toggle() //function that sets the modal state to the opposite on line 20
            }
        }}>Make Appointment</Button>
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
        
            {/* Modal representation {toggle} is being called from line 17 and is toggling the visability of modal */}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Animal
                </ModalHeader>
                <ModalBody>
                    <AnimalForm toggle={toggle}/>   {/* animal form needs to toggle the modal this is imported from AnimalForm*/}
                </ModalBody>
            </Modal>
        </>
    )
}