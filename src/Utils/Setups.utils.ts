import cors from 'cookie-parser'
import express, { Application } from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

export default (app: Application) => {
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(cookieParser())
}
