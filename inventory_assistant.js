// Coding Challenge 00

// Code goes here

const itemName = "football"

let unitCost = 5.00
let currentStock = 200
let reorderLevel = 50
let targetSStock = 400
let weeklyDemand = 35
let supplierLeadTimeWeeks = 1

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
let stockDeficit = Math.max(0, targetStock - currentStock)
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover <
   supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
let estimatedReorderCost = reorderQuantity * unitCost
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks

console.log(itemName)
console.log(weeksOfCover.toFixed(2))
console.log(reorderNow)
console.log(reorderQuantity)
console.log(estimatedReorderCost.toFixed(2))
