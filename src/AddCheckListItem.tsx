import React,{useState, ChangeEvent, FormEvent, useRef, useEffect} from 'react'
interface AddCheckListProps{
    addItem: (item:string) => void
}
const AddCheckListItem:React.FC<AddCheckListProps> = ({addItem}) => {
    const [newItem, setNewItem] = useState()
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus();
    }, [])
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewItem(e.target.value);
    };
    const handleClick = (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addItem(newItem);
        setNewItem("");
    };

    return (
        
        <div>
            <form>
                <input type="text" ref={inputRef} value={newItem} onChange={handleChange}/>
                <button type="submit" onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}

export default AddCheckListItem
