const {Builder,By,Key,util}=require("selenium-webdriver");

 async function CP_U2_Crear()
{
let driver=await new Builder().forBrowser("firefox").build();
///Esta es URL QUE VA ABRIR
await driver.get("https://maniruzzamanakash.github.io/EcommerceTemplateBootstrap/account_information.html");



await driver.findElement(By.xpath(`//*[@id="lastname"]`)).clear();
await driver.findElement(By.xpath(`//*[@id="email"]`)).clear();
await driver.findElement(By.xpath(`//*[@id="lastname"]`)).clear();
await driver.findElement(By.xpath(`//*[@id="email"]`)).clear();
await driver.findElement(By.xpath(`//*[@id="birthdate"]`)).click();

await driver.findElement(By.xpath(`//*[@id="firstname"]`)).sendKeys("Christian");
await driver.findElement(By.xpath(`//*[@id="lastname"]`)).sendKeys("Fabian");
await driver.findElement(By.xpath(`//*[@id="email"]`)).sendKeys("cristian12c@gmail.com");
await driver.findElement(By.xpath(`//*[@id="username"]`)).sendKeys("cristianfcg10");
await driver.findElement(By.xpath(`//*[@id="birthdate"]`)).click();

await driver.findElement(By.xpath(`//*[@id="submitForm"]`)).click();//Da click en save

await driver.getCurrentUrl();//Actualiza otra vez la url ala actual


///Valida si hay un error 
if(await driver.findElement(By.xpath("/html/body/center/h1")).getText()=="405 Not Allowed")
{
    console.log("Se ha cometido un error "+ await driver.findElement(By.xpath("/html/body/center/h1")).getText());
}
else
{
    console.log("Todo Salio Correctamente");
}
}

async function CP_U2_modificar()
{
let driver=await new Builder().forBrowser("firefox").build();
///Esta es URL QUE VA ABRIR
await driver.get("https://maniruzzamanakash.github.io/EcommerceTemplateBootstrap/account_information.html");
///LO SIGUIENTE  ES PARA ABRIR LA LISTA Y OPRIMIR LINK VIEW PERSONAL 


///lo siguiente agrega texto alos campos
await driver.findElement(By.xpath(`//*[@id="lastname"]`)).clear();
await driver.findElement(By.xpath(`//*[@id="email"]`)).clear();
await driver.findElement(By.xpath(`//*[@id="lastname"]`)).sendKeys("Fabian");
await driver.findElement(By.xpath(`//*[@id="email"]`)).sendKeys("cristian12c@gmail.com");
await driver.findElement(By.xpath(`//*[@id="birthdate"]`)).click();

await driver.findElement(By.xpath(`//*[@id="submitForm"]`)).click();//Da click en save

await driver.getCurrentUrl();//Actualiza otra vez la url ala actual


///Valida si hay un error 
if(await driver.findElement(By.xpath("/html/body/center/h1")).getText()=="405 Not Allowed")
{
    console.log("Se ha cometido un error "+ await driver.findElement(By.xpath("/html/body/center/h1")).getText());
}
else
{
    console.log("Todo Salio Correctamente");
}
}


async function CP_U2Validar()
{
let driver=await new Builder().forBrowser("firefox").build();
///Esta es URL QUE VA ABRIR
await driver.get("https://maniruzzamanakash.github.io/EcommerceTemplateBootstrap/account_information.html");
///LO SIGUIENTE  ES PARA ABRIR LA LISTA Y OPRIMIR LINK VIEW PERSONAL 

///Lo siguiente limpia el los campos
await driver.findElement(By.xpath(`//*[@id="firstname"]`)).clear();
await driver.findElement(By.xpath(`//*[@id="lastname"]`)).clear();
await driver.findElement(By.xpath(`//*[@id="email"]`)).clear();
await driver.findElement(By.xpath(`//*[@id="username"]`)).clear();
await driver.findElement(By.className("form-control")).clear();
///lo siguiente agrega texto alos campos
await driver.findElement(By.xpath(`//*[@id="firstname"]`)).sendKeys("Christian");

await driver.findElement(By.xpath(`//*[@id="email"]`)).sendKeys("cristian12cgmail.com");

await driver.findElement(By.xpath(`//*[@id="birthdate"]`)).click();
await driver.findElement(By.xpath(`//*[@id="submitForm"]`)).click();//Da click en save

///Valida si hay un error 
if(await driver.findElement(By.xpath(`//*[@id="email-error"]`)).getText()=="Please enter a valid email address"
&& await driver.findElement(By.xpath(`//*[@id="lastname-error"]`)).getText()=="Please enter your lastname"&& 
await driver.findElement(By.xpath(`//*[@id="username-error"]`)).getText()=="Please enter a username")
{
    console.log( await driver.findElement(By.xpath(`//*[@id="email-error"]`)).getText());
    console.log(await driver.findElement(By.xpath(`//*[@id="lastname-error"]`)).getText());
    console.log(await driver.findElement(By.xpath(`//*[@id="username-error"]`)).getText());
}
else
{
    console.log("Todo Salio Correctamente");
}
}

//CP_U2_Crear();
CP_U2Validar();
//CP_U2_modificar();



//node index

/*

Comandos que uso

node index
npm init 
npm init -y
npm install selenium-webdriver
*/ 
