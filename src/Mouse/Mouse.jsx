import React, { useRef, useEffect, createRef } from 'react'
import { gsap } from 'gsap';
import "./Mouse.css"

function Mouse() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const mouseCursor = (e)=> {
        gsap.to(cursorRef.current,{
            x:e.clientX,
            y:e.clientY,
            duration: 0.2
        })
        gsap.to(followerRef.current,{
            x:e.clientX,
            y:e.clientY,
            duration: 0.5
        })
    };
    useEffect(() => {
        gsap.set(cursorRef, {
            xPercent: 100,
            yPercent: 100
        });
        gsap.set(followerRef, {
            xPercent: 0,
            yPercent: 0
        });
        window.addEventListener('mousemove',mouseCursor);
        return () => window.addEventListener('mousemove',mouseCursor)
    }, [])
    
    return (
        <div>
            <div ref={cursorRef} className="cursor"></div>
            <div ref={followerRef} className="follow-cursor"></div>
        </div>
    )
}

export default Mouse