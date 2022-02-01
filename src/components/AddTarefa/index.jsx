import { useState } from 'react';
import Botao from '../Botao';
import './addTarefa.css';

function AddTarefa({ handleTarefaAdicionar }) {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }

  function inputVerificacao() {
    if (inputData === '' || inputData.trim() === '') {
      return true
    }
    return false
  }

  const handleAddTarefaClick = () => {
    if (inputVerificacao()) {
      alert('Campo vazio!')
      setInputData('');
    } else {
      handleTarefaAdicionar(inputData[0].toUpperCase() + inputData.slice(1));
      setInputData('');
    }
  }

  return (
    <div className="add-tarefa-container">
      <input
        onChange={handleInputChange}
        className="add-tarefa-input"
        type="text"
        value={inputData}
      />
      <div className="add-tarefa-botao-container">
        <Botao onClick={handleAddTarefaClick}>
          Adicionar
        </Botao>
      </div>
    </div>
  )
}

export default AddTarefa;