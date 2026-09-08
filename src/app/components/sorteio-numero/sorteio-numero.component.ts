import { Component } from '@angular/core';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-sorteio-numero',
  templateUrl: './sorteio-numero.component.html',
  styleUrls: ['./sorteio-numero.component.css']
})
export class SorteioNumeroComponent {
  constructor(private randomService: RandomService) { }

  gerarNumeroAleatorio() {
    const numero = this.randomService.generateRandomNumber(100);
    alert(`O número sorteado é: ${numero}`);
  }
}
