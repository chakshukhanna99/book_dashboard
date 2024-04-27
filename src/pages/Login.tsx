import { useRef } from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Link } from 'react-router-dom';
const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const handleSign=()=>{
        const email=emailRef.current?.value;
        const password=passwordRef.current?.value;
        //make server call
        console.log("data",{email,password});
    }
  return (
    <section className='flex justify-center h-screen items-center'>
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label  htmlFor="email">Email</Label>
          <Input ref={emailRef} id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input ref={passwordRef}  id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSign}>Sign in</Button>
        <div className="mt-4 text-center text-sm">
          Dont have an account?{" "}
          <Link to="/auth/register" className="underline">Login</Link>

        </div>
      </CardFooter>
    </Card>
    </section>
  )
}

export default Login;