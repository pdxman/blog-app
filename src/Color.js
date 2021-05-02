import React, {useState} from 'react'


export default function Color () {
    const [hover, setHover] = useState(
        {color: '', 
        background: '',
        transition: 'all 1s ease'}
    )

    const [color, setColor] = useState(
        {color: 'red', 
        fontSize: '3em',
        display: 'inline-block',
        transition: 'all 1s ease'}
    )
    const [button, setButton] = useState(
        {color: '#e834eb', 
        fontSize: '3em',
        display: 'block',
        width: '9em',
        margin: '1em auto',
        border: '#e834eb solid 5px',
        background: 'none',
        padding: '.5em',
        borderRadius: '20px',
        fontWeight: 'bold',
        textShadow: '0 0 0.125em #4a4a4a, 0 0 0.45em #e834eb',
        boxShadow: 'inset 0 0 1em 0 #e834eb, 0 0 1em 0 #e834eb',
        position: 'relative',
        transition: 'all 1s ease'}
    )

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
        <button className="button" style={button} onClick={updateColor}>And a button</button>
    </div>)
}