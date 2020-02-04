// Type Item with two properties text, completed.
type Item  = {
    text: String;
    completed:Boolean;
};
// Type ItemsList with an array Of Items.
type State = Item[];

// Toggle checkbox
type ToggleChecked = (clickedItem:Item) => void;

type AddItem = (item:string) => void
