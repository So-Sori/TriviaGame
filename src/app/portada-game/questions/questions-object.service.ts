import { Injectable } from '@angular/core';

export interface Questions{
  question : string,
  answers : {
      true : string,
      false : string
  }
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsObjectService {

  data : Array<Questions> = [
    {
      "question": "¿Cuál de las siguientes es una ventaja principal de usar Angular en el desarrollo web?",
      "answers": {
        "false": "No requiere conocimientos de TypeScript",
        "true": "Soporte para desarrollo basado en componentes"
      }
    },
    {
      "question": "¿Qué lenguaje de programación utiliza Angular por defecto?",
      "answers": {
        "true": "TypeScript",
        "false": "JavaScript"
      }
    },
    {
      "question": "¿Qué herramienta de línea de comandos se usa para crear y administrar proyectos en Angular?",
      "answers": {
        "false": "Node.js CLI",
        "true": "Angular CLI"
      }
    },
    {
      "question": "¿Qué directiva de Angular se usa para renderizar elementos condicionalmente?",
      "answers": {
        "false": "*ngFor",
        "true": "*ngIf"
      }
    },
    {
      "question": "¿Cómo se define un componente en Angular?",
      "answers": {
        "false": "Utilizando la función createComponent()",
        "true": "Usando el decorador @Component"
      }
    },
    {
      "question": "¿Qué característica diferencia a una aplicación SPA desarrollada con Angular?",
      "answers": {
        "true": "La navegación ocurre sin recargar la página",
        "false": "Cada sección de la aplicación requiere una recarga completa"
      }
    }
  ]  
  
}
