import axios from 'axios';
import { capitalizeFirstLetter } from './util';

const cleanName = (name: string) => {
    return capitalizeFirstLetter(
        name
            // remove spaces
            .replaceAll(/\s(?<letter>.)/g, (_, group1: string) => {
                return group1.toUpperCase();
            })
            // remove punctuation
            .replaceAll(/'/g, ''),
    );
};

export const fetchCard = async (name: string) => {
    const cleanedName = cleanName(name);
    const tries = [
        `${cleanedName}.png`,
        `${cleanedName}.jpg`,
        `${cleanedName}.jpeg`,
    ];
    return Promise.any(
        tries.map(async (filename) => {
            return axios.get<Blob>(
                `https://accio.cards/cardimages/${filename}`,
                { responseType: 'blob' },
            );
        }),
    ).then(async (response) => {
        const reader = new window.FileReader();
        reader.readAsDataURL(response.data);
        return new Promise<string | null>((resolve) => {
            reader.onload = () => {
                resolve(reader.result?.toString() ?? null);
            };
        });
    });
};
