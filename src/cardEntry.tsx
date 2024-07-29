import React from 'react';
import { fetchCard } from './fetchCard';

const parseCards = (
    input: string,
): Array<{ count: number; name: string } | null> => {
    return input
        .trim()
        .split('\n')
        .map((cardName) => {
            const match = cardName.match(/^(?:(?<count>\d+)\s+)?(?<name>.+)$/);
            if (!match) {
                // TODO: Something should happen if the card cannot be found
                return null;
            }
            return {
                count: Number(match.groups?.count ?? 1),
                name: match.groups?.name ?? '',
            };
        });
};

export const CardEntry = () => {
    // the input entered by the user
    const [textInput, setTextInput] = React.useState('');

    // a map from card name to card image data
    const [images, setImages] = React.useState<Partial<Record<string, string>>>(
        {},
    );

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
                value={textInput}
                onChange={(event) => {
                    setTextInput(event.target.value);
                }}
            />
            <br />
            <button
                type='button'
                onClick={() => {
                    parseCards(textInput).forEach((card) => {
                        console.log(card);
                        if (card) {
                            fetchCard(card.name)
                                .then((result) => {
                                    setImages((data) => {
                                        if (result) {
                                            data[card.name] = result;
                                        }
                                        return data;
                                    });
                                })
                                .catch(console.error);
                        }
                    });
                }}
            >
                Go!
            </button>
            {Object.values(images).map((image) => {
                return image ? <img key={image} src={image} /> : null;
            })}
        </div>
    );
};
