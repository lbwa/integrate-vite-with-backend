// @ts-check
const express = require('express')
const path = require('path')
const fs = require('fs')

const PORT = 8000
const app = express()

app.use('/', (req, res, next) => {
  res.send(
    fs
      .readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf8')
      .replace(/{{VITE_SERVE_URL}}/g, 'http://localhost:3000')
  )
})

app.listen(PORT, () => {
  process.stdout.write('Custom server is running at http://localhost:' + PORT)
})
