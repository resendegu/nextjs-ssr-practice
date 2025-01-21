'use client'
import { useFormStatus } from 'react-dom'

const Button = ({ text }: { text: string }) => {
    const { pending } = useFormStatus()
    return (
        <button disabled={pending} type='submit' className="bg-blue-700 px-4 py-2  rounded-lg text-white w-fit disabled:bg-gray-400">
            {text}
        </button>
    )
}

export default Button
