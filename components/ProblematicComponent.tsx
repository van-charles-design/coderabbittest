import React, { useState, useEffect } from 'react'

// Deliberately problematic component for CodeRabbit to review
const ProblematicComponent = (props: any) => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const [apiKey, setApiKey] = useState('sk-1234567890abcdef') // Hardcoded API key - SECURITY ISSUE
  
  // Unused variable
  const unusedVariable = 'this should be flagged'
  
  // Memory leak - useEffect without cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will cause memory leak')
    }, 1000)
    // Missing cleanup function
  }, [])
  
  // Inefficient function that runs on every render
  const expensiveCalculation = () => {
    let result = 0
    for (let i = 0; i < 1000000; i++) {
      result += i
    }
    return result
  }
  
  // Function with security vulnerability
  const handleUserInput = (userInput: string) => {
    // XSS vulnerability - directly setting innerHTML
    document.getElementById('output')!.innerHTML = userInput
    
    // SQL injection vulnerability simulation
    const query = `SELECT * FROM users WHERE name = '${userInput}'`
    console.log(query)
  }
  
  // Async function without proper error handling
  const fetchData = async () => {
    setLoading(true)
    const response = await fetch('/api/data') // No error handling
    const result = await response.json()
    setData(result)
    setLoading(false)
  }
  
  // Password handling issues
  const handlePasswordChange = (e) => {
    const pwd = e.target.value
    setPassword(pwd)
    // Logging password - SECURITY ISSUE
    console.log('Password:', pwd)
    // Storing password in localStorage - SECURITY ISSUE
    localStorage.setItem('userPassword', pwd)
  }
  
  // Missing key prop in map
  const renderItems = () => {
    return data.map((item) => (
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))
  }
  
  // Accessibility issues
  return (
    <div>
      <h1>Problematic Component</h1>
      
      {/* Missing alt text */}
      <img src="/image.jpg" />
      
      {/* Button without proper accessibility */}
      <div onClick={() => handleUserInput('test')}>
        Click me
      </div>
      
      {/* Form without labels */}
      <form>
        <input 
          type="password" 
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password"
        />
        <input type="submit" value="Submit" />
      </form>
      
      {/* Expensive calculation on every render */}
      <p>Expensive result: {expensiveCalculation()}</p>
      
      {/* Missing error boundary */}
      <div id="output"></div>
      
      {/* List without keys */}
      <ul>
        {renderItems()}
      </ul>
      
      {/* Inline styles instead of CSS classes */}
      <div style={{
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
        margin: '5px'
      }}>
        This should use CSS classes
      </div>
      
      {/* Missing loading state handling */}
      {data.length > 0 && (
        <div>
          {data.map(item => (
            <div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}
      
      {/* Hardcoded API key display - SECURITY ISSUE */}
      <p>API Key: {apiKey}</p>
    </div>
  )
}

export default ProblematicComponent 