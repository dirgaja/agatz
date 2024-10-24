import { faker } from "@faker-js/faker";
import { pinterest_search } from "../../src";

test("Pinterest", async () => {
  const result = await pinterest_search(faker.animal.crocodilia());
  expect(result.status).toBe(200);
}, 30_000);