import useImageUpload from './hooks/useImageUpload.jsx';
import ImageUploadItem from './ImageUploadItem.jsx';

export default function ImagesGrid() {
    const { imagePaths, handleChangeFile } = useImageUpload();

    const fields = [
        { key: 1, name: 'picture_path1', label: 'メイン画像' },
        { key: 2, name: 'picture_path2', label: 'サブ画像' },
    ];
    

    return (
        <section className="c-grid__container">
            <h3 className="c-text__title">画像アップロード</h3>
            <p className="c-text__hint">JPG/PNG、1枚5MBまで</p>

            <div className="u-mt-4">
                <article className="c-grid__list">
                    {Object.values(imagePaths).map((imagePath, index) => (
                        <ImageUploadItem
                            key={index}
                            label={fields.label}
                            imagePath={imagePath[fields.name]}
                            onChangeFile={handleChangeFile}
                        />
                    ))}
                </article>
            </div>
        </section>
    );
}
