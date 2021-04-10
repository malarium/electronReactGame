import React, { useEffect } from 'react'
import { soundFromEmbed } from '../scripts/soundFromEmbed'

export function Controls(props) {
    useEffect(() => {
        props.setMusicSrc(`./sounds/funny.mp3`)
    })
    return(
        <>
        <h1 onClick={() => soundFromEmbed(2, 2500)}>Controls module</h1>
        <button onClick={() => props.setLevel(0)}>Back</button>
        </>
    )
}