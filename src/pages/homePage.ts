import { homeUrl } from "../lib/pages";

class HomePage {
    
    async openHomePage() {
        await browser.url(homeUrl);
        await expect(browser).toHaveUrl(homeUrl);
    }

    async moveToFbIcon() {
        const icon:WebdriverIO.Element = await $("li.facebook");
        await icon.waitForDisplayed(); //zaczekaj aż będzie widoczny
        await icon.scrollIntoView();
    }
}

export default new HomePage();
