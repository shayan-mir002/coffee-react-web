import React, { useRef, useEffect, useState } from 'react'
import { useMotionValueEvent } from 'framer-motion'

const TOTAL_FRAMES = 185

const CanvasSequence = ({ progress }) => {
    const canvasRef = useRef(null)
    const images = useRef([])
    const [ready, setReady] = useState(false)

    /* Preload all frames */
    useEffect(() => {
        let loaded = 0
        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image()
            img.src = `/sequence/frame_${i}.jpg`
            img.onload = () => {
                loaded++
                if (loaded === TOTAL_FRAMES) setReady(true)
                // Render first frame as soon as it's ready
                if (i === 0 && canvasRef.current) drawFrame(0)
            }
            images.current[i] = img
        }
    }, [])

    const drawFrame = (rawIndex) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(rawIndex)))
        const img = images.current[idx]
        if (!img || !img.complete || !img.naturalWidth) return

        const cw = canvas.width
        const ch = canvas.height
        const ir = img.naturalWidth / img.naturalHeight
        const cr = cw / ch

        let dw, dh, dx, dy
        if (cr > ir) {
            dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2
        } else {
            dh = ch; dw = ch * ir; dy = 0; dx = (cw - dw) / 2
        }

        ctx.clearRect(0, 0, cw, ch)
        ctx.drawImage(img, dx, dy, dw, dh)
    }

    /* React to scroll changes */
    useMotionValueEvent(progress, 'change', (v) => drawFrame(v))

    /* Handle resize */
    useEffect(() => {
        const resize = () => {
            const canvas = canvasRef.current
            if (!canvas) return
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            drawFrame(progress.get())
        }
        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [ready])

    return (
        <canvas
            ref={canvasRef}
            className="sequence-canvas"
        />
    )
}

export default CanvasSequence
