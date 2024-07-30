'use client'

export default function ButtonMe({ft}) {
    return (
        <div>
            <button onClick={ft} className='border rounded p-2'>Click Me</button>
        </div>
    )
}