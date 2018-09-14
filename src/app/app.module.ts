import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { TopoComponent } from './topo/topo.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { ProcessoComponent } from './processo/processo.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    TopoComponent,
    TentativasComponent,
    ProcessoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
