import * as UserController from '../controllers/user_controller';
module.exports = (app) => {
  app.get('/v1/users', UserController.getAll )
  app.post('/v1/users/register', UserController.register)
  // app.get('/v1/users/1', function( req, res ){
  //   res.send('ffff')
  // })
}
