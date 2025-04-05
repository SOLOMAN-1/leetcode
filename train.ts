function findMinPlatforms(arr: number[], dep: number[]): number {
  const n = arr.length;

  // Sort both arrays
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  let platformNeeded = 1;
  let maxPlatforms = 1;
  let i = 1, j = 0;

  while (i < n && j < n) {
    if (arr[i] <= dep[j]) {
      // New train arrives before the last one departs — need a new platform
      platformNeeded++;
      i++;
    } else {
      // One train departs, free a platform
      platformNeeded--;
      j++;
    }
    maxPlatforms = Math.max(maxPlatforms, platformNeeded);
  }

  return maxPlatforms;
}

// 🧪 Example usage:
const arrivals = [900, 940, 950, 1100, 1500, 1800];
const departures = [910, 1200, 1120, 1130, 1900, 2000];

console.log("Minimum number of platforms required:", findMinPlatforms(arrivals, departures));
