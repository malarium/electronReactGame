import React, { useEffect } from 'react'
import { soundFromEmbed } from '../scripts/soundFromEmbed'

export function Controls(props) {
    useEffect(() => {
        props.setMusicSrc(`./sounds/intro_sonda.mp3`)
    })
    return(
        <>
        <h1 onClick={() => soundFromEmbed(2)}>Controls module</h1>
        <h1 onClick={() => soundFromEmbed(3)}>Controls module 3</h1>
        <button onClick={() => props.setLevel(0)}>Back</button>
        </>
    )
}