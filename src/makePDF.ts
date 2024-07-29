import { jsPDF } from 'jspdf';
import type { Card } from './App';

// card dimensions in millimeters
const CARD_WIDTH = 63;
const CARD_HEIGHT = 88;

const BUFFER = 10;

export enum PageSize {
    LETTER = 'letter',
    A4 = 'a4',
}

export const makePDF = (
    options: { pageSize: PageSize; blackFill: boolean },
    cards: Partial<Record<string, Card>>,
) => {
    const pdf = new jsPDF({ format: options.pageSize });

    let cardNumber = 0;
    Object.values(cards).forEach((card) => {
        if (!card) {
            return;
        }
        for (let index = 0; index < card.count; index += 1) {
            const col = cardNumber % 3;
            const row = Math.floor(cardNumber / 3);
            if (options.blackFill) {
                pdf.rect(
                    BUFFER + col * CARD_WIDTH,
                    BUFFER + row * CARD_HEIGHT,
                    CARD_WIDTH,
                    CARD_HEIGHT,
                    'F',
                );
            }
            pdf.addImage(
                card.image,
                'png',
                BUFFER + col * CARD_WIDTH,
                BUFFER + row * CARD_HEIGHT,
                CARD_WIDTH,
                CARD_HEIGHT,
            );
            cardNumber += 1;
            if (cardNumber >= 9) {
                pdf.addPage();
                cardNumber = 0;
            }
        }
    });
    pdf.save('HPTCG.pdf');
};
