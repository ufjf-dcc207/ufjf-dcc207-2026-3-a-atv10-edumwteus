import type { garrafaProps, cores } from './types';

const COLOR_MAP = new Map<cores, string>([
  ['vermelho', 'red'],
  ['azul', 'blue'],
  ['verde', 'green'],
  ['roxo', 'purple'],
]);

export default function Garrafa({ cores, selecionada, onSelecionar }: garrafaProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          width: '80px',
          height: '200px',
          border: selecionada ? '3px solid orange' : '2px solid black',
          borderRadius: '0 0 12px 12px',
          overflow: 'hidden',
          transform: selecionada ? 'translateY(-10px)' : 'none',
          transition: 'transform 0.15s',
        }}
      >
        {cores.map((cor, index) => (
          <div
            key={index}
            style={{
              backgroundColor: COLOR_MAP.get(cor),
              height: '25%', // Cada unidade ocupa 1/4 da garrafa
              width: '100%',
            }}
          />
        ))}
      </div>

      <button onClick={onSelecionar}>
        {selecionada ? 'Selecionada' : 'Selecionar'}
      </button>
    </div>
  );
}