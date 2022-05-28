var addPersonButton = document.getElementById("add-product");
var calculateButton = document.getElementById("calculate");
var productTableBody = document.getElementById("people-list").getElementsByTagName("tbody")[0];

function addPerson(){
    let row = productTableBody.insertRow();
    let colproduct = row.insertCell(0);
    let colquantity = row.insertCell(1);
    let colprice = row.insertCell(2);
    let colsubtotal = row.insertCell(3);
    let colbutton = row.insertCell(4);

    colproduct.innerHTML = document.getElementById("products").value;
    colquantity.innerHTML = document.getElementById("quantity").value;
    colprice.innerHTML = document.getElementById("price").value;
    colsubtotal.innerHTML = (document.getElementById("price").value) *(document.getElementById("quantity").value);
    colbutton.innerHTML = "<button type='button' onclick='deleteProduct(this)'>Eliminar</button>";

    
}



function calcular(){
    let Total = document.getElementById("subtotal");
    let row = productTableBody.insertRow();
    let colTotalText = row.insertCell(0);
    let colEmptya = row.insertCell(1);
    let colEmptyB = row.insertCell(2);
    let colTotal = row.insertCell(3);

    colTotalText.innerHTML = "Total";
    colEmptya.innerHTML = "";
    colEmptyB.innerHTML = "";
    
    colTotal.innerHTML = Total;
    
    
}

function deleteProduct(sender){
    if(confirm("¿Desea eliminar?")){
        let rowIndex = sender.parentNode.parentNode.rowIndex;
        productTableBody.deleteRow(rowIndex -1);
    }

}
addPersonButton.onclick = function(){
    addPerson();
    
} 
calculateButton.onclick = function(){
    calcular();
} 


/**
 * Este evento se ejecuta cuando se abre la ventana
 */
window.onload = function(){
    //alert("Hola mundo");
    init();
}
