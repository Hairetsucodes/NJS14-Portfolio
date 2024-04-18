'use client'


import { CheckCircledIcon } from '@radix-ui/react-icons';


interface FormSuccessProps {
    message?: string
}


export default function FormSuccess({ message }: FormSuccessProps) {
    if (!message) return null
    return (
        <div className="flex items-center bg-destructive text-red-600 text-sm">
            <CheckCircledIcon className="w-4 h-4 mr-2" />
            {message}
        </div>
    )
}