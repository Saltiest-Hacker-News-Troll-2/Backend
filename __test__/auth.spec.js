const request = require("supertest");
const server = require("../server/server");
const db = require("../database/config");

const users = {
  init: {
    first_name: "Jack",
    last_name: "Barry",
    email: "test@email.com",
    username: "jackTest",
    password: "password"
  },
  new: {
    first_name: "Fred",
    last_name: "Fitzgerald",
    email: "testing@email.com",
    username: "fredFitz",
    password: "password"
  },
  sameUser: {
    first_name: "Jack",
    last_name: "Barry",
    email: "jackBarry@email.com",
    username: "jackTest",
    password: "password"
  }
};

// expect(Array.isArray(res.body)) Object.isObject?

beforeEach(async () => {
  await db("User").truncate();
  await request(server)
    .post("/api/auth/register")
    .send(users.init);
});

// * REGISTER ROUTE
describe("Auth route", () => {
  it("should return status code 200", async () => {
    const expectedStatusCode = 200;
    const response = await request(server).get("/api/auth/register");
    expect(response.status).toEqual(expectedStatusCode);
  });

  it("should return a JSON format", async () => {
    const response = await request(server).get("/api/auth/register");
    expect(response.type).toMatch(/json/);
  });

  it("should return expected response", async () => {
    const expectedBody = { authRoute: "up" };
    const response = await request(server).get("/api/auth/register");
    expect(response.body).toEqual(expectedBody);
  });

  describe("successful register", () => {
    it("should return status code 201", async () => {
      const expectedStatusCode = 201;
      const response = await request(server)
        .post("/api/auth/register")
        .send(users.new);
      // console.log(response)
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return created user", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .send(users.new);

      const expectedBody = {
        ...response.body.user[0],
        first_name: "Fred",
        last_name: "Fitzgerald",
        username: "fredFitz"
      };

      expect(response.body.user[0]).toEqual(expectedBody);
    });
  });

  describe("unsuccessful register", () => {
    it("should return code 400", async () => {
      const expectedStatusCode = 400;

      const response = await request(server)
        .post("/api/auth/register")
        .send(users.sameEmail);
      expect(expectedStatusCode).toEqual(response.status);
    });

    it("should return same-username error", async () => {
      const expectedBody = { errorMessage: "username already in use" };
      const response = await request(server)
        .post("/api/auth/register")
        .send(users.sameUser);
      expect(response.body).toEqual(expectedBody);
    });
  });

  //   //* LOGIN
  describe("Successful Login", () => {
    it("should return status code 200", async () => {
      const expectedStatusCode = 200;
      const response = await request(server)
        .post("/api/auth/login")
        .send({
          username: users.init.username,
          password: users.init.password
        });
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON format", async () => {
      const response = await request(server)
        .post("/api/auth/login")
        .send({ username: "jackTest", password: "password" });
      expect(response.type).toMatch(/json/);
    });

    it("should return user jackTest", async () => {
      const response = await request(server)
        .post("/api/auth/login")
        .send({
          username: "jackTest",
          password: "password"
        });
      const expectedBody = {
        ...response.body.user,
        first_name: "Jack",
        last_name: "Barry",
        email: "test@email.com",
        username: "jackTest"
      };
      expect(response.body.user).toEqual(expectedBody);
    });
  });
  describe("Unsuccessful Login", () => {
    it("should return status 403", async () => {
      const expectedStatus = 403;
      const response = await request(server)
        .post("/api/auth/login")
        .send({
          username: "jackWrong",
          password: "password"
        });

      expect(response.status).toEqual(expectedStatus);
    });

    it("should return json format", async () => {
      const response = await request(server)
        .post("/api/auth/login")
        .send({ username: "jackTest", password: "wrongPass" });

      expect(response.type).toMatch(/json/);
    });

    it("should return error message on wrong username", async () => {
      const expectedBody = { errorMessage: "incorrect credentials" };
      const response = await request(server)
        .post("/api/auth/login")
        .send({ username: "jackWrong", password: "password" });
      expect(response.body).toEqual(expectedBody);
    });

    it("should return error message on wrong password", async () => {
      const expectedBody = { errorMessage: "Incorrect Credentials" };
      const response = await request(server)
        .post("/api/auth/login")
        .send({ username: "jackTest", password: "wrongPass" });
      expect(response.body).toEqual(expectedBody);
    });
  });
});
