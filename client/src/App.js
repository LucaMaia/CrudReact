import React,{useEffect, useState} from 'react';
import './App.css';
import Axios from 'axios';

//Components
import Card from './components/cards/card';

function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();

  console.log("todos",listGames);

  const handleChangeValues = (value) => {
      setValues((prevValue)=> ({
        ...prevValue,
        [value.target.name]: value.target.value,
      }));
  };

  const handleClickButton = () => {
  //  console.log(values)
  Axios.post("http://localhost:4001/register", {
    name: values.name,
    cost: values.cost,
    category: values.category,
  }).then((response)=>{
    console.log(response);
  });
};

useEffect(()=>{
  Axios.get("http://localhost:4001/getCards").then((response)=>{
    setListGames(response.data);
  })
})


  return (
    <div className="app-container">
        <div className="register-container">
            <h1>Scrim Shop</h1>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className="register-input"
              onChange={handleChangeValues}
            />

            <input
              type="text"
              name="cost"
              placeholder="Preço"
              className="register-input"
              onChange={handleChangeValues}
            />

            <input
              type="text"
              name="category"
              placeholder="Categoria"
              className="register-input"
              onChange={handleChangeValues}
            />

            <button 
              className="register-button" 
              onClick={()=>{handleClickButton()}}
            >
              Cadastrar
            </button>
        </div>

        {typeof listGames !== "undefined" && 
          listGames.map((value)=>{
            return (
            <Card 
              key={value.id} 
              listGames={listGames} 
              setListGames={setListGames}
              id={value.id}
              name={value.cost}
              category={value.category}
            ></Card>
            )
          })}

        
    </div>
  );
}

export default App;
