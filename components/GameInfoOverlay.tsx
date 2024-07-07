import { Loader2, RocketIcon } from 'lucide-react';
import React from 'react'
import SocialMediaLinks from './SocialLinks';

type Props = {
    info: any
}

const GameInfoOverlay = ({ info }: Props) => {
    const { isLoading, isDetected, isColliding, distance, livesRemainingState, isGameOver } = info;
    const lives = [];
    for (let i = 0; i < livesRemainingState; i++) {
        lives.push(<RocketIcon key={i} size={20} className='fill-red-600' />)
    }
    return (
        <div className={`absolute z-30 h-screen w-screen flex items-center justify-center ${isColliding && 'border-[20px] border-red-600'}`}>
            {isLoading && <Loader2 size={80} className='animate-spin' />}
            {!isLoading && !isDetected && !isGameOver && <div className='text-2xl animate-ping font-extrabold'>P A U S E D</div>}
            {isGameOver && <div className='text-2xl animate-ping font-extrabold'>GAME OVER</div>}
            <div className='fixed top-6 right-6'>{`Distance: ${distance}`}</div>
            <div className='fixed top-12 right-6 flex flex-row gap-1'>{lives}</div>
            <div className='text-xs fixed bottom-6 right-6 space-y-4 flex flex-row items-center gap-3'>
                <p className='mt-4'>Share your thoughts 👉 </p>
                <SocialMediaLinks />
            </div>
        </div>
    )
}

export default GameInfoOverlay