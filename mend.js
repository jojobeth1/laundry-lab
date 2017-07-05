var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
];

function mend(clothing_item){
    return clothing_item.replace ("/", "")
}
//mend ("tu/be socks")
/* PRINT RESULT */
console.log(mend ("tu/be socks") + "--> Finished running mend.js");

//================================================

function mend(torn_clothes){
  return torn_clothes.replace("/","")
}

console.log(mend(torn_clothes));

//=====================

var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
];

function mend(torn_clothes){
   for (var i = 0; i <= torn_clothes.length; i++){
   let apple = torn_clothes[i];
   console.log(torn_clothes[i].replace("/",""))}
}

mend(torn_clothes);
