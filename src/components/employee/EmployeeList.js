import React, { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import { LocationContext } from "../location/LocationProvider"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import EmployeeForm from "./EmployeeForm"


export default () => {

    //bringing in the data from providers and storing it into variables
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    //setting the modal state as false (inactive) so that way it can be toggled on 
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>Employees:</h2>

            {/* onClick is the click event on the New Employee fake hyperlink */}

            <div className="fakeLink href" onClick={toggle}>New Employee</div>

            {/* maping over each individual employee and finding the employee object representation of the employee who matches the location id? */}
            <ul className="employees">
                {
                    employees.map(employee => {
                        const loc = locations.find(l => l.id === employee.locationId)

                        return <Employee key={employee.id} location={loc} employee={employee} />
                    })
                }
            </ul>

            {/* Modal representation {toggle} is being called from line 17 and is toggling the visability of modal */}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Employee
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}