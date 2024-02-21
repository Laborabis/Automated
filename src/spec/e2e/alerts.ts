import { alertHomePage } from "../../lib/pages";

describe("Lesson 5 automation tests - Alerts", async () => {
    //otwieranie strony alert i sprawdzenie, czy strona się otworzyła
    it("Should open Alert home page and verify url", async () => {
        await browser.url(alertHomePage);
        await expect(browser).toHaveUrl(alertHomePage);
    })
    //otwieranie strony alert i sprawdzenie, czy strona się otworzyła
    it("Should find and click on the Button and get text from the Alert", async () => {
        const button1:WebdriverIO.Element = await $("[onclick='alertbox()'");
        await button1.click();
        const alertText:string = await browser.getAlertText();
        console.log(await alertText);
        await expect(await alertText).toContain("I am an alert box!");
        await expect(await browser.isAlertOpen()).toBeTruthy();
        await browser.acceptAlert();
        await expect(await browser.isAlertOpen()).toBeFalsy();
    })
    it("Should veryfi confirm Alert", async () => {
        const tabConfigAlert:WebdriverIO.Element = await $("ul.nav-tabs > li:nth-child(2)");
        //inny sposób do odwołania po terście w elemencie: a[contains(text(), "Alert with OK & Cancel ")]
        await tabConfigAlert.click();
        const button2:WebdriverIO.Element = await $("button.btn-primary");
        await button2.click();
        await expect(await browser.isAlertOpen()).toBeTruthy();
        await browser.dismissAlert();
        const validationElement:WebdriverIO.Element = await $("#demo");
        const validationMessage:string = await validationElement.getText();
        await expect(await validationMessage).toContain("You Pressed Cancel");
    })
    it("Should veryfi prompt Alert", async () => {
        const tabPromptAlert:WebdriverIO.Element = await $("ul.nav-tabs > li:nth-child(3)");
        //inny sposób do odwołania po terście w elemencie: a[contains(text(), "Alert with OK & Cancel ")]
        await tabPromptAlert.click();
        const button:WebdriverIO.Element = await $(".btn-info");
        await button.click();
//        await expect(await browser.isAlertOpen()).toBeTruthy();
        await browser.sendAlertText("Adam"); 
        await browser.acceptAlert;
        const validationText:WebdriverIO.Element = await $("#demo1");
        await expect(await validationText.getText()).toContain("");
    })
})    