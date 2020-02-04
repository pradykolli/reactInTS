import React, {useState} from 'react';
import './App.css';
import ChekList from './ChekList';
import AddCheckListItem from './AddCheckListItem'
const initialCheckList:Array<Item> = [
  {text:'Learn Typescript', completed:false},
  {text:'Learn Django', completed:false},
  {text:'Learn React', completed:true}
]
const App = () => {
const [checkList, setCheckList] = useState<State>(initialCheckList)
const toggleChecked:ToggleChecked = clickedItem => {
  const newItem = checkList.map(item => {
    if(item === clickedItem){
      return {
        ...item,
        completed: !item.completed
      }
    }
    return item
  });
  setCheckList(newItem)
}

const addItem:AddItem = newitem => {
  newitem.trim() !== "" && setCheckList([...checkList , {text:newitem, completed:false}]);
}
  return (
    <div className="App">
      <AddCheckListItem addItem={addItem}/>
      <ChekList items={checkList} toggler={toggleChecked}/>
    </div>
  );
}

export default App;
