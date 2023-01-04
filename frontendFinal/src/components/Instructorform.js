import { useState } from 'react'

const Instructorform = () => {
  const [usserId, setId] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState('')
  const [rating, setRating] = useState('')
  const [biography, setBiography] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
 
    const instructor = {usserId,username,password,country,rating,biography,email}
    
    const response = await fetch('/api/instructors/createInstructor', {
      method: 'POST',
      body: JSON.stringify(instructor),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setId('')
      setUserName('')
      setPassword('')
      setCountry('')
      setRating('')
      setBiography('')
      setEmail('')
      console.log('new instructor added:', json)
    }

  }






  return (

    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New instructor</h3>

      <label>User Id:</label>
      <input 
        type="number" 
        onChange={(e) => setId(e.target.value)} 
        value={usserId}
      />

      <label>User Name:</label>
      <input 
        type="String" 
        onChange={(e) => setUserName(e.target.value)} 
        value={username}
      />

      <label>Password:</label>
      <input 
        type="String" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

<label>Country:</label>
      <input 
        type="String" 
        onChange={(e) => setCountry(e.target.value)} 
        value={country}
      />
      
      <label>biography:</label>
      <input 
        type="String" 
        onChange={(e) => setBiography(e.target.value)} 
        value={biography}
      />

<label>Rating:</label>
      <input 
        type="number" 
        onChange={(e) => setRating(e.target.value)} 
        value={rating}
      />

<label>Email:</label>
      <input 
        type="String" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
      />

      <button>Add Instructor</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Instructorform