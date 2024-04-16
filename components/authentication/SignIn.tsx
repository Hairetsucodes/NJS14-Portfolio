'use client'
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {cn} from "@/lib/utils";
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
import {login} from "@/lib/actions/login"
import React, {startTransition} from "react"
import {LoginSchema} from '@/schemas'
import {useState} from "react"
import Link from "next/link";
import LogoLight from "@/assets/logo-light.png"
import {ThemeImage} from "@/components/theme/theme-image";
import {SocialLogin} from "@/components/authentication/social";


export default function SignIn() {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof LoginSchema>) {
        setError('')
        setSuccess('')
        startTransition(() => {
            form.setError("email", {type: "manual", message: "This is an error"})
            login(values).then((data) => {
                setSuccess(data.success)
                setError(data.error)
            })
        })
    }

    return (
        <div className="pt-8 flex items-center justify-center ">
            <div className="max-w-md w-full space-y-8 p-10 bg-slate-900 border dark:border shadow-md rounded-md">
                <div className="flex justify-center">
                    <ThemeImage
                        className={cn("rounded-lg p-2")}
                        alt="logo"
                        srcLight={LogoLight}
                        srcDark={LogoLight}
                        width={180}
                        height={35}
                    />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold ">
                    Sign in to your account
                </h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm space-y-4">
                            <FormField
                                name={'email'}
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="block text-sm font-medium ">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                className="mt-1 block w-full bg-card rounded-md border-green-800 shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                                                placeholder=""
                                                autoComplete={"email"}
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
                                                placeholder=""
                                                autoComplete={"current-password"}
                                                type='password'
                                                required
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormError message={error}/>
                            <FormSuccess message={success} />
                            <Button className={"w-full flex"} type="submit">
                                Sign in
                            </Button>
                        </div>
                    </form>
                </Form>
                <SocialLogin/>
                <div className="text-sm text-center">
                    <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Don&apos;t have an account? Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}