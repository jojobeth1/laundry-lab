// copy your `iron`, `mend`, `clean` functions up here (but do not modify!)

/*Iron Function */
var wrinkled_clothes = [
  "grEEn shIrt",
  "TubE sockS",
  "TIe Dye shIrt",
  "gray pants",
  "HAndKerChief",
  "whItE bLousE"
]

function iron(clothing_item){
    return clothing_item.toLowerCase();
}
var output = wrinkled_clothes.map(iron);


/* Mend Function */
var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
];

function mend(clothing_item){
    return clothing_item.replace ("/", "")
}
var output = torn_clothes.map(mend);


/* Clean Function */
var dirty_clothes = [
  "*blue shirt",
  "argyle s*ocks",
  "u*gly sweater",
  "brown plaid pa*nts",
  "paisl*ey dress shirt"
];

function cleaned(clothing_item){
    return clothing_item.replace("*", "");
}
let allClean = dirty_clothes.map(cleaned)


// BATCH -->
function doBatch(clothes) {
    return iron(mend(cleaned(clothes)));
}

doBatch(["pLe*A/tED SKirt", "f*AncY T/Ie"]);
