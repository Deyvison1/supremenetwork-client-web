import { AddressRequestDTO } from './address-request.dto';

export interface ContractRequestDTO {
  productId: string;
  address: {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
  };
  value: number;
  startDate: string;
  endDate: string | null;
  active: boolean;
}
