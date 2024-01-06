import json from "./parser";
import read from "./reader";

const gameSavingStructure = {
  id: "<number>", // id сохранения
  created: "<timestamp>", // timestamp создания
  userInfo: {
    id: "<number>", // user id
    name: "<string>", // user name
    level: "<number>", // user level
    points: "<number>", // user points
  },
};

console.log(gameSavingStructure);

export default class GameSavingLoader {
  static async load() {
    try {
      const resolve = await read();
      const response = await json(resolve);
      return JSON.parse(response);
    } catch (error) {
      throw new Error(error);
    }
  }
}
