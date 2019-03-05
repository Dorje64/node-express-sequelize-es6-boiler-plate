import models from '../models';
export function getAll(req , res) {
  models.User.findAll()
    .then( users => {
      console.log(users)
      res.send(users)
    })
    .catch(err => {
      console.log(users)
      res.send(err)
    })
}

export function register(req, res) {
  models.User.create(req.body)
    .then( user => {
      res.send(user)
    })
    .catch( err => {
      res.send(err)
    })
}
