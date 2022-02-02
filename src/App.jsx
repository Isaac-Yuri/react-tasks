import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Tarefas from './components/Tarefas';
import AddTarefa from './components/AddTarefa';
import TarefaDetalhes from './pages/TarefaDetalhes';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id:'1',
      titulo:'Tarefa exemplo',
      completada:false
    },
  ]);

  const handleTarefaClick = (idTarefa) => {
    const novaTarefa = tarefas.map(tarefa => {
        if (tarefa.id === idTarefa) return { ...tarefa,completada: !tarefa.completada }

        return tarefa;
    })

    setTarefas(novaTarefa);
  }

  const handleTarefaAdicionar = (tituloTarefa) => {
     const novaTarefa = [...tarefas, {
        id: uuidv4(),
        titulo: tituloTarefa,
        completada: false
    }]

    setTarefas(novaTarefa);
  }

  const handleDeletarTarefa = (idTarefa) => {
        const tarefaDeletada = tarefas.filter((tarefa) => {
            if (tarefa.id !== idTarefa) {
                return tarefa
            }
        })

        setTarefas(tarefaDeletada);
  }

  return (
    <BrowserRouter>
      <div className='container'>
        <Header text='Minhas Tarefas'/>
        <Routes>
          <Route path="/react-tasks/" element={
            <>
              <AddTarefa handleTarefaAdicionar={handleTarefaAdicionar} />
              <Tarefas 
                  tarefas={tarefas}
                  handleDeletarTarefa={handleDeletarTarefa}
                  handleTarefaClick={handleTarefaClick}
              />
            </>
          } /> 
          <Route path='/react-tasks/:tarefaTitulo' element={<TarefaDetalhes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;