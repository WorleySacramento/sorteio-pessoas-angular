import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  generateRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
