import React, {useState, useEffect} from "react"

export default () => {

    const [state, setState] = useState({
        username: "",
        description: "",
        duration: 0,
        date: new Date(),
        users: [] 
    })

    useEffect(() => {
        let newState = {...state}
        newState.users = ["iClass", "Chima"]
        newState.username = newState.users[0]
        setState(newState)
    }, [])

    const updateValue = e => {
        let newState = {...state}
        for (const property in newState) {
            if (property === e.target.name) {
                newState[property] = e.target.value  
            }
        }        
        setState(newState)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const exercise = {
            username: state.username,
            description: state.description,
            duration: state.duration,
            date: state.date
        }

        window.location = '/'
        console.log(exercise)

    } 

    return (
        <div className="col-5">
            <h5>Create New Exercise</h5>
            <form className="border p-3" onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                     <label>Username: </label>
                     <select className="form-control" name="username" value={state.username} required onChange={e => updateValue(e)}>
                        {state.users.map(user => <option key={user} value={user}>{user}</option>)}
                     </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input required className="form-control" type="text" value={state.description} name="description" onChange={e => updateValue(e)}/>
                </div>
                <div className="form-group">
                    <label>Duration: </label>
                    <input className="form-control" type="text" value={state.duration} name="duration" onChange={e => updateValue(e)}/>
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input className="form-control" type="date" name="date" onChange={e => updateValue(e)}/>
                </div>
                <input type="submit" onClick={e => handleSubmit(e)} value="Create new" className="btn btn-primary btn-form-control" />
            </form>
        </div>
    )
}