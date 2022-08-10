const {Builder,By,Key,util}=require("selenium-webdriver");

 async function CP_U2()
{
let driver=await new Builder().forBrowser("firefox").build();
await driver.get("https://maniruzzamanakash.github.io/EcommerceTemplateBootstrap/#");

await driver.findElement(By.xpath(`//*[@id="top"]/div[3]/div/div[3]/div/nav/ul/li[6]/a`)).click();
await driver.findElement(By.xpath(`//*[@id="top"]/div[3]/div/div[3]/div/nav/ul/li[6]/a`)).click();
await driver.findElement(By.xpath(`//*[@id="top"]/div[3]/div/div[3]/div/nav/ul/li[6]/a`)).click();
await driver.findElement(By.css(".wsmenu-submenu > li:nth-child(1) > a:nth-child(1) > i:nth-child(1)")).click();
await driver.getCurrentUrl();
await driver.findElement(By.xpath(`/html/body/div/div[2]/div/div/div/div[1]/ul/li[2]/a`)).click();
await driver.getCurrentUrl();

await driver.findElement(By.xpath(`//*[@id="firstname"]`)).clear();
await driver.findElement(By.xpath(`//*[@id="lastname"]`)).clear();
await driver.findElement(By.xpath(`//*[@id="email"]`)).clear();
await driver.findElement(By.xpath(`//*[@id="username"]`)).clear();
await driver.findElement(By.className("form-control")).clear();
-

await driver.findElement(By.xpath(`//*[@id="firstname"]`)).sendKeys("Christian");
await driver.findElement(By.xpath(`//*[@id="lastname"]`)).sendKeys("Fabian");
await driver.findElement(By.xpath(`//*[@id="email"]`)).sendKeys("cristian12c@gmail.com");
await driver.findElement(By.xpath(`//*[@id="username"]`)).sendKeys("cristianfcg10");
await driver.findElement(By.xpath(`//*[@id="birthdate"]`)).click();
await driver.findElement(By.xpath(`//*[@id="submitForm"]`)).click();

await driver.getCurrentUrl();



if(await driver.findElement(By.xpath("/html/body/center/h1")).getText()=="405 Not Allowed")
{
    console.log("Se ha cometido un error "+ await driver.findElement(By.xpath("/html/body/center/h1")).getText());
}
else
{
    console.log("Todo Salio Correctamente");
}
}

CP_U2();




//node index

/*

Comandos que uso

node index
npm init 
npm init -y
npm install selenium-webdriver
*/ 
