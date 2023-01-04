import { useState } from 'react'
//import './adminform.css'

const CopTrainee = () => {
  const [corporateName, setcorporateName] = useState('')
  const [country, setCountry] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
 
    const Cop = {corporateName, country}
    
    const response = await fetch('/api/CorporateTrainee/CreateTrainee', {
      method: 'POST',
      body: JSON.stringify(Cop),
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
     
      setcorporateName('')
      setCountry('')
      console.log('new Cop added:', json)
    }

  }






  return (

    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New CopTrainee</h3>

      <label>corporate Trainee Name:</label>
      <input 
        type="String" 
        onChange={(e) => setcorporateName(e.target.value)} 
        value={corporateName}
      />

      <label>Country</label>
      <input 
        type="String" 
        onChange={(e) => setCountry(e.target.value)} 
        value={country}
      />

     

      <button>Add Cop trainee</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CopTrainee