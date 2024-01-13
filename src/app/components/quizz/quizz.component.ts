import { Component, OnInit } from '@angular/core';
import quiz_questions from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
})
export class QuizzComponent implements OnInit {

  title: string = ''

  questions: any
  questionSelected: any

  answers: string[] = []
  answerSelected: string = ''

  index: number = 0
  maxIndex: number = 0

  finished: boolean = false

  ngOnInit(): void {
    if (quiz_questions) {
      this.finished = false
      this.title = quiz_questions.title
      this.questions = quiz_questions.questions
      this.questionSelected = this.questions[this.index]

      this.index = 0
      this.maxIndex = this.questions.length
    }
  }

  selectOption(value: string) {
    this.answers.push(value)
    this.index += 1

    if (this.maxIndex > this.index) {
      this.questionSelected = this.questions[this.index]
    } else {
      this.finished = true
    }
  }

}
