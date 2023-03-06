import { Response } from 'express'

const serverError = (res: Response) => {
  return res.status(500).json({ message: 'Server Error' })
}

export default serverError
