import React, { useState } from 'react'
import { StackDirection, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'


const PrettyForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSignIn = (event) => {
        event.preventDefault()

        console.log(email, password)
    }
    return (
        <form method="POST" onSubmit={handleSignIn}>
            <Stack maxWidth={1200} margin="auto" spacing={5} marginTop={5}>
                <FormControl>
                    <FormLabel htmlFor="email">Email Adress</FormLabel>
                    <Input isRequired type="email" id="email" aria-describedby="email-helper-text"  value={email} onChange={({ target }) => setEmail(target.value)} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputGroup>
                        <Input isRequired type={showPassword ? 'text' : 'password'} id="password" aria-describedby="password-helper-text"  value={password} onChange={({ target }) => setPassword(target.value)} />
                        <InputRightElement width="4.5rem">
                            <Button
                                h="1.75rem"
                                size="sm"
                                onClick={()=> setShowPassword(!showPassword)}>
                                    {showPassword ? 'hide' : 'show'}
                                </Button>
                        </InputRightElement>
                    </InputGroup>

                </FormControl>
                <FormControl>
                    <Button colorScheme="blue" type="submit">submit</Button>
                </FormControl>
            </Stack>
        </form>
    )
}

export default PrettyForm
