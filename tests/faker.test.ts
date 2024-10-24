import { faker } from "@faker-js/faker";

test("Faker", () => {
  const result = faker.animal.bird();
  expect(result).not.toBeNaN();
});