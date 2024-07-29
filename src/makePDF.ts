import { jsPDF } from 'jspdf';

// card dimensions in millimeters
const CARD_WIDTH = 63;
const CARD_HEIGHT = 88;

export enum PageSize {
    LETTER = 'letter',
    A4 = 'a4',
}

export const makePDF = (pageSize: PageSize, image: string) => {
    const pdf = new jsPDF({ format: pageSize });

    pdf.addImage(image, 'png', 40, 40, CARD_WIDTH, CARD_HEIGHT);
    pdf.save('HPTCG.pdf');
};
