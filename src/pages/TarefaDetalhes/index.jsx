import { useParams, useNavigate } from "react-router-dom";
import Botao from "../../components/Botao";
import './tarefadetalhes.css';

function TarefaDetalhes() { 
  const params = useParams();
  const navegacao = useNavigate();

  const handleBotaoVoltarClick = () => {
    navegacao('/')    
  } 
  
  return (
    <>
      <div onClick={handleBotaoVoltarClick} className="botao-voltar-container">
        <Botao>Voltar</Botao>
      </div>
      <div className="detalhes-tarefa-container">
        <h2 className="titulo-tarefa-detalhes">{params.tarefaTitulo}</h2>
        <p className="detalhes-tarefa">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos laudantium deserunt voluptatum esse vel obcaecati asperiores laboriosam sed?</p>
      </div>
    </>
  )
}

export default TarefaDetalhes;