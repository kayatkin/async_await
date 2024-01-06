import GameSavingLoader from "./GameSavingLoader";

const displayGameSaving = async () => {
  try {
    const response = await GameSavingLoader.load();
    console.log("async - result load(): user name ", response.userInfo.name);
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await displayGameSaving();
})();
