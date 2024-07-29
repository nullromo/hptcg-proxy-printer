export const Instructions = () => {
    return (
        <div style={{ maxWidth: '600px' }}>
            <ol>
                <li>
                    {
                        'Enter a list of cards you want to print in the box below. The cards can be listed with or without a quantity, like "12 Potions" or just "Potions". The capitalization does not matter, but the spelling does. If a card is not found, please double-check the spelling.'
                    }
                </li>
                <br />
                <li>
                    {
                        'Click the "Go!" button to generate a ready-to-print PDF with the card images. Inspect the images in the preview section below.'
                    }
                </li>
                <br />
                <li>
                    {
                        'Click the "Download" button to download and print the PDF. You can choose your preferred paper size before generating the PDF. After you print the PDF, you can then cut out the cards and insert them into standard card sleeves using other cards for stability.'
                    }
                </li>
                <br />
                <li>
                    {'Immerse yourself in the magic of the wizarding world!'}
                </li>
            </ol>
        </div>
    );
};
