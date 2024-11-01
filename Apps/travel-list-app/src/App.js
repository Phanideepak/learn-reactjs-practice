import { useState } from "react";
import Form from "./components/Form/Form";
import Logo from "./components/Logo/Logo";
import PackingList from './components/PackingList/PackingList'
import Stats from './components/Stats/Stats'

function App() {

  const [items, setItems] = useState([])
  
  function handleAddItem(item){
     setItems((items) => [...items, item])
  }

  function handleRemoveItem(id){
    setItems(items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id){
     setItems(items.map((item)=> item.id === id ? {...item, packed : !item.packed} : item ))
  }

  function handleClearList(){
     const confirmed = window.confirm("Are you sure you want to delete all items?")

     if(confirmed) setItems([])
  }

  return (
      <div className="app">
        <Logo />
        <Form onAddItem={handleAddItem}/>
        <PackingList items={items} onRemoveItem={handleRemoveItem} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
        <Stats items={items}/>
      </div>
  );
}

export default App;
