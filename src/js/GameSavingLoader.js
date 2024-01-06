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
  static load() {
    return read()
      .then((resolve) => json(resolve))
      .then((response) => JSON.parse(response));
  }
}
