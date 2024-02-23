import { uploaderUrl } from "../../lib/pages";


describe("Lesson 6 Upload File", async () => {
        it("Should open uploader page and verify url", async () => {
        await browser.url(uploaderUrl);
        await expect (browser).toHaveUrl(uploaderUrl);
    })
    it("Should upload file and clicka upload button", async () => {
        const input:WebdriverIO.Element = await $("#file-upload");
        const btnUpload:WebdriverIO.Element = await $("#file-submit");
 
        await input.setValue ("D:/GIT/Automated/src/images/ziemia.jpg");//(uploadedFile);
        await btnUpload.click();
        const h3:WebdriverIO.Element = await $("div#content h3");
        await expect(await h3.getText()).toContain("File Uploaded!");
        const p:WebdriverIO.Element = await $("#uploaded-files");
        await expect(await p.getText()).toContain("ziemia.jpg");
    })
})