import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  coracaoVazio: String = '../../assets/coracao_vazio.png';
  coracaoCheio: String = '../../assets/coracao_cheio.png';
  @Input() public tentativas: number;


  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() {
    console.log(this.coracoes);
  }

  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length) {
      const indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
    console.log('Tentativas recebidas do painel', this.tentativas);
  }

  ngOnInit() {
  }
}
