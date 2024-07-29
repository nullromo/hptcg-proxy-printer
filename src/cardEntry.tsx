import React from 'react';
import { fetchCard } from './fetchCard';

export const CardEntry = () => {
    const [name, setName] = React.useState('');
    const [data, setData] = React.useState<string | null>(null);
    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <textarea
                style={{ height: '200px', resize: 'none', width: '300px' }}
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <br />
            <button
                type='button'
                onClick={() => {
                    fetchCard(name)
                        .then((result) => {
                            setData(result);
                        })
                        .catch(console.error);
                }}
            >
                Go!
            </button>
            {data ? <img src={data} /> : null}
        </div>
    );
};
