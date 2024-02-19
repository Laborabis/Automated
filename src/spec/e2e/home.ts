//Grupa przypadków testowych
describe("Verifi Home Page Google", async () => {
    it("Should open Google page and wait for 3000 ms", async () => {
        await browser.url("https://google.com");
        await browser.pause(3000);
    })
})