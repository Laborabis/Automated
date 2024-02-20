import { homeUrl } from "../../lib/pages";

describe("Lesson 3 automation tests - Select", async () => {
//pierwszy krok (it) Otwieramy stronę i sprawdzamy czy dobrze się otworzyła
    it("Should open automationpractice.pl page", async() => {
        await browser.url(homeUrl);//otwiera stronę homeUrl z ../../lib/pares.ts
        await expect(browser).toHaveUrl(homeUrl);//sprawdza czy otworzyła się właściwa strona - czy nie było redirect'a
    })
//wybieramy okienko filtrowania i wpisujemy w niego "Dress"
    it("Schould type value to search input", async () => {
        const input:WebdriverIO.Element = await $("#search_query_top");
        await input.setValue("Dress");//ustawia wartość inputa na "Dress"
    })
//wybieramy i wciskamy przycisk filtrowania
    it("Should click od the Search button", async () => {
    const buttonSearch:WebdriverIO.Element = await $("#searchbox button");
    await buttonSearch.click();
    })
//wybieramy i wciskamy pierwszy znaleziony produkt przechodząc do strony produktu
    it("Should click od the first finded product", async () => {
    const buttonSearch:WebdriverIO.Element = await $(".product_img_link ");
    const productAdresUrl = await buttonSearch.getAttribute('href');
    await browser.url(productAdresUrl);
    })
//kliknięcie na dropbox (OPIEKT SELECT) Size wybranie rozmiaru i sprawdzenie, czy został wybrany
    it("Should select product size", async () => {
    const selectSize:WebdriverIO.Element = await $("#group_1");
    //pierwsza metoda sprawdzania selektorów: po atrybutach
    await selectSize.selectByAttribute("value", "2");//wybrane po value
    await expect(await selectSize.getValue()).toContain("2");
    await selectSize.selectByAttribute("title", "S");//wybrane po title
    await expect(await selectSize.getValue()).toContain("1");
    await selectSize.selectByVisibleText("L");//wybrane po widocznym tekście
    await expect(await selectSize.getValue()).toContain("3");
    await selectSize.selectByIndex(0);//wybrane po indeksie
    await expect(await selectSize.getValue()).toContain("1");
    })


})
