
var wrinkled_clothes = [
  "grEEn shIrt",
  "TubE sockS",
  "TIe Dye shIrt",
  "gray pants",
  "HAndKerChief",
  "whItE bLousE"
];
// For One item

function iron(clothing_item){
    return clothing_item.toLowerCase();
}
iron ("grEEn shIrt")

// =====================================================================
/*function that takes the array "wrinkled clothes" and for each element
in the array (mapping) it will return string in lowercase*/
function iron(clothing_item){
    return clothing_item.toLowerCase();
}

var output = wrinkled_clothes.map(iron);
