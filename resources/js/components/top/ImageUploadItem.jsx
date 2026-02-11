export default function ImageUploadItem({ label, imagePath, onChange }) {
    return (
        <label className="p-grid__image">
            <p>画像</p>
            <input 
                type="file" 
                className="p-form__file"
                name="image"
                onChange={onChange}
            />
            <img className="p-image__sample"/>
        </label>
    )
}