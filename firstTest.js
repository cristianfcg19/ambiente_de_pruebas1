const {Builder, By, Key} = require ("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");

async function CPJonathan(){

//iniciar el navegador

let driver = await new Builder().forBrowser("firefox").build();

//navegar a nuestra aplicación de e-commerce

await driver.get("https://maniruzzamanakash.github.io/EcommerceTemplateBootstrap/cart.html")

// Ingresa los datos de facturación
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/table/tbody/tr[4]/td/a[1]")).click();
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[1]/div[1]/div/input")).sendKeys("jonhanchia@gmail.com"); 
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[1]/div[2]/div/input")).sendKeys("+8801951233084");
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[1]/div[3]/div/input")).click();

// Ingresa la información de entrega de los productos
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[2]/div[1]/div/input")).sendKeys("Jonathan");
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[2]/div[2]/div/input")).sendKeys("+8801951233084");
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[2]/div[3]/div/input")).sendKeys("San José, Central");
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[2]/div[5]/div/select")).click();

// Selecciona país del menú desplegable
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[2]/div[5]/div/select")).sendKeys("L");
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[2]/div[5]/div/select")).sendKeys(Key.ENTER);
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[2]/div[6]/div/input[1]")).click();
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[3]/div[1]/div/select")).click();

// Selecciona método de pago Paypal
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[3]/div[1]/div/select")).click();
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[3]/div[1]/div/select")).sendKeys("P");
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[2]/div[5]/div/select")).sendKeys(Key.ENTER);
await driver.findElement(By.xpath("/html/body/div/div[2]/div/div/form/div[2]/div[5]/div/select")).sendKeys(Key.ENTER);
await driver.findElement(By.css("html body div.wrapper div.content-area div.container div.checkout-page form#checkoutForm.form-horizontal div#check3 div.form-group div.col-sm-10.col-sm-offset-2 input.btn.btn-info.pull-right.margin-top-20")).click();



// Valida la existencia de un error al finalizar la compra
if(await driver.findElement(By.xpath("/html/body/center/h1")).getText()== "405 Not Allowed")
{
    console.log("ha ocurrido un error de tipo: "+ await driver.findElement(By.xpath("/html/body/center/h1")).getText());
}
else
{
    console.log("Proceso exitoso");
}

}

CPJonathan()