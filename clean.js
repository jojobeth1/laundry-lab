var dirty_clothes = [
  "*blue shirt",
  "argyle s*ocks",
  "u*gly sweater",
  "brown plaid pa*nts",
  "paisl*ey dress shirt"
];

/* YOUR CODE HERE */
function clean(clothing_item){
    // return clean_clothing_item;
    return clothing_item.replace("*","")
}
clean("*blue shirt")

/* PRINT RESULT */
console.log(clean("*blue shirt") + "--> Finished running clean.js")
