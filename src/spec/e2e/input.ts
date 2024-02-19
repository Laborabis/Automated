import { homeUrl } from "../../lib/pages";
 

describe("Lesson 1 automation tests - Input", async () => {
    before(() => {
        browser.maximizeWindow();
    })

    afterEach(() => {

    })
    
    it("Should open automationpractice.pl page", async() => {
        await browser.url(homeUrl);
        await browser.pause(2000);
    })
})