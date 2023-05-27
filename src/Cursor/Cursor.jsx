import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function Cursor({ cursorsRef }) {
    const mouseMove = (e) => {
        gsap.to(cursorsRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2
        })
    }
    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);
        return () => window.addEventListener('mousemove', mouseMove);
    }, [])
    return (
        <div className="cursors">
            <div className="cursor" ref={cursorsRef}></div>
        </div>
    )
}

export default Cursor