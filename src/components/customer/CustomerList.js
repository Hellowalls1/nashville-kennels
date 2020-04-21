import React, { useContext } from "react"
import "./Customers.css"
import { CustomerContext } from "./CustomerProvider" //importing context object from Provider
import Customer from "./Customer"

export default () => {

    //Brings in Array of Locations/ useContext() hook allows you to use data structures and functions that a parent provider component exposes
    /* use the .map() array method to iterate the array of employees and generate HTML for each one by invoking the Animal component function */
    const { customers } = useContext(CustomerContext) //array of customers from the data provider

    return (
        <div className="customers">

        {
            customers.map(cus => <Customer key={cus.id} customer={cus} />) 
        }
        </div>
    )
}