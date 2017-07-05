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
console.log(mend ("knit swe/ater") + "--> Finished running mend.js");
//================================================
