import HomePage from "../../pages/homePage";

describe("Lesson 7 automation tests - MoveTo and MoveIntoView", async () => {
  
    it("Should open automationpractice.pl page", async() => {
        await HomePage.openHomePage();
    })
//scrolowanie do ikonki
    it("Should scroll into view facebook icon", async () => {
        HomePage.moveToFbIcon();
//        const fbIcon:WebdriverIO.Element = await $("li.facebook");
//        await fbIcon.scrollIntoView();
   })
//najeżdzanie myszką
it("Should hover on women tab", async () => {
        const tabWomen:WebdriverIO.Element = await $(".sf-with-ul");
        await tabWomen.scrollIntoView();
        await tabWomen.moveTo();
     })
})