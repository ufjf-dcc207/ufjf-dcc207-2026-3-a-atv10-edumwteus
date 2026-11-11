import { useState } from 'react'
import './App.css'
import Garrafa from './Garrafa';

function App() {
  const [garrafas, setGarrafas] = useState<String[]>()

  function selecionarGarrafa(garrafa: String){
    setGarrafas([...garrafas!, garrafa])
    console.log(garrafas)
  }

  return (
    <>
    <h1>Jogo das Garrafas Magic Sort</h1>
    <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
      <Garrafa cores={['vermelho', 'roxo', 'verde', 'verde']} onSelecionar={() => selecionarGarrafa}></Garrafa>
      <Garrafa cores={['vermelho', 'roxo', 'verde', 'verde']} onSelecionar={() => selecionarGarrafa}></Garrafa>
      <Garrafa cores={['vermelho', 'roxo', 'verde', 'verde']} onSelecionar={() => selecionarGarrafa}></Garrafa>
      <Garrafa cores={['vermelho', 'roxo', 'verde', 'verde']} onSelecionar={() => selecionarGarrafa}></Garrafa>
    </div>
    </>
  )
}

export default App
