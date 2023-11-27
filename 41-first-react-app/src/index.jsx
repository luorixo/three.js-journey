import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <App clickerCount={ 3 }>
            <h1>My React App!</h1>
            <h3>I am amamzing</h3>
        </App>
    </>
)