import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tarefas from '../../components/Tarefas';
import AddTarefa from '../../components/AddTarefa';

export default function Home() {
  const [tarefas, setTarefas] = useState([
    {
      id:'1',
      titulo:'Tarefa exemplo',
      completada:true
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
      <>
        <AddTarefa handleTarefaAdicionar={handleTarefaAdicionar} />
        <Tarefas 
            tarefas={tarefas}
            handleDeletarTarefa={handleDeletarTarefa}
            handleTarefaClick={handleTarefaClick}
        />
      </>
    )
}