import { Person } from "../interfaces";

export const ObjectLiterals = () => { 
    const person: Person = {
        name: 'Miguel',
        age: 35,
        address: {
            street: 'Dummy Street',
            city: 'NY',
            country: 'USA'
        }
    };

    return (
        <>
            <div>Object Literals</div>
            <pre>{ JSON.stringify(person, null, 2) }</pre>
        </>
    )
}