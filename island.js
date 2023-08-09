function getNeighbors(row, col, matrix) {
  let neighbors = [];
  // Could do all of these like:
  // if(matrix[] && matrix[][] && matrix[][] === 1)

  // Check top
  if (matrix[row - 1]) {
    if (matrix[row - 1][col] === 1) {
      neighbors.push([row - 1, col]);
    }
  }
  // Check top right
  if (matrix[row - 1]) {
    if (matrix[row - 1][col + 1]) {
      if (matrix[row - 1][col + 1] === 1) {
        neighbors.push([row - 1, col + 1]);
      }
    }
  }
  // Check right
  if (matrix[row][col + 1]) {
    if (matrix[row][col + 1] === 1) {
      neighbors.push([row, col + 1]);
    }
  }
  // Check bottom right
  if (matrix[row + 1]) {
    if (matrix[row + 1][col + 1]) {
      if (matrix[row + 1][col + 1] === 1) {
        neighbors.push([row + 1, col + 1]);
      }
    }
  }
  // Check bottom
  if (matrix[row + 1]) {
    if (matrix[row + 1][col] === 1) {
      neighbors.push([row + 1, col]);
    }
  }
  // Check bottom left
  if (matrix[row + 1]) {
    if (matrix[row + 1][col - 1]) {
      if (matrix[row + 1][col - 1] === 1) {
        neighbors.push([row + 1, col - 1]);
      }
    }
  }
  // Check left
  if (matrix[row][col - 1]) {
    if (matrix[row][col - 1] === 1) {
      neighbors.push([row, col - 1]);
    }
  }
  // Check top left
  if (matrix[row - 1]) {
    if (matrix[row - 1][col - 1]) {
      if (matrix[row - 1][col - 1] === 1) {
        neighbors.push([row - 1, col - 1]);
      }
    }
  }
  // Return neighbors
  return neighbors;
}

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  let visited = new Set();
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // If an index contains a 1 and has not been visited,
      // increment island count and start traversing neighbors
      let index = [row, col];
      let cell = matrix[row][col];

      if (!visited.has(index.toString()) && cell === 1) {
        // DO THE THING (increment island count by 1)
        count++;
        // Initialize a stack with current index
        let stack = [index];
        // Add stringified version of current index to the visited set
        visited.add(index.toString());
        // While stack contains elements
        while (stack.length) {
          // Pop element from stack
          let current = stack.pop();
          // Get valid neighbors of current element
          let neighbors = getNeighbors(current[0], current[1], matrix);
          // Iterate over neighbors
          for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            let str = neighbor.toString();
            // If neighbor has not been visited
            if (!visited.has(str)) {
              // Add neighbor to stack
              stack.push(neighbor);
              // Mark neighbor as visited
              visited.add(str);
            }
          }
        }
      }
    }
  }
  // Return island count
  return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
