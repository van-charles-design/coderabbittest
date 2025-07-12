// Utility file with bad practices for CodeRabbit to catch

// Global variable - bad practice
var globalCounter = 0

// Function with too many parameters
export function processUserData(
  name, 
  email, 
  age, 
  address, 
  phoneNumber, 
  socialSecurityNumber, 
  creditCardNumber, 
  bankAccountNumber,
  password,
  apiKey
) {
  // Multiple issues in one function
  
  // Logging sensitive data
  console.log('SSN:', socialSecurityNumber)
  console.log('Credit Card:', creditCardNumber)
  console.log('Password:', password)
  
  // Using var instead of let/const
  var result: any = {}
  
  // == instead of ===
  if (age == '18') {
    result.isAdult = true
  }
  
  // Modifying global state
  globalCounter++
  
  // No input validation
  result.email = email.toLowerCase()
  
  // Potential prototype pollution
  result['__proto__'] = { admin: true }
  
  return result
}

// Synchronous function that should be async
export function heavyComputation() {
  let result = 0
  // Blocking operation
  for (let i = 0; i < 10000000; i++) {
    result += Math.random()
  }
  return result
}

// Function with no error handling
export function parseJSON(jsonString) {
  return JSON.parse(jsonString) // Can throw error
}

// Unused function
function unusedFunction() {
  console.log('This function is never used')
}

// Function with magic numbers
export function calculatePrice(basePrice) {
  const tax = basePrice * 0.08 // Magic number
  const shipping = basePrice > 100 ? 0 : 9.99 // Magic number
  const processingFee = 2.50 // Magic number
  
  return basePrice + tax + shipping + processingFee
}

// Inefficient array operations
export function processArray(arr: any[]) {
  let result: any[] = []
  
  // Inefficient - creating new array each time
  for (let i = 0; i < arr.length; i++) {
    result = result.concat([arr[i] * 2])
  }
  
  // Should use map or forEach
  return result
}

// Missing TypeScript types
export function formatDate(date) {
  return date.toLocaleDateString()
}

// Hard-coded configuration
export const config = {
  apiUrl: 'https://api.production.com', // Should be environment variable
  timeout: 5000,
  retries: 3,
  secretKey: 'hardcoded-secret-key-123' // SECURITY ISSUE
}

// Potential memory leak
export class DataManager {
  private listeners: any[] = []
  
  addListener(callback: any) {
    this.listeners.push(callback)
    // Missing removeListener method
  }
  
  processData(data: any) {
    // No cleanup of listeners
    this.listeners.forEach(listener => listener(data))
  }
} 