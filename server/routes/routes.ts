import express from 'express'
import fs from 'fs'
import path from 'path'
import serverError from '../global/sever.error'
import { QuestionList } from '../type/QuestionModel'

const routes = express.Router()
const questionPath = path.join(__dirname, '../../mock-data', 'questions.json')

/** Returning 30 questions*/
const getQuestionList = (): QuestionList => {
  return JSON.parse(
    fs.readFileSync(questionPath, { encoding: 'utf-8' })
  ) as QuestionList
}

routes.get('/question/:questionNumber', async (req, res) => {
  try {
    const { questionNumber } = req.params
    const { category, question } = getQuestionList().results[+questionNumber]
    return res.status(200).json({ category, question })
  } catch (e) {
    serverError(res)
  }
})

routes.get('/validate', (req, res) => {
  try {
    const { questionIndex, answerResponse } = req.query
    const { correct_answer: correctAnswer, question } =
      getQuestionList().results[Number(questionIndex)]

    if (correctAnswer !== answerResponse)
      return res.status(200).json({
        question,
        questionIndex: Number(questionIndex),
        correctAnswer,
        answerResponse,
        isAttemptCorrect: false,
      })

    return res.status(200).json({
      question,
      questionIndex: Number(questionIndex),
      correctAnswer,
      answerResponse,
      isAttemptCorrect: true,
    })
  } catch (e) {
    serverError(res)
  }
})

export default routes
