import { expect, test } from "@playwright/test";

test("renders the opening slide and slide map", async ({ page }) => {
  const consoleErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: "From the Rift to the World" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "League history in 9 beats" })).toBeVisible();
  await expect(page.getByText("9 slides from 2006 to 2024.")).toBeVisible();
  await expect(page.locator(".presentation-progress__link")).toHaveCount(9);
  await expect(page.getByLabel("Fan project notice")).toContainText("Riot Games does not endorse or sponsor this project.");

  expect(consoleErrors).toEqual([]);
});

test("navigates through slides and reaches the closing beat", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "09 The Rift Is Still Open" }).click();
  await expect(page).toHaveURL(/#slide-legacy$/);
  await expect(page.getByRole("heading", { level: 2, name: "The Rift Is Still Open" })).toBeVisible();

  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));

  await expect(page.getByText("League began as a battle for the Nexus.")).toBeVisible();
});

test("renders one shipped image per slide with alt text", async ({ page }) => {
  await page.goto("/");

  const images = page.locator("img");
  await expect(images).toHaveCount(9);

  const alts = await images.evaluateAll((nodes) => nodes.map((node) => node.getAttribute("alt") ?? ""));
  expect(alts.every((alt) => alt.trim().length > 0)).toBe(true);
});

test("keeps slide content visible for reduced-motion users", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.locator(".reveal").first()).toHaveClass(/reveal--visible/);
  await page.getByRole("link", { name: "05 From DreamHack to a Global Stage" }).click();
  await expect(page).toHaveURL(/#slide-esports-scale$/);
  await expect(page.getByRole("heading", { level: 2, name: "From DreamHack to a Global Stage" })).toBeVisible();
});