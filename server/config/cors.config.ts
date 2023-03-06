import { CorsOptions } from 'cors'

export default {
  allowedHeaders: [
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Credentials',
    'Access-Control-Allow-Headers',
    'Access-Control-Request-Headers',
    'Content-Type',
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
  ],
  credentials: true,
  origin:
    process.env.NODE_ENV === 'production'
      ? ['prod.example.com']
      : ['http://localhost:3000'],
} as CorsOptions
