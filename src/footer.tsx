export const Footer = () => {
    return (
        <div
            style={{
                background: '#9370db',
                bottom: 0,
                position: 'fixed',
                textAlign: 'center',
                width: '100%',
            }}
        >
            <p>
                All card images are sourced from{' '}
                <a href='https://accio.cards/index.html'>Accio</a>. If there are
                any problems, please reach out on{' '}
                <a href='https://github.com/nullromo/hptcg-proxy-printer'>
                    GitHub
                </a>
                {''}.
            </p>
            <p style={{ fontSize: '10px' }}>
                The information presented on this site about Harry Potter,
                including card images, characters, names and related indicia are
                ™ and © Warner Bros. Entertainment Inc. This website is not
                produced by, endorsed by, supported by, or affiliated with
                Warner Bros. Entertainment Inc. All rights reserved.
            </p>
        </div>
    );
};
