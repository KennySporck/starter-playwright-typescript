import { test } from "@framework/test.js";
import { expect } from "@playwright/test";

test.use({
  baseURL: "https://notmyproblem.cloud/",
});

test.describe("NotMyProblem - NotMyProblem", () => {
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

test.describe("NotMyProblem - Reasons", () => {
  test("GET /api/v1/reasons", async ({ request }) => {
    const response = await request.get("/api/v1/reasons");
    const json = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(json).toEqual(
      expect.objectContaining({
        data: expect.arrayContaining([
          {
            id: expect.any(Number),
            reason: expect.any(String),
            status: expect.stringContaining("Not my problem"),
          },
        ]),
      }),
    );
    expect(json.data.length).toBeGreaterThan(0);
    expect(json.limit).toBe(25);
    expect(json.size).toBeGreaterThan(0);
  });

  test("GET /api/v1/reasons?cursor=5573", async ({ request }) => {
    const response = await request.get("/api/v1/reasons?cursor=5573");
    const json = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(json).toEqual(
      expect.objectContaining({
        data: expect.arrayContaining([
          {
            id: 5572,
            reason: expect.any(String),
            status: expect.stringContaining("Not my problem"),
          },
        ]),
      }),
    );
    expect(json.data.length).toBeGreaterThan(0);
    expect(json.limit).toBe(25);
    expect(json.size).toBeGreaterThan(0);
  });

  test("GET /api/v1/reasons?limit=1000", async ({ request }) => {
    const response = await request.get("/api/v1/reasons?limit=1000");
    const json = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(json.data.length).toBe(100);
    expect(json.limit).toBe(100);
    expect(json.size).toBe(100);
  });
});
