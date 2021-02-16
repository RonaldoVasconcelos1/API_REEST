import app from './app'

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Back-end on Linsten: ${port}`)
  console.log(`CTRL + click http://localhost:${port}`)
})
