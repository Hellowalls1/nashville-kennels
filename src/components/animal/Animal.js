import React from "react"

// when we use Aniaml component in AnimalList, react takes the keys passed to the Animal component and puts it into one object
export default ({animal}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__customer">{animal.customerId}</div>
        <div className="animal__location">{animal.locationId}</div>
    </section>
)