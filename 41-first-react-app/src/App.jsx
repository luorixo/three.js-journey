import { useMemo, useState } from "react";
import Clicker from "./Clicker";
import People from "./People";

export default function App({ clickerCount, children }) {
    const [showClicker, setShowClicker] = useState(true)
    const [count, setCount] = useState(0)

    const updateGlobalCount = () => setCount((prevCount => prevCount + 1))

    const colors = useMemo(() => {
        const colors = []
        for (let i=0; i<clickerCount; i++) 
            colors.push(`hsl(${ Math.random() * 360 }deg, 100%, 70%)`)

        return colors
    }, [ clickerCount ])

    

    return <>
        { children }

        <div>Total Count: { count }</div>

        <button onClick={() => setShowClicker(prevShowClicker => !prevShowClicker)}>{showClicker ? 'Hide' : 'Show'} Clicker</button>
        {showClicker && <>
            { [...Array(clickerCount)].map((value, index) => 
                <Clicker 
                    key={ index }
                    keyName={ `count${index}` } 
                    color={ colors[index] } 
                    updateGlobalCount={ updateGlobalCount } 
                />
            )}
        </>}

        <People />
    </>
}