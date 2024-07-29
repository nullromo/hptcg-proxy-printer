import React from 'react';
import { fetchCard } from './fetchCard';
import { PageSize } from './makePDF';
import type { ReactSetter } from './util';
import type { Card } from './App';

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

export const CardEntry = (props: {
    readonly setCards: ReactSetter<Partial<Record<string, Card>>>;
}) => {
    // the input entered by the user
    const [textInput, setTextInput] = React.useState('');

    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <textarea
                placeholder={`2 Diagon Alley
Vermillious

1 draco malfoy
10 Potions`}
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
                    const data: Partial<Record<string, Card>> = {};
                    parseCards(textInput).forEach((card) => {
                        console.log(card);
                        if (card) {
                            fetchCard(card.name)
                                .then((result) => {
                                    console.log('data is', data);
                                    if (result) {
                                        data[card.name] = {
                                            count: card.count,
                                            image: result,
                                        };
                                    }
                                    console.log('setting data to', data);
                                    return data;
                                })
                                .catch(console.error)
                                .finally(() => {
                                    props.setCards(data);
                                });
                        }
                    });
                }}
            >
                Go!
            </button>
        </div>
    );
};
