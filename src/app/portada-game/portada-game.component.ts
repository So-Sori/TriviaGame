import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions/questions.component';

@Component({
  selector: 'app-portada-game',
  imports: [CommonModule, QuestionsComponent],
  templateUrl: './portada-game.component.html',
  styleUrl: './portada-game.component.css',
})
export class PortadaGameComponent {
  displayPortada: Boolean;
  displayQuestions: Boolean | undefined;
  textPortada: string = '';
  textBtnPortada: string = '';
  nextFinish: Boolean = true;
  result: number = 0;

  constructor() {
    this.displayPortada = true;
    this.displayQuestions = false;
    this.textPortada =
      'Hemos llegado al momento más emocionante… ¡Es hora de poner a prueba nuestro conocimiento! 🔥🧠 Después de todo lo aprendido, vamos a repasar juntos de una manera divertida. ¿Listos para el desafío? 😏✨ ¡Que empiece el juego! 🎮🚀';
    this.textBtnPortada = 'Iniciar';
  }

  changeDisplayPortada() {
    this.displayPortada = !this.displayPortada;
    this.displayQuestions = !this.displayQuestions;
  }
  
  showResult() {
    this.displayPortada = !this.displayPortada;
    this.displayQuestions = !this.displayQuestions;
    this.textPortada =
      '¡Increíble trabajo! 🎉 Este es tu resultado final. Gracias por participar y dar lo mejor de ti. 🚀💪';
    this.textBtnPortada = 'Reintentar';
  }

  receiveData(objectResult: {result: number, nextValue:Boolean}) {
    if (objectResult) {
      this.result = objectResult.result;
      this.nextFinish = objectResult.nextValue;
    } else {
      console.error("Error: No se recibió ningún objeto válido.");
    }
  }
}
