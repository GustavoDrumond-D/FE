import { useState } from 'react';
import './App.css';
import Garage from './Components/Car';
import FruitBasket from './Components/Fruit';
import Zoo from './Components/Animal';
import MyForm from './Components/MyForm';
import MyForm2 from './Components/MyForm2';
import MyForm3 from './Components/MyForm3'; // Importando o novo formulário

function App() {
  const [isMyFormVisible, setIsMyFormVisible] = useState(false);
  const [isMyForm2Visible, setIsMyForm2Visible] = useState(true);
  const [isMyForm3Visible, setIsMyForm3Visible] = useState(false); // Estado para o terceiro formulário

  const toggleMyFormVisibility = () => {
    setIsMyFormVisible(prev => !prev);
  };

  const toggleMyForm2Visibility = () => {
    setIsMyForm2Visible(prev => !prev);
  };

  const toggleMyForm3Visibility = () => {
    setIsMyForm3Visible(prev => !prev); // Alternar a visibilidade do terceiro formulário
  };

  return (
    <>
      <Garage />
      <FruitBasket />
      <Zoo />

      <h1>Formulários</h1>

      <button onClick={toggleMyFormVisibility}>
        {isMyFormVisible ? 'Ocultar Meu Formulário' : 'Mostrar Meu Formulário'}
      </button>
      
      {isMyFormVisible && (
        <div>
          <MyForm />
        </div>
      )}

      <button onClick={toggleMyForm2Visibility}>
        {isMyForm2Visible ? 'Ocultar Segundo Formulário' : 'Mostrar Segundo Formulário'}
      </button>
      
      {isMyForm2Visible && (
        <div>
          <MyForm2 />
        </div>
      )}

      <button onClick={toggleMyForm3Visibility}>
        {isMyForm3Visible ? 'Ocultar Meu Terceiro Formulário' : 'Mostrar Meu Terceiro Formulário'}
      </button>
      
      {isMyForm3Visible && (
        <div>
          <MyForm3 />
        </div>
      )}
    </>
  );
}

export default App;
