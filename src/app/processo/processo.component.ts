import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit {
  @Input() public progresso = 0;
  constructor() { }

  ngOnInit() {
  }

}
