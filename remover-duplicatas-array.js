const duplicates = [1, 1, 1, 2, 3, 4, 4, 5, 5, 5, 6];

const removedDuplicates = [...new Set(duplicates)];

console.log(removedDuplicates);
