class HomeController {
  index(req, res) {
    res.json({title: 'Olá'})
  }
}
export default new HomeController()
