import db from '../database/index'

class User {
  async create(o_user) {
    try {
      const o_response = await db('users').insert(o_user);
      return o_response

    } catch (o_error) {
        return o_error
    }
  }
}
export default new User()
