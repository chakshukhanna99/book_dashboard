import { Button } from '@/components/ui/button';
import { useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {useMutation} from '@tanstack/react-query';
import { Link,useNavigate } from 'react-router-dom';
import { signup } from '@/http/api';
import { LoaderCircle } from 'lucide-react';

const Register = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nameRef=useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

      // Mutations
  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      // Invalidate and refetch
      console.log('login successfull');
      navigate('/dashboard/home')
    },
  })
  const signUp=()=>{
    const email=emailRef.current?.value;
    const password=passwordRef.current?.value;
    const name = nameRef.current?.value;
    //make server call
    console.log("data",{email,password,name});
    if(!email||!password||!name){
        return alert("please enter valid email or password");
    }

    mutation.mutate({email,password,name});
}
  return (
    <section className='flex justify-center h-screen items-center'>

<Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
          {mutation.isError&&<span className='text-red-500 text-sm'>{mutation.error.message}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-4">
          <Label htmlFor="name">Full Name</Label>
              <Input ref={nameRef} id="name" placeholder="Max" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
            ref={emailRef}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input ref={passwordRef} id="password" type="password" />
          </div>
          <Button className="w-full" onClick={signUp} disabled={mutation.isPending}>Create an Account {mutation.isPending&&<span className='ml-2'><LoaderCircle className='animate-spin'/></span>} </Button>
          <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to='auth/login' className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
    </section>
  )
}

export default Register;