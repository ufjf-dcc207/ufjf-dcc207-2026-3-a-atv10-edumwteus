import { useState } from 'react';
import './App.css';
import Garrafa from './Garrafa';
import type { cores } from './types';

const CAPACIDADE_MAXIMA = 4;

const ESTADO_INICIAL: cores[][] = [
  ['vermelho', 'roxo', 'verde', 'verde'],
  ['roxo', 'verde', 'vermelho', 'roxo'],
  ['verde', 'vermelho', 'roxo', 'vermelho'],
  [],
  [],
];

function App() {
  const [garrafas, setGarrafas] = useState<cores[][]>(ESTADO_INICIAL);
  const [garrafaSelecionada, setGarrafaSelecionada] = useState<number | null>(null);

  function selecionarGarrafa(indiceClicado: number) {
    if (garrafaSelecionada === null) {
      if (garrafas[indiceClicado].length > 0) {
        setGarrafaSelecionada(indiceClicado);
      }
      return;
    }

    if (garrafaSelecionada === indiceClicado) {
      setGarrafaSelecionada(null);
      return;
    }

    const novasGarrafas = garrafas.map((g) => [...g]);
    const origem = novasGarrafas[garrafaSelecionada];
    const destino = novasGarrafas[indiceClicado];

    const corTopoOrigem = origem[origem.length - 1];
    const corTopoDestino = destino[destino.length - 1];

    const podeDespejar =
      origem.length > 0 &&
      destino.length < CAPACIDADE_MAXIMA &&
      (destino.length === 0 || corTopoOrigem === corTopoDestino);

    if (podeDespejar) {
      while (
        origem.length > 0 &&
        destino.length < CAPACIDADE_MAXIMA &&
        origem[origem.length - 1] === corTopoOrigem
      ) {
        destino.push(origem.pop()!);
      }
      setGarrafas(novasGarrafas);
    }

    setGarrafaSelecionada(null);
  }

  const venceu = garrafas.every(
    (g) => g.length === 0 || (g.length === CAPACIDADE_MAXIMA && g.every((cor) => cor === g[0]))
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Jogo das Garrafas Magic Sort</h1>

      {venceu && <h2 style={{ color: 'green' }}>Parabéns, você organizou todas as garrafas!</h2>}

      <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', marginTop: '24px' }}>
        {garrafas.map((coresDaGarrafa, index) => (
          <Garrafa
            key={index}
            cores={coresDaGarrafa}
            selecionada={garrafaSelecionada === index}
            onSelecionar={() => selecionarGarrafa(index)}
          />
        ))}
      </div>

      <button
        style={{ marginTop: '24px' }}
        onClick={() => {
          setGarrafas(ESTADO_INICIAL);
          setGarrafaSelecionada(null);
        }}
      >
        Reiniciar Jogo
      </button>
    </div>
  );
}

export default App;