import db from '../database/index'

class User {
  async list() {
    try {
      const o_users = await db('users').select('*')
      return o_users
    } catch (o_error) {
      return o_error
    }
  }

  async create(o_user) {
    try {
      const o_response = await db('users').insert(o_user);
      return o_response

    } catch (o_error) {
        return o_error
    }
  }

  async view(userId) {
    try {
      const o_user = await db('users')
      .where({ id : userId })
      .first()
      return o_user

    } catch (o_error) {
        return o_error
    }
  }

  async update(o_user, userId) {
    try {
      const o_response = await db('users')
      .update(o_user)
      .where({ id : userId })
      return o_response
    } catch (o_error) {
        return o_error
    }
  }
}
export default new User()
