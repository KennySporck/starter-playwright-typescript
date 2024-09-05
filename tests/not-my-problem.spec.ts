import { test } from "@framework/test.js";
import { expect } from "@playwright/test";

test.use({
  baseURL: "https://notmyproblem.cloud/",
});

test.describe("Not my problem", () => {
  test("GET /api/v1/notmyproblem", async ({ request }) => {
    const response = await request.get("/api/v1/notmyproblem");
    const json = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(json).toEqual(
      expect.objectContaining({
        data: {
          message: {
            response: expect.stringContaining("Not my problem: "),
          },
          status: expect.stringContaining("Not my problem"),
          reason: expect.any(String),
        },
      }),
    );
  });
});
