import { faker } from "@faker-js/faker";
import { tiktok_search } from "../../src";

test("Tiktok", async () => {
  const result = await tiktok_search(faker.animal.crocodilia());
  expect(result.status).toBe(200);
}, 30_000);