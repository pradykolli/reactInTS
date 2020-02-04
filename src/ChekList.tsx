import React from 'react'
import ListItem from './ListItem'
interface checkListProps {
    items: Item[],
    toggler:ToggleChecked
}
const ChekList: React.FC<checkListProps> = ({ items, toggler }) => {
    return(
        <ul>
            {
                items.map(singleItem => {
                    return (<ListItem item={singleItem} togglerClick={toggler} />)
                } )
            }
        </ul>
    )
}

export default ChekList
