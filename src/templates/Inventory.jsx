import React from 'react'
import { soundFromEmbed } from '../scripts/soundFromEmbed'

export function Inventory(props) {
    const chooseItem = (el) => {
        el.name ? soundFromEmbed(1) : soundFromEmbed(4);
        props.setCurrentInventoryItem(el)
    }
    
    return (
        <div className="inventory">
            {props.inventory.map(el => (
                <div key={el.name}>
                    <div 
                        className="innerInventoryImg" 
                        style={{backgroundImage: `url(./images/inventory/${el.img})`}} 
                        onClick={() => chooseItem(el)}>
                    </div>
                    <span>{el.name}</span>
                </div>
            ))}
            {/* <p>{props.currentInventoryItem.name ? props.currentInventoryItem.name : `nada`}</p> */}
        </div>
    )
}