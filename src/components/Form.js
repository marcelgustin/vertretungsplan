import React, { useState } from 'react'

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isInvalid = password === '' || email === ''

    const handleSignIn = (event) => {
        event.preventDefault()

        console.log(email, password)
        setEmail('')
        setPassword('')
    }
    return (
        <form method="Post" onSubmit={handleSignIn}>
            <input required type="text" placeholder="Email adress" value={email} onChange={({ target }) => setEmail(target.value)}/>
            <input required type="password" placeholder="Password" value={password} autoComplete="off" onChange={({ target }) => setPassword(target.value)}/>
            <button type="submit" disabled={isInvalid}>Sign In</button>
        </form>
    )
}

export default Form
