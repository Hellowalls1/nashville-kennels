import React, { useContext } from "react"
import "./Employees.css"
import { EmployeeContext } from "./EmployeeProvider" //importing context object from Provider
import Employee from "./Employee"

export default () => {

    //Brings in Array of Locations/ useContext() hook allows you to use data structures and functions that a parent provider component exposes
    /* use the .map() array method to iterate the array of employees and generate HTML for each one by invoking the Animal component function */
    const { employees } = useContext(EmployeeContext)

    return (
        <div className="employees">

        {
            employees.map(emp => <Employee key={emp.id} employee={emp} />) 
        }
        </div>
    )
}