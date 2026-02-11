import { useState } from 'react';

export default function ImagesGrid() {
    const fields = [
        { name: 'picture_path1', label: 'メイン画像' },
        { name: 'picture_path2', label: 'サブ画像' },
    ];

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

        console.log(file);
    }

    return (
        <section className="c-grid__container">
            <h3 className="c-text__title">画像アップロード</h3>
            <p className="c-text__hint">JPG/PNG、1枚5MBまで</p>

            <div className="u-mt-4">
                <article className="c-grid__list">
                    {Object.values(imagePaths).map(() => (
                        <ImageUploadItem />
                    ))}
                </article>
            </div>
        </section>
    );
}
