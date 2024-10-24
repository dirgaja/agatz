import { faker } from "@faker-js/faker";
import { gemini } from "../../src";

test("Gemini", async () => {
  const result = await gemini(faker.word.words());
  expect(result.status).toBe(200);
}, 30_000);