import React, { useState } from 'react'
import { Search } from 'lucide-react'

// Component with some issues that CodeRabbit might catch
interface SearchResult {
  title: string
  excerpt: string
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  // This function could be optimized
  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    
    // Simulate API call - not debounced (performance issue)
    if (value.length > 0) {
      // This should probably be debounced
      fetchResults(value)
    }
  }

  // Missing error handling
  const fetchResults = async (query) => {
    const response = await fetch(`/api/search?q=${query}`)
    const data = await response.json()
    setResults(data)
  }

  return (
    <div className="relative">
      {/* Missing aria-label for accessibility */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search articles..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      
      {/* Results without proper keys */}
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
          {results.map((result) => (
            <div className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0">
              <h3 className="font-medium text-gray-900">{result.title}</h3>
              <p className="text-sm text-gray-600">{result.excerpt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar 