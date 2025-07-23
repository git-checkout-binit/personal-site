import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = "Binit's Private Calendar"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Calendar icon */}
        <div
          style={{
            fontSize: '120px',
            marginBottom: '30px',
          }}
        >
          🗓️
        </div>
        
        {/* Main title */}
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
          }}
        >
          Binit's Calendar
        </h1>
        
        {/* Subtitle */}
        <p
          style={{
            fontSize: '28px',
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            margin: 0,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Private access required
        </p>
        
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            right: '80px',
            fontSize: '40px',
          }}
        >
          🏃‍♂️
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '100px',
            fontSize: '35px',
          }}
        >
          💒
        </div>
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: '120px',
            fontSize: '30px',
          }}
        >
          ✈️
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}