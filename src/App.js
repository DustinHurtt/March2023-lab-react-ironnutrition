// import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from 'react'
import foods from "./foods.json";
import './App.css';
import { Row, Divider, Button } from 'antd';


import FoodBox from './components/FoodBox';

import AddFoodForm from './components/AddFoodForm';

import Search from './components/Search';

function App() {

  const [theseFoods, setTheseFoods] = useState(foods)
  const [searchTerm, setSearchTerm] = useState('')

  let filtered = searchTerm ? [...theseFoods].filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase())) : theseFoods

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <AddFoodForm theseFoods={theseFoods} setTheseFoods={setTheseFoods}/>

      {/* Display Search component here */}

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filtered.map((food) => {
          return <FoodBox food={food} theseFoods={theseFoods} setTheseFoods={setTheseFoods} />
        })}
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;
