'use client'
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import {ThemeImage} from "@/components/theme/theme-image"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import FormError from "@/components/forms/form-error"
import FormSuccess from "@/components/forms/form-success"
import { register } from "@/lib/actions/register"
import { startTransition } from "react"
import { RegisterSchema } from '@/schemas'
import { useState } from "react"
import Link from "next/link";
import LogoLight from "@/assets/logo-light.png";


export default function Register() {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
            username: ""
        },
    })

    function onSubmit(values: z.infer<typeof RegisterSchema>) {
        setError('')
        setSuccess('')
        startTransition(() => {
            form.setError("email", { type: "manual", message: "This is an error" })
            register(values).then((data) => {
                setSuccess(data.success)
                setError(data.error)
            })
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="max-w-md w-full space-y-8 p-10 bg-slate-900 border shadow-md rounded-md">
                <div className="flex justify-center">
                    <ThemeImage
                        className={cn("rounded-lg p-2")}
                        alt="logo"
                        srcLight={LogoLight}
                        srcDark={LogoLight}
                        width={140}
                        height={35}
                    />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold ">
                    Create your account
                </h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                        <FormField
                            name={'email'}
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm font-medium">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className="mt-1 block bg-card w-full rounded-md border-green-800 shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                                            placeholder="email@example.com"
                                            type='text'
                                            required
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name={'username'}
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm font-medium">Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className="mt-1 block w-full  bg-card rounded-md border-green-800 shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                                            placeholder="JohnnyAppleseed"
                                            type='text'
                                            required
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name={'password'}
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm font-medium ">Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className="mt-1 block w-full bg-card rounded-md border-green-800 shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                                            placeholder="Enter Password"
                                            type='password'
                                            required
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name={'name'}
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm font-medium ">Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className="mt-1 block w-full bg-card rounded-md border-green-800 shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                                            placeholder="Jonny Appleseed"
                                            type='text'
                                            required
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div>
                            <FormError message={error} />
                            <FormSuccess message={success} />
                            <Button className={"w-full flex"} type="submit">
                                Sign Up
                            </Button>
                            <div className="pt-2">
                                <Link href={"/login"}>
                                    <Button className={"w-full flex"} variant="outline">Back to Sign In</Button>
                                </Link></div>
                        </div>

                    </form>
                </Form>
            </div>
        </div>
    );
}