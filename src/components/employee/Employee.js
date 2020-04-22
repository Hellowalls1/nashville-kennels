import React from "react"

export default ({employee, location}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Works at: {location.name}</div>
<div className="employee__address">Employee Address: {employee.address}</div>
    </section>
)