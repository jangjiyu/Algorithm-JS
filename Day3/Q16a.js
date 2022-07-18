function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )




