const dynamicKnapsack = function (weightCap, weights, values) {
  // -------------------------------
  // 1. Initialize variables
  // -------------------------------
  const numItem = weights.length;
  // numItem: total number of items available

  // Create a matrix with (numItem + 1) rows and (weightCap + 1) columns
  // Each cell will store the best value we can get with a certain weight limit
  const matrix = new Array(numItem + 1);

  // -------------------------------
  // 2. Build the dynamic table
  // -------------------------------
  for (let index = 0; index <= numItem; index++) {
    // For each index (0 to numItem), make a row with (weightCap + 1) columns
    matrix[index] = new Array(weightCap + 1);

    for (let weight = 0; weight <= weightCap; weight++) {
      // weight: the current capacity we check (0 to weightCap)

      // --------------------------------------------------
      // Base case: no items or capacity 0
      // --------------------------------------------------
      if (index === 0 || weight === 0) {
        // If index = 0 → we have no items to use.
        // If weight = 0 → the capacity is zero, we cannot take anything.
        matrix[index][weight] = 0;

        // --------------------------------------------------
        // Case 1: the item (index - 1) fits in current weight
        // --------------------------------------------------
      } else if (weights[index - 1] <= weight) {
        // weights[index - 1]: weight of the current item
        // values[index - 1]: value of the current item

        // 2.1. Calculate value if we INCLUDE this item:
        //     value of current item + best value with (weight - itemWeight)
        const includeItem =
          values[index - 1] + matrix[index - 1][weight - weights[index - 1]];

        // 2.2. Calculate value if we EXCLUDE this item:
        //     just best value from the previous row without this item
        const excludeItem = matrix[index - 1][weight];

        // 2.3. Choose the better option: include or exclude
        matrix[index][weight] = Math.max(includeItem, excludeItem);

        // --------------------------------------------------
        // Case 2: the item (index - 1) does NOT fit (itemWeight > weight)
        // --------------------------------------------------
      } else {
        // If the current item is heavier than 'weight', we cannot include it.
        // So we take the best value without this item:
        matrix[index][weight] = matrix[index - 1][weight];
      }
    }
  }

  // -------------------------------
  // 3. Final result
  // -------------------------------
  // The cell [numItem][weightCap] has the maximum value
  // we can get using up to 'numItem' items and capacity 'weightCap'.
  return matrix[numItem][weightCap];
};

// --------------------------------
// Example test
// --------------------------------
const weightCap = 50;
const weights = [31, 10, 20, 19, 4, 3, 6];
const values = [70, 20, 39, 37, 7, 5, 10];

console.log(dynamicKnapsack(weightCap, weights, values));
// → Prints the best value that fits in a knapsack of capacity 50.

// --------------------------------
// Export for automatic tests
// --------------------------------
module.exports = dynamicKnapsack;
