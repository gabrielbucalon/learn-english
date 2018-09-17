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
  public rodadaFrase: Frase;
  public progresso = 0;

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
    if (this.rodadaFrase.frasePt === this.resposta) {
      alert('A tradução está correta!');
      // console.log('Verifica resposta: ', this.resposta);
      this.rodada++;

      this.progresso += (100 / this.frase.length);
      console.log(this.progresso);
      console.log(this.rodada);
      this.rodadaFrase = this.frase[this.rodada];
      console.log(this.rodadaFrase);

    } else {
      alert('A tradução está incorreta!');
    }
  }
}
