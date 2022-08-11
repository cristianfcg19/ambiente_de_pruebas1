const {Builder,By,Key,util}=require("selenium-webdriver");


async function CP_U1_02()
{
let driver=await new Builder().forBrowser("firefox").build();
await driver.get("https://maniruzzamanakash.github.io/EcommerceTemplateBootstrap/#");

 //Comprobacion de Correo sin arroba
await driver.findElement(By.xpath(`/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]"]`)).clear();
driver.findElement(By.name("Enter your Email...")).click();
driver.findElement(by.name("/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]")).sendKeys("test.com");
driver.findElement(by.name("Enter your Email...")).sendKeys(keys.ENTER);

if(await driver.findElement(By.xpath("/html/body/center/h1")).getText()=="405 Not Allowed")
{
    console.log("Se ha cometido un error "+ await driver.findElement(By.xpath("/html/body/center/h1")).getText());
}
else
{
    console.log("Prueba concluida exitosamente");
}

 //Comprobacion de Correo sin .com
 await driver.findElement(By.xpath(`/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]"]`)).clear();
 driver.findElement(By.name("Enter your Email...")).click();
 driver.findElement(by.name("/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]")).sendKeys("test@test");
 driver.findElement(by.name("Enter your Email...")).sendKeys(keys.ENTER);

 if(await driver.findElement(By.xpath("/html/body/center/h1")).getText()=="405 Not Allowed")
{
    console.log("Se ha cometido un error "+ await driver.findElement(By.xpath("/html/body/center/h1")).getText());
}
else
{
    console.log("Prueba concluida exitosamente");
}

//Comprobacion de Correo sin arroba ni .com
await driver.findElement(By.xpath(`/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]"]`)).clear();
driver.findElement(By.name("Enter your Email...")).click();
driver.findElement(by.name("/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]")).sendKeys("test");
driver.findElement(by.name("Enter your Email...")).sendKeys(keys.ENTER);

if(await driver.findElement(By.xpath("/html/body/center/h1")).getText()=="405 Not Allowed")
{
    console.log("Se ha cometido un error "+ await driver.findElement(By.xpath("/html/body/center/h1")).getText());
}
else
{
    console.log("Prueba concluida exitosamente");
}

//Comprobacion de Correo correctamente
await driver.findElement(By.xpath(`/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]"]`)).clear();
driver.findElement(By.name("Enter your Email...")).click();
driver.findElement(by.name("/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]")).sendKeys("test@test.com");
driver.findElement(by.name("Enter your Email...")).sendKeys(keys.ENTER);


if(await driver.findElement(By.xpath("/html/body/center/h1")).getText()=="405 Not Allowed")
{
    console.log("Se ha cometido un error "+ await driver.findElement(By.xpath("/html/body/center/h1")).getText());
}
else
{
    console.log("Prueba concluida exitosamente");
}


CP_U1_02();
}