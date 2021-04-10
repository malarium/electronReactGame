import React, { useEffect } from 'react'
import { soundFromEmbed } from '../scripts/soundFromEmbed'

export function Level1(props) {
    useEffect(() => {
        props.setMusicSrc(`./sounds/crickets.wav`)
    })
    return(
        <>
        <h1 onClick={() => soundFromEmbed(1, 2500)}>Level1 module</h1>
        <button onClick={() => props.setLevel(0)}>Back</button>
        </>
    )
}