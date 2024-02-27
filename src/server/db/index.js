import * as pg from "pg";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "postgres://default:Xvk6R7nqeGHV@ep-hidden-block-a1a4bfns.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
  {
    dialectModule: pg,
  }
);

const main = async () => {
  try {
    sequelize.authenticate().then((res) => console.log(res));
  } catch (error) {
    console.error(error);
  }
};

export default main;
