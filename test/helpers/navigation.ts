export async function waitForUrlToContain(substring: string, timeout = 15000) {
  await browser.waitUntil(
    async () => (await browser.getUrl()).includes(substring),
    {
      timeout,
      timeoutMsg: `Expected URL to contain '${substring}', but it did not change in time`,
    }
  );
}