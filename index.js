// code your solution here
//use find() to isolate a specific result

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(element) {
    if (element.result === "W") {
        console.log("this is a win");
        return element.year;
    }
    //return undefined if no win is found, so no return
}

console.log(record.find(superbowlWin));