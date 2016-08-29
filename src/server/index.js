import app from './app'

const PORT = process.env.PORT || app.get('port')

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
