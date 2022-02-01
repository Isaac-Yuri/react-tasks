import './botao.css';

function Botao({ children, onClick }) {
  return (
      <button onClick={onClick} className="botao">
        {children}
      </button>
  )
}

export default Botao;