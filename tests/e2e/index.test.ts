import { http } from "msw";
import { test, expect } from "../playwright";

/**
 * Test: displays the page and the title
 */

test("displays the page and the title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("New Remix App");
});

/**
 * test: cache the text to kv
 */
test("cache the text to kv", async ({ page, wrangler }) => {
  await wrangler.env.cache.put("hello", "world");
  expect(await wrangler.env.cache.get("hello")).toBe("world");
  expect(await wrangler.env.cache.get("hello")).toContain("world");
});

/**
 * You can also mock the requests with MSW
 */
// test("fetch README from GitHub if not cached", async ({
//   page,
//   wrangler,
//   msw,
// }) => {
//   // Mock request
//   msw.use(
//     http.get(
//       "https://api.github.com/repos/edmundhung/remix-cloudflare-template/contents/README.md",
//       () => {
//         return Response.json({
//           type: "file",
//           content: btoa("# testing"),
//         });
//       },
//     ),
//   );

//   // Clear cache
//   await wrangler.env.cache.delete("github/README.md");

//   await page.goto("/");

//   const title = page.getByRole("heading", {
//     name: "testing",
//     level: 1,
//   });

//   await expect(title).toBeVisible();
// });
