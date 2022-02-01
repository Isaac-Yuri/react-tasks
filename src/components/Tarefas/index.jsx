import Tarefa from '../Tarefa';

export default function Tarefas({ tarefas, handleTarefaClick, handleDeletarTarefa }) {
  return (
    <>
      {
        tarefas.map((tarefa) => {
          return <Tarefa handleTarefaClick={handleTarefaClick} handleDeletarTarefa={handleDeletarTarefa} tarefa={tarefa}/>
        })
      }
    </>
  )
}