import userModel from './UserController'

class User {
  static async list(o_request, o_response) {
    return o_response.json({method: 'list'})
  }

  static async view(o_request, o_response) {
    return o_response.json({method: 'view'})
  }

  static async viewByEmail(o_request, o_response) {
    return o_response.json({method: 'Email'})
  }

  static async insert(o_request, o_response) {
    return o_response.json({method: 'insert'})
  }

  static async update(o_request, o_response) {
    return o_response.json({method: 'update'})
  }
}

export default new User()
