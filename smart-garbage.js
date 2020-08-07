//FIRST WAY TO COMPLETE
function smartGarbage(trash, bins) {
  let updatedBins = {};
  let keys = Object.keys(bins);
  let values = Object.values(bins);
for (let index = 0; index < keys.length; index++) {
if (keys[index] === trash) {
values[index] += 1;
}
}
keys.forEach((key, value) => updatedBins[key] = values[value]);
return updatedBins;
} 

// SECOND WAY TO COMPLETE
const smartGarbage = function (trash, bins) { 
  if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'compost') {
    bins.compost += 1; 
  } return bins
};


smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });