import { CardEntry } from './cardEntry';
import { Footer } from './footer';
import { PDFPreview } from './pdfPreview';

const App = () => {
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
            <div style={{ maxWidth: '600px' }}>
                <ol>
                    <li>
                        {
                            'Enter a list of cards you want to print in the box below. The cards can be listed with a quantity, like "4 Diagon Alley" or "12 Potions" for example. The capitalization does not matter, but the spelling does. If a card is not found, please double-check the spelling.'
                        }
                    </li>
                    <br />
                    <li>
                        {
                            'Click the "Go!" button to generate a ready-to-print PDF with the card images.'
                        }
                    </li>
                    <br />
                    <li>
                        {
                            'Click the "Download" button to download and print the PDF. You can then cut out the cards and insert them into standard card sleeves using other cards for stability.'
                        }
                    </li>
                    <br />
                    <li>
                        {
                            'Immerse yourself in the magic of the wizarding world!'
                        }
                    </li>
                </ol>
            </div>
            <h2>Card Entry</h2>
            <CardEntry />
            <h2>PDF Preview</h2>
            <PDFPreview />
            <button
                type='button'
                onClick={() => {
                    // TODO
                }}
            >
                Download
            </button>
            <div style={{ height: '100px' }} />
            <Footer />
        </div>
    );
};

export default App;
