import axios from "axios";

describe("Main test", () => {
  test("Server berjalan dengan baik", async () => {
    const status = (await axios.get("https://api.agatz.xyz/")).status;
    expect(status).toBe(200)
  });
});