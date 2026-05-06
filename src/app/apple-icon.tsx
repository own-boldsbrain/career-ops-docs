import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// Apple touch icon (180x180) — same "co" mark scaled up for iOS bookmarks
// and Android home-screen pins. Slight rounded radius via inner div +
// padding so the OS-applied mask doesn't crop the glyph.
export default async function AppleIcon() {
  const fontData = await fetch(
    'https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zI.ttf',
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: 'hsl(26, 73%, 51%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 170,
          fontFamily: 'Instrument Serif',
          letterSpacing: '0.01em',
          paddingBottom: 18,
          WebkitTextStroke: '2.5px white',
        }}
      >
        co
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Instrument Serif',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
