import React from 'react';
import type { Card } from './App';

export const Preview = (props: {
    readonly cards: Partial<Record<string, Card>>;
}) => {
    return (
        <div>
            {Object.entries(props.cards).map(([cardName, card]) => {
                if (!card) {
                    return null;
                }
                return (
                    <React.Fragment key={cardName}>
                        {[...new Array(card.count).keys()].map((index) => {
                            return (
                                <img
                                    key={`${cardName}-${index}`}
                                    src={card.image}
                                    style={{ width: '200px' }}
                                />
                            );
                        })}
                    </React.Fragment>
                );
            })}
        </div>
    );
};
