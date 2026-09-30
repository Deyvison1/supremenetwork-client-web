import {
  Directive,
  ElementRef,
  OnDestroy,
  inject,
} from '@angular/core';

import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appContact]',
  standalone: true,
})
export class ContactDirective implements OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly ngControl = inject(NgControl);

  private readonly inputListener = (event: Event): void => {
    const input = event.target as HTMLInputElement;

    if (!(input instanceof HTMLInputElement)) {
      return;
    }

    const valorOriginal = input.value;
    const valorFormatado = this.formatar(valorOriginal);

    if (valorOriginal === valorFormatado) {
      return;
    }

    // Corrige o valor ANTES do InputControl.onInput()
    input.value = valorFormatado;
  };

  constructor() {
    this.elementRef.nativeElement.addEventListener(
      'input',
      this.inputListener,
      true, // capture
    );
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.removeEventListener(
      'input',
      this.inputListener,
      true,
    );
  }

  private formatar(valor: string): string {
    if (!valor) {
      return '';
    }

    // Texto ou e-mail
    if (valor.includes('@') || /^[a-zA-Z]/.test(valor)) {
      return valor;
    }

    const numero = valor.replace(/\D/g, '');

    if (numero.length <= 2) {
      return numero;
    }

    const ddd = numero.slice(0, 2);
    let telefone = numero.slice(2);

    // Celular: DDD + 9 dígitos
    if (telefone.startsWith('9')) {
      telefone = telefone.slice(0, 9);

      if (telefone.length <= 5) {
        return `(${ddd}) ${telefone}`;
      }

      return `(${ddd}) ${telefone.slice(0, 5)}-${telefone.slice(5)}`;
    }

    // Fixo: DDD + 8 dígitos
    telefone = telefone.slice(0, 8);

    if (telefone.length <= 4) {
      return `(${ddd}) ${telefone}`;
    }

    return `(${ddd}) ${telefone.slice(0, 4)}-${telefone.slice(4)}`;
  }
}