import GameSavingLoader from "../GameSavingLoader";

jest.setTimeout(15000);

test("should return promise for load() - using async/await", async () => {
  await expect(GameSavingLoader.load()).resolves.toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  });
}, 10000);

test("should catch an error for load()", async () => {
  GameSavingLoader.load = jest.fn().mockRejectedValue(new Error("Error"));

  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error.message).toBe("Error");
  }
}, 10000);
