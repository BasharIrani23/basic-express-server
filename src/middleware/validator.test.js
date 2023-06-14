"use strict";

const supertest = require("supertest");
const { app } = require("../server");
const req = supertest(app);

describe("Validator test", () => {
    it("handle name", async () => {
        const res = await req.get("/person?name=bashar");
        expect(res.status).toEqual(200);
    });
    it("NO name", async () => {
        const res = await req.get("/person?name=");
        expect(res.status).toEqual(500);
    });
    it("handle name", async () => {
        const res = await req.get("/person?name=fahad");
        console.log(res);
        expect(res.body.name).toEqual("fahad");
    });
});
