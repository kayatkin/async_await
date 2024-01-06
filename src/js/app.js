import GameSavingLoader from "./GameSavingLoader";

export default function displayGameSaving() {
  return GameSavingLoader.load().then(
    (response) => {
      console.log(
        "promise - result load(): user name ",
        response.userInfo.name
      );
    },
    (error) => {
      console.log(error);
    }
  );
}

displayGameSaving();
