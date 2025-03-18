import { Component, input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsObjectService } from './questions-object.service';
import { Questions } from './questions-object.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
})
export class QuestionsComponent {
  valorRecibido = input<Boolean | undefined>();
  metodoCompartido = input<() => void>();
  @Output() objResult = new EventEmitter<{result: number,nextValue : Boolean}>();

  questionToShow: Questions | any;
  arrayOfAnwsers: Array<any> = [];
  counterQuestions: number = 0;
  correctAnwser: number = 0;
  botonValue: string = '';
  next: Boolean = true;

  constructor(readonly data: QuestionsObjectService) {
    this.questionToShow = null;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['valorRecibido'] &&
      changes['valorRecibido'].currentValue === true
    ) {
      this.questionToShowNext();
    }
  }

  getValue(event: Event) {
    console.log(this.botonValue); 
    this.botonValue = (event.target as HTMLButtonElement).value;
    if (this.botonValue === 'true') {
      this.correctAnwser++;
    }
  }

  questionToShowNext() {
    if (this.questionToShow === null) {
      this.questionToShow = this.data.data[this.counterQuestions];
      this.arrayOfAnwsers = Object.entries(this.questionToShow.answers);
      return;
    }
    this.counterQuestions++;
    if (this.counterQuestions === 6) {
      this.next = false;
      if (this.metodoCompartido()) {
        this.metodoCompartido()!();
      }

      this.objResult.emit({result: this.correctAnwser,nextValue: this.next});
    }else{
      this.questionToShow = this.data.data[this.counterQuestions];
      this.arrayOfAnwsers = Object.entries(this.questionToShow.answers);
    }
  }
}
