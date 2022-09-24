//Get total
// Create Product
// Save in Localstoreg
// Cleare inputs after adding
//read
//count
//delete 
//update 
//search
//clean data
let title = document.getElementById('title');
let Price = document.getElementById('Price');
let Taxes = document.getElementById('Taxes');
let Ads = document.getElementById('Ads');
let Discount = document.getElementById('Discount');
let total = document.getElementById('total');
let Count = document.getElementById('Count');
let Category = document.getElementById('Category');
let Submit = document.getElementById('Submit');


//get total
function getTotal(){
    if(Price.value != ''){
        let result = (+Price.value + +Taxes.value + +Ads.value ) - +Discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    }else{
        total.innerHTML = '';
        total.style.background = '#a00d02';
    }

}

//Create Products 
//if we have data denn we must first thinking we schuld save this data before we biggen#
let datapro;
if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
}else{
    datapro = [];
}
Submit.onclick = function(){
    let newpro ={
        title:title.value,
        price:Price.value,
        Taxes:Taxes.value,
        Ads:Ads.value,
        Discount:Discount.value,
        total:total.innerHTML,
        Count:Count.value,
        Category:Category.value
    }
    datapro.push(newpro)
    // save localstorge 
    localStorage.setItem('product', JSON.stringify(datapro));  

    clearData(); 
    schowData();
   
}
//Clear imputs after adding
function clearData(){
    title.value = '';
    Price.value = '';
    Taxes.value = '';
    Ads.value = '';
    Discount.value = '';
    total.innerHTML = '';
    Count.value = '';
    Category.value = '';
}

//Show Data
function schowData(){
    let table = '';
    for(let i = 0; i < datapro.length; i++){
        table += `
        <tr>
                        <td>${i}</td>
                        <td>${datapro[i].title}</td>
                        <td>${datapro[i].price}</td>
                        <td>${datapro[i].Taxes}</td>
                        <td>${datapro[i].Ads}</td>
                        <td>${datapro[i].Discount}</td>
                        <td>${datapro[i].total}</td>
                        <td>${datapro[i].Category}</td>
                        <td><button id="update">update</button></td>
                        <td><button onclick="deleteData( ${i})" id="delete">delete</button></td>
        </tr>
        `
        
    }
    document.getElementById('tbody').innerHTML = table;
    let binDelete = document.getElementById('deleteAll')
    if(datapro > 0){
        binDelete.innerHTML = `
        <button onclick="deleteAll()">delete All </button>`
    }else{
        binDelete.innerHTML = '';
    }
// read
}
schowData();

// Delete
function deleteData(i){
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    schowData();
}
function deleteAll(){
    localStorage.clear();
    datapro.splice(0)
    schowData();
}

