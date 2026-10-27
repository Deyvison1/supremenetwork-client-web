import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BaseHttpService } from './base-http.service';

export interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ViaCepService extends BaseHttpService {
  viaCepApi: string = environment.viaCepApi;

  buscarCep(cep: string): Observable<ViaCepResponse> {
    const cepLimpo = cep.replace(/\D/g, '');

    return this.http.get<ViaCepResponse>(`${this.viaCepApi}/${cepLimpo}/json/`);
  }
}
