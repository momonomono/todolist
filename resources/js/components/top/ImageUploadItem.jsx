export default function ImageUploadItem({ name, imagePath, onChange }) {

    console.log(name);
    return (
        <label className="p-grid__image">
            <p>画像</p>
            <input 
                type="file" 
                className="p-form__file"
                name={name}
                onChange={onChange}
            />
            {
                imagePath && (
                    <img className="p-image__sample" src={imagePath} alt="プレビュー画像" />
                )
            }
        </label>
    )
}