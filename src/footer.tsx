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
        </div>
    );
};
