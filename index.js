const {Builder,By,Key,util}=require("selenium-webdriver");

async function ejemplo()
{
let driver=await new Builder().forBrowser("firefox").build();
await driver.get("file:///C:/Users/Christian/Documents/GitHub/website-templates/amaze-photography-bootstrap-html5-template/index.html");
await driver.findElement(By.name("hola").sendKeys("Selenium" ,Key.RETURN));
}

ejemplo();

//node index

/*

Comandos que uso

node index
npm init 
npm init -y
npm install selenium-webdriver
*/ 