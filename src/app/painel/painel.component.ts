import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frase.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frase: Frase[] = FRASES;
  public resposta: string;
  rodada = 0;
  public  rodadaFrase: Frase;

  constructor() {
    this.rodadaFrase = this.frase[this.rodada];
    console.log(this.rodadaFrase);
  }

  ngOnInit() {}

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    // console.log(this.resposta);
  }

  verificaResposta(): void {
    // console.log('Verifica resposta: ', this.resposta);
    this.rodada++;
    console.log(this.rodada);
    this.rodadaFrase = this.frase[this.rodada];
    console.log(this.rodadaFrase);
  }
}
