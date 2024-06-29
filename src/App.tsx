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
                    form.append('sortBy', 'sn');
                    form.append('sortOrder', 'asc');

                    // TODO: I need to get around the CORS issue, but I'm not sure how to do it.

                    // TODO: I tried curl -v -F searchText=lesson -F sortBy=sn -F sortOrder=asc -X POST https://accio.cards/search?handler=SearchCards and I just got 400 Bad Request. Not sure what's different about this request vs. the browser's request

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
