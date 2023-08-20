import Link from "next/link";
import Image from "next/image";

export default function page() {
    return (
        <>
            <main className="flex flex-col justify-center items-center h-screen ">

                <section className="text-center mb-10">
                    <span className="text-xl">Sign in to</span> <br />
                    <Link href='/'>
                        <Image src="/esports-ftw.png" alt="bg" width={150} height={150} className="m-auto mt-10" />
                    </Link>
                </section>

                <form className="w-80 md:w-full md:px-10 lg:w-[800px] ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="someone@mail.com" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="***********" className="input input-bordered w-full" />
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="mt-5">
                            <label className="flex gap-4 items-center">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text ">Remember me</span>
                            </label>
                        </div>
                        <div className="underline label-text">
                            <Link href='/forgot' > Forgot password?</Link>
                        </div>
                    </div>
                    <button className=" w-full bg-white py-2 mt-8 rounded-lg text-black">
                        Sign in
                    </button>
                </form>

                <div className="mt-5">
                    Don't have an account yet ?
                    <span className="underline label-text">
                        <Link href='/registration' > Sign up </Link>
                    </span>
                </div>

            </main>
        </>
    )
}
