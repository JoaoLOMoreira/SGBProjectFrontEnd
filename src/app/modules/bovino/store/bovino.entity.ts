export interface Bovino {
  id?: string;
  apelido: string;
  sexo: string;
  raca: string;
  obeservacao: string;
  pasto: string;
  idMaterno: string;
  idPaterno: string;
  mesNascimento: number;
  anoNascimento: number;
  genitora: boolean;
  qtdCria: number;
  ultimaCria: Date;
}
