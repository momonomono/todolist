export default function ImagesGrid() {
    return (
        <div className="c-grid__content-sub">
            <label></label>
            <article>
                <div>
                    <p>画像１</p>
                    <input type="file" name="picture_path1" className="p-form__file" />
                </div>
                <div>
                    <p>画像２</p>
                    <input type="file" name="picture_path2" className="p-form__file" />
                </div>
            </article>
        </div>
    )
}