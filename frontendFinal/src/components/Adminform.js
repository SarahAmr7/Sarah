import { useState } from 'react'
import './adminform.css'

const Adminform = () => {
  const [userId, setId] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
 
    const admin = {userId, username, password}
    
    const response = await fetch('/api/admin', {
      method: 'POST',
      body: JSON.stringify(admin),
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
      console.log('new admin added:', json)
    }

  }






  return (

    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Admin</h3>

      <label>UserID:</label>
      <input 
        type="number" 
        onChange={(e) => setId(e.target.value)} 
        value={userId}
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

      <button>Add Admin</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Adminform