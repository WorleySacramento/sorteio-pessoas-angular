import { Component } from '@angular/core';

@Component({
  selector: 'app-sorteio-pessoas',
  templateUrl: './sorteio-pessoas.component.html',
  styleUrls: ['./sorteio-pessoas.component.css']
})
export class SorteioPessoasComponent {
  texto: string = '';

  sortearPessoas(){
    const nomes: string[] = this.texto.split('\n');
    if(nomes.length == 0){
      alert('Digite os nomes para realizar o sorteio');
      return;
      }else{
      const nomeSorteado = Math.floor(Math.random() * nomes.length);
      alert(`O nome sorteado é: ${nomes[nomeSorteado]}`);}
  }
}
