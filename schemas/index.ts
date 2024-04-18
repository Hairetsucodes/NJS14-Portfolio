import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    inquiry: z.string().min(1, "Inquiry is required"),
    email: z.string().email("Email is required")
})

export const LoginSchema = z.object({
    email: z.string().email("Email is required"),
    password: z.string().min(8, "Password is required"),
})

export const RegisterSchema = z.object({
    email: z.string().email("Email is required"),
    password: z.string().min(8, "Password is required"),
    name: z.string().min(1, "Name is required"),
    username: z.string().min(1, "Username is required")
})

export const NewBlogSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    tags: z.array(z.string()),
    img: z.string(),
    category: z.string().min(1, "Category is required")
})
