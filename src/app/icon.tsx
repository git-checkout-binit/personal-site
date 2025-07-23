import { ImageResponse } from 'next/og'
 
export const dynamic = 'force-static'
 
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'white',
            fontFamily: 'system-ui',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
          }}
        >
          B
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}