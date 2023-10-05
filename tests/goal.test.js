const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../backend/app");
const api = supertest(app);
const User = require("../backend/models/userModel");
const Goal = require("../backend/models/goalModel");
const goals = require("./data/goals.js");
const users = require("./data/users");

let token = null

beforeAll(async () => {
    await User.deleteMany({});
    const result = await api
      .post("/api/users")
      .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
    token = result.body.token;
  });

describe("login test", ()=> {
    it("responds with 200", async () => {
    await api
        .post("api/users/login")
        .send({email: "mattiv@matti.fi", password: "R3g5T7#gh"})
        .expect(200)
})
})