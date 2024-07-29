import React from 'react';
import { makePDF, PageSize } from './makePDF';
import type { Card } from './App';

export const PDFGenerator = (props: {
    readonly cards: Partial<Record<string, Card>>;
}) => {
    // page size for generated PDF
    const [pageSize, setPageSize] = React.useState(PageSize.LETTER);

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
            <button
                type='button'
                onClick={() => {
                    makePDF(pageSize, props.cards);
                }}
            >
                Download PDF
            </button>
        </div>
    );
};
