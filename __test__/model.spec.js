const model = require("../database/model");

describe("UsersModel", () => {
  beforeEach(async () => {
    await model.userTruncate();
    await model.addUser({ username: "Panda", password: "Bamboo" });
  });

  it("should return an single user", async () => {
    let userList = await model.userList();
    expect(userList).toHaveLength(1);
  });

  it("should return user by id", async () => {
    const expectedUser = "Panda";
    const result = await model.findUserById(1);
    expect(result.username).toBe(expectedUser);
  });

  it("should return Panda user", async () => {
    const expectedUser = "Panda";
    const result = await model.findUserByUsername(expectedUser);
    expect(result.username).toEqual(expectedUser);
  });

  it("should create new user", async () => {
    let user = await model.addUser({
      username: "Fred",
      password: "password"
    });
    expect(user.username).toBe("Fred");
    expect(user.password).toBe("password");
  });

  it("should update Panda to Koala", async () => {
    const updatedUser = { username: "Koala", password: "Candy" };
    await model.updateUser(1, updatedUser);
    const result = await model.findUserById(1);
    expect(result.username).toEqual(updatedUser.username);
    expect(result.password).toEqual(updatedUser.password);
  });

  it("should remove user by id", async () => {
    const expectedResult = 1;
    const result = await model.removeUser(1);
    expect(result).toEqual(expectedResult);
  });
});
