import userModel from '../models/UserModel'
import encryptPassword from '../utils/Bcrypt'

class User {
   async list(o_request, o_response) {
    return o_response.json({method: 'list'})
  }

   async view(o_request, o_response) {
    return o_response.json({method: 'view'})
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
    return o_response.json({method: 'update'})
  }
}

export default new User()
