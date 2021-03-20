import "reflect-metadata";
import { connector as createConnection } from "../../connector";
import { User } from "../../models/User";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// RETRIEVE ALL USERS FROM DB

export const getAllUsers = async () => {
  let connection;
  try {
    // establish connection
    connection = await createConnection();

    // retrieve users
    const users = await connection.manager.find(User);

    // delete password field from all users
    users.forEach((user) => {
      delete user.password;
    });
    // console.log("Loaded users: ", users);

    // close connection
    await connection.close();

    return users;
  } catch (err) {

    // close connection if not yet closed
    if (connection && !connection.closed) {
      await connection.close();
    }

    return err;
  }
};

// get specific user
export const getUserById = async ({ id }) => {
  let connection;
  try {
    // establish connection
    connection = await createConnection();
    
    // retrieve users
    const user = await connection.manager.findOne(User, id);

    // delete password field from user
    delete user.password;

    // console.log("Loaded users: ", users);

    // close connection
    await connection.close();

    return user;
  } catch (err) {

    // close connection if not yet closed
    if (connection && !connection.closed) {
      await connection.close();
    }

    return err;
  }
};

// REGISTER

export const registerUser = async ({ user }) => {
  let connection;
  try {
    // establish connection
    connection = await createConnection();
    
    // check if username is taken
    const userExists = connection.manager.findOne(User, {
      username: user.username,
    });

    if (!userExists) {
      throw new Error(`Username taken`);
    }

    // hash password
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;

    let newUser = new User();

    // copy user object
    Object.keys(user).forEach((key) => {
      newUser[key] = user[key];
    });

    // save new user
    await connection.manager.save(newUser);

    // close connection
    await connection.close();

    return `Successfully registered user ${user.username}`;
    
  } catch (err) {

    // close connection if not yet closed
    if (connection && !connection.closed) {
      await connection.close();
    }

    return err;
  }
};

// LOGIN

export const loginUser = async ({ username, password }) => {
  let connection;
  try {
    // establish connection
    connection = await createConnection();
    // find user with given username
    const user = await connection.manager.findOne(User, {
      username: username,
    });

    // close connection
    await connection.close();

    // did not find user matching given username
    if (!user) {
      throw new Error(`Username or password incorect!`);
    }

    // compare given password and hashed database password
    const result = await bcrypt.compare(password, user.password);

    // passwords didn't match
    if (!result) {
      throw new Error(`Username or password incorect!`);
    }

    // sign new token for 1 hour
    // TODO get secret key from process.env
    const payload = {
      id: user.user_id,
      username: user.username,
    };

    const options = {
      expiresIn: "1d",
    };

    const token = await jwt.sign(payload, process.env.SECRET, options);

    // console.log(token);

    return { token, id: user.user_id, username: user.username };
  } catch (err) {

    // close connection if not yet closed
    if (connection && !connection.closed) {
      await connection.close();
    }

    return err;
  }
};
