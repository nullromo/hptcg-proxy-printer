import React from 'react';
import { CardEntry } from './cardEntry';
import { Footer } from './footer';
import { Preview } from './pdfPreview';
import { PDFGenerator } from './pdfGenerator';
import { Instructions } from './instructions';

export type Card = {
    count: number;
    image: string;
};

const App = () => {
    // a map from card name to card data
    const [cards, setCards] = React.useState<Partial<Record<string, Card>>>({});

    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <h1>HPTCG Proxy Printer</h1>
            <a href='https://harrypottertcg.com/'>What is HPTCG?</a>
            <br />
            <h2 style={{ marginBottom: 0 }}>Instructions</h2>
            <Instructions />
            <h2>Card Entry</h2>
            <CardEntry
                setCards={(value) => {
                    if (typeof value === 'function') {
                        setCards({ ...value(cards) });
                    } else {
                        setCards({ ...value });
                    }
                }}
            />
            <h2>Preview</h2>
            <Preview cards={cards} />
            <h2>Generate PDF</h2>
            <PDFGenerator cards={cards} />
            <div style={{ height: '100px' }} />
            <Footer />
        </div>
    );
};

export default App;
