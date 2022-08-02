// Problem- Given a staircase of 'n' steps, count the number of distinct ways  to climb the top.
// You can either climb 1 steps or 2 steps.

function climbingStaircase(n) {
  const noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}

// Big O - O(n)

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(4));
