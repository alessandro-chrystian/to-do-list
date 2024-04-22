import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import EditToDoItem from './EditToDoItem';
import FilterItem from './FilterItem';
import SearchItem from './SearchItem';
import Footer from './Footer';


function App() {

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')
  const [search, setSearch] = useState('')

  function getGeneratedRandomId() {
    return '_' + Math.random().toString(36)
  }

  function addItem(item) {
    setItems(prevItems => {
      if(item === ''){
        return [...prevItems]
      } else {
        return [...prevItems, {text: item, isCompleted: false, isEdited: false, id: getGeneratedRandomId()}]
      }
    })
    console.log(items)
  }

  function resetItems(){
    setItems(prevItems => prevItems = [])
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item) => {
        return item.id !== id
      })
    })
  }

  function completeItem(id) {
    setItems(prevItems => {
      return prevItems.map((item) => {
        return item.id === id ? {...item, isCompleted: !item.isCompleted} : item
      })
    })
  }

  function editItem(id) {
    setItems(prevItems => {
      return prevItems.map((item) => {
        return item.id === id ? {...item, isEdited: !item.isEdited} : item
      })
    })
  }

  function addEditItem(value, id) {
    if(value !== '') {
      setItems(prevItems => {
        return prevItems.map((item) => {
          return item.id === id ? {...item, text: value, isEdited: !item.isEdited} : item;
        })
      })
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     
      <InputArea onAdd={addItem} onReset={resetItems} />

      <div className="container-max-height">
        <ul>
          {items
          .filter(item => item.text.toLowerCase().includes(search.toLowerCase()))
          .filter(item => filter === 'All' ? item : filter === 'Completed' ? item.isCompleted : !item.isCompleted)
          .sort((a, b) => sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((item) => {
            return item.isEdited ? (
              <EditToDoItem onAddEditItem={addEditItem} item={item} id={item.id} key={item.id} />
            ) : <ToDoItem key={item.id} id={item.id} item={item} onDel={deleteItem} onComplete={completeItem} onEdit={editItem} />
          })}         
        </ul>
      </div>
      <div className="filter-search-container">
        <FilterItem filter={filter} setFilter={setFilter} setSort={setSort} />
        <SearchItem search={search} setSearch={setSearch} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
