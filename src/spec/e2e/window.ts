import { homeUrl, womenUrl } from "../../lib/pages";
import { womenPageTitle, homePageTitle } from "../../lib/wordData";

describe("Lesson 4 automation tests - window operations", async () => {
//pierwszy krok (it) Otwieramy stronę i sprawdzamy czy dobrze się otworzyła     
    it("Should open automationpractice.pl page", async() => {
        await browser.url(homeUrl);//otwiera stronę homeUrl z ../../lib/pares.ts
        await expect(browser).toHaveUrl(homeUrl);//sprawdza czy otworzyła się właściwa strona - czy nie było redirect'a
    })
//drugi krok otwieramy nową kartę z adresem womenUrl    
    it("Should open woman page in new winow (card)", async () => {
    await browser.newWindow(womenUrl);
    })    
//trzeci krok sprawdzamy, czy otwarte są 2 właściwe karty
    it("Should verify title pages", async () => {
        const openWindows = await browser.getWindowHandles();
        await browser.switchToWindow(openWindows[0]);
        await expect(browser).toHaveTitle(homePageTitle);//sprawdzamy, czy nazwa pierwszej zakładki to "My Shop"
        await browser.switchToWindow(openWindows[1]);
        await expect(browser).toHaveTitle(womenPageTitle);//sprawdzamy, czy nazwa drugiej zakładki to "Women - My Shop"   
    })
})    