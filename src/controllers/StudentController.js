import studentModel from '../controllers/studentModel'

class Student {
  static async list(o_request, o_response) {
    return o_response.json({method: 'list'})
  }

  static async view(o_request, o_response) {
    return o_response.json({method: 'view'})
  }

  static async insert(o_request, o_response) {
    return o_response.json({method: 'insert'})
  }

  static async update(o_request, o_response) {
    return o_response.json({method: 'update'})
  }
}
export default new Student()
