const {Builder,By,Key,util}=require("selenium-webdriver");


async function Clicker(){


    let driver = await new Builder ().forBrowser("firefox").build();              
    await driver.get("https://maniruzzamanakash.github.io/EcommerceTemplateBootstrap/index.html");

      
    //Click boton  buy
    
    await driver.executeScript("window.scrollBy(0,200)");
    await driver.findElement(By.xpath("/html/body/div/div[2]/div[1]/div/ol/li[1]")).click();
    await driver.findElement(By.xpath("/html/body/div/div[2]/div[1]/div/div/div[1]/div/a")).click();

      
    //Click Add to Cart
       await driver.executeScript("window.scrollBy(0,500)");
    await driver.findElement(By.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[2]/div/div/div[1]/div[1]/div/div/a[2]")).click();

      //Click Check Out
      await driver.executeScript("window.scrollBy(0,500)");
      await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/table/tbody/tr[4]/td/a[1]")).click();

     //scroll
      await driver.executeScript("window.scrollBy(0,500)");

//rellenar check out
      await driver.findElement(By.xpath(`//*[@id="checkoutEmail"]`)).click();
      await driver.findElement(By.xpath(`//*[@id="checkoutEmail"]`)).clear();
      await driver.findElement(By.xpath(`//*[@id="checkoutEmail"]`)).sendKeys("joedar4382@gmail.net");

      await driver.findElement(By.xpath(`//*[@id="checkoutContact"]`)).click();
      await driver.findElement(By.xpath(`//*[@id="checkoutContact"]`)).clear();
      await driver.findElement(By.xpath(`//*[@id="checkoutContact"]`)).sendKeys("8375845739538580");

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