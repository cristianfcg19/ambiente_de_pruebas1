const {Builder,By,Key,util}=require("selenium-webdriver");

async function ejemplo()
{
let driver=await new Builder().forBrowser("firefox").build();
await driver.get("https://github.com/");

await driver.findElement(By.partialLinkText("Sign in")).click();


if (await driver.getTitle()==="")
{
    console.log("correcto")
}
else
{
    console.log("ERROR");
}
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
