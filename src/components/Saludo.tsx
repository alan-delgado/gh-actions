// src/components/Saludo.jsx

interface Props {
  nombre: string;
}

function Saludo(props: Props) {
  const { nombre } = props;
  return <h1>Hola, {nombre}!</h1>;
}

export default Saludo;
