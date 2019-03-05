import * as UserController from '../controllers/user_controller';
module.exports = (app) => {
  app.get('/v1/users', UserController.getAll )
  // app.get('/v1/users/1', function( req, res ){
  //   res.send('ffff')
  // })
}
