import { useState } from 'react';

export default function useImageUpload() {
    const [ imagePaths, setImagePaths ] = useState({
        picture_path1: '',
        picture_path2: '',
    });


    const handleChangeFile = (e) => {
        const input = e.currentTarget;
        const name = input.name;
        const file = input.files?.[0];

        if (!file || !file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            setImagePaths((prev) => ({
                ...prev,
                [name]: event.target.result,
            }));
        };
        reader.readAsDataURL(file);
    }

    return { imagePaths, handleChangeFile };
}