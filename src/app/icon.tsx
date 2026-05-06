import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

// Favicon: lowercase "co" — dual-meaning seed of the brand:
// "co" of career-ops (matches lowercase brand convention) and "co" of
// companies — the word the manifesto inverts ("…AI to choose
// companies"). Instrument Serif on brand orange so the favicon shares
// voice with the home hero.
export default async function Icon() {
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
          fontSize: 34,
          fontFamily: 'Instrument Serif',
          letterSpacing: '0.01em',
          paddingBottom: 3,
          WebkitTextStroke: '0.5px white',
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
