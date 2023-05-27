import React, {useLayoutEffect, useRef } from 'react'

function Loading() {
    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            gsap.to('.loadPanel',{
                
            })
        })
    })
    return (<div class="loadPanel">
        <div class="load-content">
            <svg class="load-star" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20 0L23.0127 8.75662L30 2.67949L28.2307 11.7693L37.3205 10L31.2434 16.9873L40 20L31.2434 23.0127L37.3205 30L28.2307 28.2307L30 37.3205L23.0127 31.2434L20 40L16.9873 31.2434L10 37.3205L11.7693 28.2307L2.67949 30L8.75662 23.0127L0 20L8.75662 16.9873L2.67949 10L11.7693 11.7693L10 2.67949L16.9873 8.75662L20 0Z"
                    fill="#1A1A1A" />
            </svg>

        </div>
    </div>
    )
}

export default Loading