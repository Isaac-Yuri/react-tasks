import './tarefa.css';
import { IoClose } from 'react-icons/io5';
import { CgInfo } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

function Tarefa({ tarefa, handleTarefaClick, handleDeletarTarefa }) {
  const navegacao = useNavigate();

  const handleTarefaDetalhesClick = () => {
    navegacao(`/${tarefa.titulo}`)
  }

  return (
    <div
      className='tarefa-container'
      style={
        tarefa.completada ? { borderLeft: '6px solid chartreuse' } : {}
      }
    >
      <div className="titulo-tarefa" onClick={() => handleTarefaClick(tarefa.id)}>
        {tarefa.titulo}
      </div>
      <div className="botoes-container">
        <button onClick={handleTarefaDetalhesClick} className="botao-info-container">
          <CgInfo size={20} color='chartreuse' />
        </button>
        <button onClick={() => handleDeletarTarefa(tarefa.id)} className="botao-delete-container">
          <IoClose size={25} color='chartreuse' />
        </button>
      </div>
    </div>
  )
}

export default Tarefa;