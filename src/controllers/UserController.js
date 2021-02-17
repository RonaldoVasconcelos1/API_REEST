import userModel from '../models/UserModel'
import encryptPassword from '../utils/Bcrypt'

class User {
   async list(o_request, o_response) {
    try {
      const o_users = await userModel.list()
      return o_response.json(o_users)
    } catch (error) {
      return o_response.status(400).end()
    }
  }

   async view(o_request, o_response) {
    try {
      const o_user = await userModel.view(o_request.params.id)
      if(!o_user) return o_response.status(404).end('User not found')
      return o_response.json(o_user)
    } catch (o_error) {
      console.log(o_error)
      return o_response.status(400).end()
    }
  }

   async viewByEmail(o_request, o_response) {
    return o_response.json({method: 'Email'})
  }

  async insert(o_request, o_response) {
    try {
      const o_user = o_request.body
      if(!o_user.nome) return o_response.status(400).end('Name Field is empty')
      if(!o_user.email) return o_response.status(400).end('Email Field is empty')
      if(!o_user.password) return o_response.status(400).end('password Field is empty')
      o_user.password = encryptPassword(o_user.password)
      const o_userCreate = await userModel.create(o_user)
      if(o_userCreate.constraint === 'users_email_unique') return o_response.status(400).end('Registered email')
      return o_response.status(204).end()

    } catch (o_error) {
      console.log(o_error)
      return o_response.status(400).end()
    }
  }

  async update(o_request, o_response) {
    try {
      const o_user = o_request.body
      if(!o_user) return o_response.status(400).end()
      const o_updateUser = await userModel.update(o_user, o_request.params.id)
      if(!o_updateUser) return o_response.status(404).end('User not found')
      return o_response.json(o_updateUser)

    } catch (error) {

    }

  }
}

export default new User()
