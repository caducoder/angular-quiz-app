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
  answerSelected = {}

  index: number = 0
  maxIndex: number = 0

  finished: boolean = false
  results = quiz_questions.results

  hackerType: string = ''
  hackerDescription: string = ''
  hackerGiph: string = ''

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
      this.checkResult()
    }
  }

  checkResult() {
    let aliasCount = {
      A: 0,
      B: 0,
      C: 0,
      D: 0
    }

    this.answers.map(op => aliasCount[op as keyof typeof aliasCount] += 1)

    let maior: [string, number] = ['', 0]
    Object.entries(aliasCount).forEach(qtd => qtd[1] > maior[1] ? maior = qtd : '')

    this.hackerType = this.results[maior[0] as keyof typeof this.results].label
    this.hackerDescription = this.results[maior[0] as keyof typeof this.results].description
    this.hackerGiph = this.results[maior[0] as keyof typeof this.results].giph
  }

}
