export interface Sala {
  id: number;
  nome: string;
  chegada: boolean;
  visaoAtual: 'N' | 'S' | 'O' | 'L';
  saidas: string[];
  tamanho?: number;
}
