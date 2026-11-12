export type cores = 'vermelho' | 'azul' | 'verde' | 'roxo';

export type garrafaProps = {
  cores: cores[];
  selecionada: boolean;
  onSelecionar: () => void;
};