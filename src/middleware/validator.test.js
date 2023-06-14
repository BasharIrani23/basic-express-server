"use strict";

const supertest = require("supertest");
const { app } = require("../server");
const req = supertest(app);

describe("Validator test", () => {
    it("Missing name", async () => {
        const res = await req.get("/person");
        expect(res.status).toEqual(500);
    });

    it("Empty name", async () => {
        const res = await req.get("/person?name=");
        expect(res.status).toEqual(500);
    });

    it("Valid name", async () => {
        const res = await req.get("/person?name=fahad");
        expect(res.status).toEqual(200);
    });
});
