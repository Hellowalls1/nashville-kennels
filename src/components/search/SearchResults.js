import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import Animal  from "../animal/Animal"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap"
import {AnimalForm} from "../animal/AnimalForm.js"

export const SearchResults = ({ searchTerms }) => {
    const { animals, releaseAnimal, updateAnimal } = useContext(AnimalContext)
    const { customers } = useContext(CustomerContext)
    const { locations } = useContext(LocationContext)

    const [filteredAnimals, setFiltered] = useState([])
    const [selectedAnimal, setAnimal] = useState({animal: {id:0}, location: null, customer: null})

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    //this is the state of the Edit modal
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, animals])
    
    return (
        <div className="searchResults">
            <h3>Results</h3>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                         return (<div
                        className="fakeLink href"
                        onClick={() => {
                            const location = locations.find(l => l.id === animal.locationId)
                            const customer = customers.find(c => c.id === animal.customerId)
                            
                            setAnimal({ animal, location, customer })
                            toggle()
                        }}
                        >{animal.name}</div>)}
                     )}
            </div>
                

            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    { selectedAnimal.animal.name }
                </ModalHeader>
    <           
                ModalBody>
                    <AnimalForm key={selectedAnimal.animal.id} toggleEdit={toggleEdit} {...selectedAnimal} />
                </ModalBody>
            </Modal>



            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    { selectedAnimal.animal.name }
                </ModalHeader>
                <ModalBody>
                    <Animal key={selectedAnimal.animal.id} {...selectedAnimal} />
                </ModalBody>
                <ModalFooter>
                        <Button color="danger" onClick={() => {
                            releaseAnimal(selectedAnimal.animal.id)
                            toggle()
                        }}>Delete</Button>
                        <Button color="danger" onClick={() => {
                            updateAnimal(selectedAnimal.animal)
                            toggleEdit()
                        }}>Edit</Button>
                        </ModalFooter>
                    </Modal>


        </div>
        
        
        )      
    }