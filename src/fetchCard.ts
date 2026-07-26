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
    const filenames = [
        `${cleanedName}.png`,
        `${cleanedName}.jpg`,
        `${cleanedName}.jpeg`,
    ];
    const folders = ['cardimages', 'cardimages2', 'cardimages3'];
    const tries = filenames.flatMap((filename) => {
        return folders.map((folder) => {
            return { filename, folder };
        });
    });
    console.log(tries);
    return Promise.any(
        tries.map(async ({ filename, folder }) => {
            return axios.get<Blob>(
                `https://accio.cards/${folder}/${filename}`,
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
