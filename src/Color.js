import React, {useState} from 'react'


export default function Color () {

    const [color, setColor] = useState({color: 'red', transition: 'all 1s ease'})

    const updateColor = () => {
        setColor({
            color: 'orange',
            border: 'solid green 3px',
            display: 'inline-block', 
            padding: '1em',
            transition: 'all 1s ease', 
            margin: '1em'
        })
    }

    return(<div>
        <p style={color}><strong>Here is the content</strong></p>
        <button onClick={updateColor}>and a button</button>
    </div>)
}