/**
 * create a post api on the server side
 * client side send data via post
 * set fetch method inside the fetch options(second parameter)
 * options will have three things:method
 * options will have headers:'content-type':'application/json'
 * options will have  body without headers:JSON.stringify(user)
 * on the server side:don't forget to use express.json() middleware
 */