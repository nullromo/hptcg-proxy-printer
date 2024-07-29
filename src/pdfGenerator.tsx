import React from 'react';
import { makePDF, PageSize } from './makePDF';
import type { Card } from './App';

export const PDFGenerator = (props: {
    readonly cards: Partial<Record<string, Card>>;
}) => {
    const [pageSize, setPageSize] = React.useState(PageSize.LETTER);
    const [blackFill, setBlackFill] = React.useState(true);

    return (
        <div>
            <div style={{ marginBottom: '4px' }}>
                {'Page Size: '}
                <select
                    value={pageSize}
                    onChange={(event) => {
                        setPageSize(event.target.value as PageSize);
                    }}
                >
                    <option value={PageSize.LETTER}>Letter</option>
                    <option value={PageSize.A4}>A4</option>
                </select>
            </div>
            <div>
                <label>
                    {'Black fill: '}
                    <input
                        checked={blackFill}
                        type='checkbox'
                        onChange={(event) => {
                            setBlackFill(event.target.checked);
                        }}
                    />
                </label>
            </div>
            <button
                type='button'
                onClick={() => {
                    makePDF({ blackFill, pageSize }, props.cards);
                }}
            >
                Download PDF
            </button>
        </div>
    );
};
