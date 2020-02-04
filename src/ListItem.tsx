import React from 'react'
interface ListItemProps {
    item:Item,
    togglerClick:ToggleChecked
}
const ListItem:React.FC<ListItemProps>  = ({item,togglerClick}) => {
    return (
        <React.Fragment>
            <li>
                <label>
                    <input type="checkbox" checked={item.completed ? true : false} onChange={() => togglerClick(item)}></input>
                    {item.text}

                    {/* {completed ? "Completed" : 'Not yet completed'} */}
                </label>
            </li>
        </React.Fragment>
    )
}

export default ListItem
