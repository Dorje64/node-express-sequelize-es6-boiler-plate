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
