import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

type Props = {
    isMoving?: boolean,
    what: any,
    soWhat: () => void,
    when: any
}

const BoulderComponent = ({ isMoving, what, soWhat, when }: Props) => {
    const [xState, setXState] = useState(0);
    const [yState, setYState] = useState(0);
    const [rotation, setRotation] = useState(0)
    const boulderRef = useRef(null);

    useEffect(() => {
        // detection logic
        detectCollision();
    }, [when])

    const detectCollision = () => {
        if (boulderRef.current) {
            const boulder = (boulderRef.current as any).getBoundingClientRect();
            const didCollide = boulder.left + 30 < what.right &&
            boulder.right - 30 > what.left && 
            boulder.bottom - 30 > what.top && 
            boulder.top + 30 < what.bottom;
            if (didCollide) {
                soWhat();
            }
        }
    }
    useEffect(() => {
        setXState(Math.random() * (window.innerWidth - 80));
        setYState(- Math.random() * 100 - 100);
        setRotation(Math.random() * 360);
    }, [])

    return (
        <div ref={boulderRef} className='boulder-shadow' style={{
            position: 'absolute',
            left: xState,
            top: yState,
            animation: 'moveDown 10s linear forwards',
            animationPlayState: isMoving ? 'running' : 'paused'
        }}>
            <Image src={'/met.png'} width={80} height={80} alt={''} style={{
                rotate: `${rotation}deg`
            }} />
        </div>
    )
}

export default BoulderComponent