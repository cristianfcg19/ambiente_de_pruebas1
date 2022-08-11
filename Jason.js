const {Builder,By,Key,util}=require("selenium-webdriver");

async function CP_U1_02(){
let driver=await new Builder().forBrowser("firefox").build();
await driver.get("https://maniruzzamanakash.github.io/EcommerceTemplateBootstrap/index.html");


 //Comprobacion de Correo sin arroba

  driver.findElement(By.xpath('/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[1]')).sendKeys("test.com");
  await driver.findElement(By.xpath('/html/body/div/div[3]/div/div/div[2]/div[1]/form/input[2]')).sendKeys(Key.RETURN);

}


CP_U1_02();
