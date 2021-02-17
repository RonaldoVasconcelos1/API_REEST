class HomeController {
  index(req, res) {
    res.json({
      method: 'Get',
      apresentation: 'Hello, welcome to API_REST',
      author: 'Ronaldo Vasconcelos the computer science student'
    })
  }
}
export default new HomeController()
