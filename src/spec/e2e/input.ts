import { homeUrl } from "../../lib/pages";
import { searchPhrase, homePageTitle } from "../../lib/wordData";

describe("Lesson 1 automation tests - Input", async () => {
    before(() => {
        browser.maximizeWindow();
    })

    afterEach(() => {

    })
//pierwszy krok (it) Otwieramy stronę i sprawdzamy kilka jej właściwości (metod)
    it("Should open automationpractice.pl page", async() => {
        await browser.url(homeUrl);//otwiera stronę homeUrl z ../../lib/pares.ts
        await expect(browser).toHaveUrl(homeUrl);//sprawdza czy otworzyła się właściwa strona - czy nie było redirect'a
        await expect(browser).toHaveTitle(homePageTitle);
    })
    it("Schould type value to search input", async () => {
//zmienna input przechowuje element do którego się odwołujemy: tu input
        const input:WebdriverIO.Element = await $("#search_query_top");
        await input.setValue(searchPhrase);//ustawia wartość inputa na "Summer Dress"
        expect(await input.getValue()).toContain(searchPhrase);//sprawdza czy wartość inputa = "Summer Dress" - ustawiona w wordData
    })
    it("Should clear search input", async () => {
        const input:WebdriverIO.Element = await $("#search_query_top");
        await input.clearValue();//usuwa wartość inputa 
        expect(await input.getValue()).toContain("");//sprawdza czy wartość inputa = ""
   })
})