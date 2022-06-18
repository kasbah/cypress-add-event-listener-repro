import { test as base, expect, chromium } from "@playwright/test";
import path from "path";

export const test = base.extend({
  context: async ({ browserName }, use) => {
    const browserTypes = { chromium };
    const pathToExtension = path.join(process.cwd(), "web-extension/");
    const userDataDir = "/tmp/test-user-data-dir";
    const context = await browserTypes[browserName].launchPersistentContext(
      userDataDir,
      {
        headless: false,
        args: [
          `--disable-extensions-except=${pathToExtension}`,
          `--load-extension=${pathToExtension}`,
        ],
      }
    );
    await use(context);
    await context.close();
  },
});

test.only("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.locator("body")).toHaveText(
    'Got message: "hello from content-script"'
  );
});
