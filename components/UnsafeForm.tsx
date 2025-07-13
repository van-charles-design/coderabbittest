import React, { useState } from 'react'

// Another component with deliberate security and accessibility issues
const UnsafeForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    creditCard: '',
    ssn: ''
  })
  
  // Hardcoded admin credentials - SECURITY ISSUE
  const ADMIN_USER = 'admin'
  const ADMIN_PASSWORD = 'password123'
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Logging sensitive data - SECURITY ISSUE
    console.log('Form submitted:', formData)
    console.log('Credit Card:', formData.creditCard)
    console.log('SSN:', formData.ssn)
    
    // Storing sensitive data in localStorage - SECURITY ISSUE
    localStorage.setItem('userCreditCard', formData.creditCard)
    localStorage.setItem('userSSN', formData.ssn)
    
    // Sending sensitive data over GET request - SECURITY ISSUE
    fetch(`/api/submit?email=${formData.email}&password=${formData.password}&cc=${formData.creditCard}`)
      .then(response => response.json())
      .then(data => {
                 // Direct DOM manipulation - REACT ANTI-PATTERN
         document.getElementById('result')!.innerHTML = `<p>Welcome ${data.name}!</p>`
      })
    
    // No input validation
    if (formData.email && formData.password) {
      // Weak password check
      if (formData.password.length > 3) {
        alert('Login successful!')
      }
    }
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Real-time password validation logging - SECURITY ISSUE
    if (name === 'password') {
      console.log('Password strength:', value.length)
      console.log('Current password:', value)
    }
  }
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">User Registration</h2>
      
      {/* Form without proper accessibility */}
      <form onSubmit={handleSubmit}>
        {/* Input without label - ACCESSIBILITY ISSUE */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        
        {/* Password input without proper security attributes */}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          autoComplete="new-password"
        />
        
        {/* Credit card input without proper validation */}
        <input
          type="text"
          name="creditCard"
          value={formData.creditCard}
          onChange={handleInputChange}
          placeholder="Credit Card Number"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        
        {/* SSN input - SENSITIVE DATA */}
        <input
          type="text"
          name="ssn"
          value={formData.ssn}
          onChange={handleInputChange}
          placeholder="Social Security Number"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        
        {/* Submit button without proper accessibility */}
        <div 
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer text-center"
        >
          Submit
        </div>
      </form>
      
      {/* Results div for XSS vulnerability */}
      <div id="result" className="mt-4"></div>
      
      {/* Debug info showing sensitive data - SECURITY ISSUE */}
      <div className="mt-4 p-2 bg-gray-100 rounded">
        <h3>Debug Info (Remove in production):</h3>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Admin User: {ADMIN_USER}</p>
        <p>Admin Pass: {ADMIN_PASSWORD}</p>
      </div>
      
      {/* Inline JavaScript - SECURITY ISSUE */}
      <script dangerouslySetInnerHTML={{
        __html: `
          console.log('Inline script loaded');
          window.adminCredentials = {
            username: '${ADMIN_USER}',
            password: '${ADMIN_PASSWORD}'
          };
        `
      }} />
    </div>
  )
}

export default UnsafeForm 