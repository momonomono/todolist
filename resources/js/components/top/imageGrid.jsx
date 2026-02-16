import useImageUpload from './hooks/useImageUpload.jsx';
import ImageUploadItem from './ImageUploadItem.jsx';

export default function ImagesGrid() {
    const { imagePaths, handleChangeFile } = useImageUpload();

    const fields = [
        { key: 1, name: 'picture_path1' },
        { key: 2, name: 'picture_path2' },
    ];

    return (
        <section className="c-grid__container">
            <h3 className="c-text__title">画像アップロード</h3>
            <p className="c-text__hint">JPG/PNG、1枚5MBまで</p>

            <div className="u-mt-4">
                <article className="c-grid__list">
                    {Object.values(fields).map((field, index) => (
                        <ImageUploadItem
                            key={index}
                            name={field.name}
                            imagePath={imagePaths[field.name]}
                            onChange={handleChangeFile}
                        />
                    ))}
                </article>
            </div>
        </section>
    );
}
