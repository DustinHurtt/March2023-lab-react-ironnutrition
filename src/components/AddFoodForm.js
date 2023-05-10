import { useState } from 'react'
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({theseFoods, setTheseFoods}) {

    const [newFood, setNewFood] = useState({
        name: "",
        calories: 0,
        image: "",
        servings: 0
    })

    const handleTextInput = (e) => {
        setNewFood((prev) => ({...prev, [e.target.name]: e.target.value}))
        console.log("Changing food:", newFood)
    }

    const handleNumberInput = (e) => {
        setNewFood((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
        console.log("Changing food:", newFood)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTheseFoods([newFood, ...theseFoods])
        setNewFood({
            name: "",
            calories: 0,
            image: "",
            servings: 0
        })
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name='name' value={newFood.name} type="text" onChange={handleTextInput} />

      <label>Image</label>
      <Input name="image" value={newFood.image} type="text" onChange={handleTextInput} />
      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <Input name='calories' value={newFood.calories} type="number" onChange={handleNumberInput} />
      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <Input name='servings' value={newFood.servings} type="number" onChange={handleNumberInput} />
      {/* render antd <Input /> type="number" here */}

      <button type="submit">Add Food</button>
    </form>
  );
}

export default AddFoodForm;