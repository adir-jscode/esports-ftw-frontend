'use client'
import { IsAuthenticated } from "@/lib/Auth";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    if (IsAuthenticated()) {
        router.push('/dashboard')
        return
    }


    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            const res = await axios.post('https://localhost:7033/api/Auth/Admin', { email, password })
            if (res.status !== 200) {
                setLoginError(res.data)
                return
            } else {
                const getId = await axios.post('https://localhost:7033/api/Admin/getId', { email });
                if (rememberMe) {
                    localStorage.setItem('user_id', getId.data)
                    sessionStorage.setItem('user_type', 'admin')
                } else {
                    sessionStorage.setItem('user_id', getId.data)
                    sessionStorage.setItem('user_type', 'admin')
                }
                // router.push('/dashboard')
                window.location.href = '/admin'
            }
        } catch (error) {
            setLoginError('Invalid email or password')
            return
        }
    }

    return (
        <main className="card mx-48 mt-20">
            <section className="flex flex-col justify-center items-center card-body md:bg-slate-800 rounded-lg bg-opacity-20">

                <section className="text-center my-2">
                    <span className="text-2xl">Admin Login</span>
                </section>

                <form onSubmit={handleLogin} className="w-80 md:w-full md:px-10 lg:w-[800px] ">

                    {loginError && <div className="alert alert-error">{loginError}</div>}

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email" placeholder="someone@mail.com" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password" placeholder="***********" className="input input-bordered w-full" />
                    </div>
                    <div className="flex justify-between items-end">
                    </div>
                    <button type="submit" className=" w-full bg-white py-2 mt-8 rounded-lg text-black">
                        Sign in
                    </button>
                </form>
            </section>
        </main>
    )
}
