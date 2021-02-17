// import userModel from '../models/UserModel'

class Student {
  async list(o_request, o_response) {
    return o_response.json({method: 'list'})
  }

  async view(o_request, o_response) {
    return o_response.json({method: 'view'})
  }

  async insert(o_request, o_response) {
  }

  async update(o_request, o_response) {
    return o_response.json({method: 'update'})
  }

  async delete(o_request, o_response) {
    return o_response.json({method: 'delete'})
  }
}
export default new Student()
