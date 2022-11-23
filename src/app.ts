import express, { Application } from 'express'
import SetupsUtils from './Utils/Setups.utils'
const app: Application = express()

SetupsUtils(app)

app.get('/', (_req, res) => {
    res.status(200).json({ code: 200, statuse: 'OK', message: 'API serverpost run, By Mohamed Mostafa' })
})

export default app
