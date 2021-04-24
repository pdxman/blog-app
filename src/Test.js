import { useState } from 'react'

export default function Test(){
    const [alert, setAlert] = useState("");

    function showAlert() {
        setAlert('Hey Now!')
    }

    return(<div>
        <h1>This is a test of the React system!</h1>
            <button onClick={showAlert}>Click for alert!</button>
            <p>{alert}</p>
        </div>)
}