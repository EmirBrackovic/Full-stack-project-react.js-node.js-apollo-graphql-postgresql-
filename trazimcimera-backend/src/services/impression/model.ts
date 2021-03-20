import "reflect-metadata";
import { connector as createConnection } from "../../connector";
import { Impression } from "../../models/Impression";

// RETRIEVE ALL USERS FROM DB

export const getAllImpressions = async () => {
  let connection;
  try {
    // establish connection
    connection = await createConnection();

    // retrieve users
    const impressions = await connection.manager.getRepository(Impression).createQueryBuilder("impression")
    .leftJoinAndSelect("impression.contact", "contact").getMany();

    // close connection
    await connection.close();

    return impressions;
  } catch (err) {

    // close connection if not yet closed
    if (connection && !connection.closed) {
      await connection.close();
    }

    return err;
  }
};

export const getImpressionById = async ({ id }) => {
  let connection;
  try {
    // establish connection
    connection = await createConnection();

    // retrieve impressions
    const impression = await connection.manager.getRepository(Impression).createQueryBuilder("imp")
    .leftJoinAndSelect("imp.contact", "contact").where("imp.impression_id = :id", { id }).getOne();

    // close connection
    await connection.close();

    return impression;
  } catch (err) {

    // close connection if not yet closed
    if (connection && !connection.closed) {
      await connection.close();
    }

    return err;
  }
};