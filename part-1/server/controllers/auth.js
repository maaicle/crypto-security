//Need to require bcrypt for encryption to work
const bcrypt = require("bcrypt");
//Store users here.
const users = [];

module.exports = {
  //This function works when someone attempts to login.
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)

      //Deconstruct the username and password fields from the body
      const { username, password } = req.body

      //Loop through each user in the users array.
      for (let i = 0; i < users.length; i++) {
        //Have bcrypt check to see if the password being passed through the request is the same as password stored in user iteration.
        const existingPassword = bcrypt.compareSync(password, users[i].passHash)
        //Check if password username and password matches
        if (users[i].username === username && existingPassword) {
          //Clone the user object but remove the hash, and then send it back in the response. 
          let securedMessage = {...users[i]};
          delete securedMessage.passHash;
          res.status(200).send(securedMessage);
          return //This insures nothing else is ran.
        }
      }
      //Send back a message if username and passwords don't match any users
      console.log("User not Found");
      res.status(400).send("User not found.")
    },

    //This is ran when someone registers on the site.
    register: (req, res) => {
      //Deconstrcut the body object
      const {username, email, firstName, lastName, password} = req.body;
      //Create a key and then hash out the password. Store in a variable. 
      const salt = bcrypt.genSaltSync(5);
      const passHash = bcrypt.hashSync(password, salt);
      //create a new objec that contains all attributes as the body except the password is replaced with the hash.
      let userObject = {
        username,
        email,
        firstName,
        lastName,
        passHash
      }
      //clone the userObject and remove hash to pass to front end.
      let securedMessage = {...userObject};
      delete securedMessage.passHash;
      res.status(200).send(securedMessage);
      //Log a message to se the user was registered. Push the user into the users array.
      console.log('Registering User')
      users.push(userObject)
    }
}