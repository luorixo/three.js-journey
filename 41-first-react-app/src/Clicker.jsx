import { useRef, useEffect, useState } from "react"

export default function Clicker({ keyName, color, updateGlobalCount }) {
    const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0));
    const buttonRef = useRef()

    useEffect(() => {
        buttonRef.current.style.backgroundColor = 'papayawhip'
        buttonRef.current.style.color = 'salmon'

        return () => {
            localStorage.removeItem(keyName)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(keyName, count)
    }, [count])

    const buttonClick = () => {
        setCount(prevCount => prevCount + 1)
        updateGlobalCount()
    }
    
    return <>
        <h1 style={{ color }}>{count}</h1>
        <button ref={ buttonRef } onClick={ buttonClick }>Click Me!</button>
    </>
}