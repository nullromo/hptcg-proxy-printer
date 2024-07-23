import axios from 'axios';
import React from 'react';

const cleanName = (name: string) => {
    const noSpaces = name.replaceAll(/\s(?<letter>.)/g, (_, group1: string) => {
        return group1.toUpperCase();
    });
    return noSpaces.charAt(0).toUpperCase() + noSpaces.slice(1);
};

const App = () => {
    const [result, setResult] = React.useState<string | null>(null);
    const [name, setName] = React.useState('');
    const [data, setData] = React.useState<string | null>(null);

    return (
        <div
            style={{
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <input
                type='text'
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <button
                type='button'
                onClick={() => {
                    const cleanedName = cleanName(name);
                    const tries = [
                        `${cleanedName}.png`,
                        `${cleanedName}.jpg`,
                        `${cleanedName}.jpeg`,
                    ];
                    Promise.any(
                        tries.map(async (filename) => {
                            return axios.get<Blob>(
                                `https://accio.cards/cardimages/${filename}`,
                                { responseType: 'blob' },
                            );
                        }),
                    )
                        .then(async (response) => {
                            const reader = new window.FileReader();
                            reader.readAsDataURL(response.data);
                            return new Promise<string | null>((resolve) => {
                                reader.onload = () => {
                                    resolve(reader.result?.toString() ?? null);
                                };
                            });
                        })
                        .then((result) => {
                            console.log(result);
                            setResult(result);
                            setData(result);
                        })
                        .catch(console.error);
                }}
            >
                Go
            </button>
            <div>{result}</div>
            {data ? <img src={data} /> : null}
        </div>
    );
};

export default App;
