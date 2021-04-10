import React, { useEffect, useState } from 'react'
import { soundFromEmbed } from '../scripts/soundFromEmbed'
import { typewriterEffect } from '../scripts/typewriterEffect'

export function Level1(props) {
    const [classWithTypewriterEffect, showInTypewriterEffect] = useState([null, null, null])
    useEffect(() => {
        props.setMusicSrc(`./sounds/twinkle.mp3`)
    })
    useEffect(() => {
        typewriterEffect(classWithTypewriterEffect)
    }, [classWithTypewriterEffect])

    
    return(
        <>
        <h1 onClick={() => soundFromEmbed(1)}>Level1 module</h1>
        <p onClick={() => props.setLevel(0)}>Back</p>
        <p onClick={() => showInTypewriterEffect([`type1`])}>Show first text</p>
        <p onClick={() => showInTypewriterEffect([`type2`, true, 150])}>Show second text</p>
        <h2 className="type type1">This is a typewriter effect. Used for communication and dialogues.</h2>
        <br />
        <h3 className="type type2">This is another text to be typed.</h3>
        </>
    )
}