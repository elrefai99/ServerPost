import cors from 'cors'
import express, { Application } from 'express'
import helmet from 'helmet'

export default (app: Application) => {
    app.use(express.json())
    app.use(cors({
        origin: '*',
    }))
    app.use(helmet())
}
