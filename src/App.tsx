import axios from 'axios';
import React from 'react';

const App = () => {
    const [result, setResult] = React.useState('');
    const [name, setName] = React.useState('');

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
                    const form = new FormData();
                    form.append('searchText', name);
                    axios
                        .post(
                            'https://accio.cards/search?handler=SearchCards',
                            form,
                            { headers: { 'Access-Control-Allow-Origin': '*' } },
                        )
                        .then((result) => {
                            console.log(result);
                        })
                        .catch(console.error);
                }}
            >
                Go
            </button>
            <div>{result}</div>
        </div>
    );
};

export default App;
