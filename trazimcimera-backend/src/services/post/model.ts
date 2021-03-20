import "reflect-metadata";
import { connector as createConnection } from "../../connector";
import { Post } from "../../models/Post";
import { User } from "../../models/User";

// RETRIEVE ALL USERS FROM DB

export const getAllPosts = async () => {
  let connection;
  try {
    // establish connection
    const connection = await createConnection();

    // retrieve users
    //const posts = await connection.manager.find(Post);
    const posts = await connection.manager
      .getRepository(Post)
      .createQueryBuilder("post")
      .leftJoinAndSelect("post.author", "author")
      .leftJoinAndSelect("post.post_type", "post_type")
      .leftJoinAndSelect("post.images", "images")
      .getMany();

    // console.log("Loaded posts: ", posts);

    // close connection
    await connection.close();

    return posts;
  } catch (err) {
    // close connection if not yet closed
    if (connection && !connection.closed) {
      await connection.close();
    }

    return err;
  }
};

// REGISTER

export const getPostById = async ({ id }) => {
  let connection;
  try {
    // establish connection
    connection = await createConnection();

    // retrieve users
    const post = await connection.manager
      .getRepository(Post)
      .createQueryBuilder("post")
      .leftJoinAndSelect("post.author", "author")
      .leftJoinAndSelect("post.post_type", "post_type")
      .leftJoinAndSelect("post.images", "images")
      .where("post.post_id = :id", { id })
      .getOne();

    // console.log("Loaded post: ", post);

    // close connection
    await connection.close();

    return post;
  } catch (err) {
    // close connection if not yet closed
    if (connection && !connection.closed) {
      await connection.close();
    }

    return err;
  }
};

// LOGIN

export const createPost = async ({ postInfo }) => {
  let connection;
  try {
    const data = postInfo;
    const post = new Post();

    // establish connection
    connection = await createConnection();

    // try to retrieve author
    const author = await connection.manager.findOne(
      User,
      parseInt(data.author)
    );

    // author with given id does not exist
    if (!author) {
      throw new Error(`User not found`);
    }

    // set post fields to given fields
    post.author = data.author;
    post.post_type = data.post_type;
    post.description = data.description;
    post.address = data.address;
    post.rent = data.rent;
    post.num_of_roommates = data.num_of_roommates;
    post.images = data.images;

    // save post
    await connection.manager.save(post);

    //console.log(post);

    // close connection
    await connection.close();

    // get saved post
    const postReturn = getPostById({ id: post.post_id });

    return postReturn;
  } catch (err) {
    // close connection if not yet closed
    if (connection && !connection.closed) {
      await connection.close();
    }

    return err;
  }
};
