import { useState } from 'react'
import './App.css'
import Garrafa from './Garrafa';

function App() {
  const [garrafas, setGarrafas] = useState<String[]>()

  function selecionarGarrafa(garrafa: String){
    setGarrafas([...garrafas!, garrafa])
  }

  return (
    <>
    <h1>Jogo das Garrafas Magic Sort</h1>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Garrafa cores={['vermelho', 'roxo', 'verde', 'verde']} onSelecionar={() => selecionarGarrafa}></Garrafa>
      <Garrafa cores={['vermelho', 'roxo', 'verde', 'verde']} onSelecionar={() => selecionarGarrafa}></Garrafa>
      <Garrafa cores={['vermelho', 'roxo', 'verde', 'verde']} onSelecionar={() => selecionarGarrafa}></Garrafa>
      <Garrafa cores={['vermelho', 'roxo', 'verde', 'verde']} onSelecionar={() => selecionarGarrafa}></Garrafa>
    </div>
    </>
  )
}

export default App
