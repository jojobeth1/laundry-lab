
var wrinkled_clothes = [
  "grEEn shIrt",
  "TubE sockS",
  "TIe Dye shIrt",
  "gray pants",
  "HAndKerChief",
  "whItE bLousE"
];


function iron(clothing_item){
    // return ironed_clothing_item;
    return clothing_item.toLowerCase();
}

iron ("grEEn shIrt")


// =====================================================================
/*function that takes the array "wrinkled clothes" and for each element
in the array (mapping) it will return string in lowercase*/
wrinkled_clothes.map (function iron(item){
  return item.toLowerCase();
});
