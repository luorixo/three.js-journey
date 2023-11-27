import { useEffect, useState } from "react"

export default function People() {
    const [people, setPeople] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getPeople = async () => {
        setIsLoading(true)

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()

        setTimeout(() => {
            console.log("this is the first message");
          }, 10000);

        setPeople(result)
        setIsLoading(false)
    }

    useEffect(() => {
        getPeople()
    }, [])

    return <div>
        <h2>People</h2>
        <ul>
            { !isLoading ? <>{ people.map(person =>
                <li key={ person.id }>{ person.name }</li>
            ) }</> : <h1>Loading!!!</h1> }
        </ul>
    </div>
}