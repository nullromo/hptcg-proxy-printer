export const capitalizeFirstLetter = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
};

export type ReactSetter<T> = React.Dispatch<React.SetStateAction<T>>;
