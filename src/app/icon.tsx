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
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'system-ui',
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