import { homeUrl } from "../../lib/pages";

describe("Lesson 7 automation tests - MoveTo and MoveIntoView", async () => {
    
    it("Should open automationpractice.pl page", async() => {
        await browser.url(homeUrl);//otwiera stronę homeUrl z ../../lib/pares.ts
        await expect(browser).toHaveUrl(homeUrl);//sprawdza czy otworzyła się właściwa strona
    })
//scrolowanie do ikonki
    it("Should scroll into view facebook icon", async () => {
        const fbIcon:WebdriverIO.Element = await $("li.facebook");
        await fbIcon.scrollIntoView();
   })
//najeżdzanie myszką
it("Should hover on women tab", async () => {
        const tabWomen:WebdriverIO.Element = await $(".sf-with-ul");
        await tabWomen.scrollIntoView();
        await tabWomen.moveTo();
     })
})