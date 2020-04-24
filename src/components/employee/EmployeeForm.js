import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Employees.css"

export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    //reference to each input field
    const name = useRef()
    const location = useRef()
    const address = useRef()

    //function that is creating a new employee parseInt because everything must becaues data from the DOM is in a string and must be converted to a integer
    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)

        //locationId === 0 is the "choose" message that is displaying 
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {

            //addEmployee is the defined variable to represent the POST function in the employee data provider 
            addEmployee({
                name: name.current.value,
                locationId: locationId,
                address: address.current.value
                
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input
                        type="text"
                        id="employeeName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeAddress">Address: </label>
                    <input
                        type="text"
                        id="employeeAddress"
                        ref={address}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Street address"
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
                        id="employeeLocation"
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
                        constructNewEmployee()
                    }
                }
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}