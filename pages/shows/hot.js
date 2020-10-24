import Link from 'next/link';

export default function Hot() {
  return (
    <>
      <div style={{ margin: '50px 0', textAlign: 'center' }}>l a t e s t . e p i s o d e</div>
      <div style={{ width: '300px', margin: 'auto' }}>
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/524909901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div
          style={{
            fontSize: '10px',
            color: '#cccccc',
            lineBreak: 'anywhere',
            wordBreak: 'normal',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
            fontWeight: '100',
          }}
        >
          <a
            href="https://soundcloud.com/user-530319172"
            title="hot!"
            target="_blank"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            hot!
          </a>{' '}
          ·{' '}
          <a
            href="https://soundcloud.com/user-530319172/ep-14-crush-season"
            title="Ep. 14 - crush season"
            target="_blank"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            Ep. 14 - crush season
          </a>
        </div>
      </div>
    </>
  );
}
