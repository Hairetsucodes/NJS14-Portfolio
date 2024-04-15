'use client'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';


interface FormErrorProps {
    message?: string
}


export default function FormError({message}: FormErrorProps) {
    if (!message) return null
    return (
        <div className="flex items-center bg-destructive text-red-600 text-sm">
            <ExclamationTriangleIcon className="w-4 h-4 mr-2" />
            {message}
        </div>
    )
}