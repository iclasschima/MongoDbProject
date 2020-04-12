import React, {useState} from "react"
import axios from "axios"

export default () => {

    const [username, setUsername] = useState("")

    const handleChange = e => {
        setUsername(e.target.value)
    }

    const handleSubmit =  async e => {
        e.preventDefault()

        const user = {
            username
        }
        await axios.post("http://localhost:5000/user/add", user)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        setUsername("")
    }

    return (
        <div>
            <h5>Create New User</h5>
            <form 
                className="col-4 border p-3" 
                onSubmit={e => handleSubmit(e)}
            >
                <div className="form-group">
                    <label>Username: </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        value={username} 
                        onChange={e => handleChange(e)}
                    />
                </div>
                <input 
                    type="submit" 
                    value="Create" 
                    className="btn btn-primary"
                    onSubmit={e => handleSubmit(e)}    
                />
            </form>
        </div>
    )
}