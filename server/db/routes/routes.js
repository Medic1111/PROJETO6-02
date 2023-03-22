const router = require('express').Router()
const { 
  incorrectPassword,
  productsAPi,
  userLogin,
  userDelete,
  userRegister,
  resClient,
  err
} = require('../controllers/routes')

router 
  .route('/api/v1')
  .get(incorrectPassword)

router
  .route('/api/v1/products')
  .get(productsAPi)

router
  .route('/api/v1/auth/login')
  .post(userLogin)

router 
  .route("/api/v1/auth/delete")
  .delete(userDelete)

router 
  .route("/api/v1/auth/register")
  .post(userRegister)

router  
  .route("*")
  .get(resClient)

router 
  .route("/api/v1/error")
  .get(err)

module.exports = router