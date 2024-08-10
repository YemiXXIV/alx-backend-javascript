// Create the weakMap instance
const weakMap = new WeakMap();

// Create and Export the queryAPI function
// export function queryAPI(endpoint) {}

// Create the queryAPI function
const queryAPI = (endpoint) => {
  // Get the current count of calls for the endpoint
  const currentCount = weakMap.get(endpoint) || 0;

  // Increment the count
  const newCount = currentCount + 1;

  // Update the count in the weakMap
  weakMap.set(endpoint, newCount);

  // Check if the number of queries is >= 5
  if (newCount >= 5) {
    throw new Error('Endpoint load is high');
  }
};

// Export the weakMap instance and the queryAPI function
export { weakMap, queryAPI };
