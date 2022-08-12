const { Builder, By, Key, util} = require ("selenium-webdriver");


async function Clicker(){


    let driver = await new Builder ().forBrowser("firefox").build();              
    await driver.get("https://maniruzzamanakash.github.io/EcommerceTemplateBootstrap/#");

      
    //Click buy
    await driver.findElement(By.xpath("/html/body/div/div[2]/div[1]/div/div/div[4]/div/a")).click();
    

    //Click Add to Cart
     await driver.findElement(By.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[2]/div/div/div[1]/div[1]/div/div/a[2]")).click();


    //Click Check Out
    await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/table/tbody/tr[4]/td/a[1]")).click();
    
    
 //Verificar que funcione correctamente
  if(await driver.findElement(By.xpath("/html/body/center/h1")).getText()=="405 Not Allowed")
  {
      console.log("Se ha cometido un error "+ await driver.findElement(By.xpath("/html/body/center/h1")).getText());
  }
  else
  {
      console.log("Todo Salio Correctamente");
  }


}
Clicker();