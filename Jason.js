const {Builder,By,Key,util}=require("selenium-webdriver");

async function CP_U1_02(){
let driver=await new Builder().forBrowser("firefox").build();
await driver.get("https://maniruzzamanakash.github.io/EcommerceTemplateBootstrap/index.html")

 //Comprobacion de Correo sin arroba
 
  await driver.findElement(By.xpath('/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]')).sendKeys("Proyecto.com")
  await driver.findElement(By.xpath('/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[2]')).click();


   //Comprobacion de Correo sin .com
 
   await driver.findElement(By.xpath('/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]')).sendKeys("Prueba")
   await driver.findElement(By.xpath('/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[2]')).click();


 //Comprobacion de Correo con numeros 
 
 await driver.findElement(By.xpath('/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]')).sendKeys("1234567890")
 await driver.findElement(By.xpath('/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[2]')).click();

 
 //Comprobacion de Correo sin datos
 
 await driver.findElement(By.xpath('/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]')).sendKeys("   ")
 await driver.findElement(By.xpath('/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[2]')).click();

}
CP_U1_02();



