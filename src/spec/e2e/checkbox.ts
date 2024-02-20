import { homeUrl, womenUrl } from "../../lib/pages";
//import { searchPhrase } from "../../lib/wordData";

describe("Lesson 2 automation tests - Checkbox", async () => {
    before(() => {
        browser.maximizeWindow();
    })
//pierwszy krok (it) Otwieramy stronę i sprawdzamy czy dobrze się otworzyła
    it("Should open automationpractice.pl page", async() => {
        await browser.url(homeUrl);//otwiera stronę homeUrl z ../../lib/pares.ts
        await expect(browser).toHaveUrl(homeUrl);//sprawdza czy otworzyła się właściwa strona - czy nie było redirect'a
    })
//drugi krok (it) znajdujemy przycisk "women" klikamy w niego i sprawdzamy czy otworzyła się właściwa strona    
    it("Should click on Women page and verify url", async () => {
        const womenPage:WebdriverIO.Element = await $("a[title='Women']");//wybieramy przycisk "Women"
        await womenPage.click();//klikamy w przycisk
        await expect(browser).toHaveUrl(womenUrl);//sprawdzamy, czy po kliknięciu rzeczywiście otworzyła się odpowiednia strona
    })
//trzeci krok wskazujemy checkbox na stronie z zaznaczamy go a następnie sprawdzamy, czy jest zaznaczony
    it("Should check Tops checkbox", async () => {
        const checkboxTops:WebdriverIO.Element = await $("#layered_category_4");
        await checkboxTops.click();
        await expect(checkboxTops).toBeSelected();
//        await expect(await checkboxTops.isSelected).toBeFalsy(); //dla czekboksów nieklikalnych
//        await browser.pause(2000);
        await checkboxTops.click();
        await expect(checkboxTops).not.toBeSelected();
//        await browser.pause(2000);
    })
//czwarty ktok sprawdzamy wiele czekboksów
    it("Should check multiple checkboxes", async () => {
        const checkboxesSize:WebdriverIO.ElementArray = await $$("#ul_layered_id_attribute_group_1 li input");
//zaznaczamy te czekboxy
        await checkboxesSize.map(async item => {
            await item.click();
        })
//sprawdzamy czy są zaznaczone
        await checkboxesSize.map(async item => {
            await expect(item).toBeSelected;
        })

//        await browser.pause(5000);
    })
})