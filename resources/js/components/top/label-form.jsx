export default function labelForm({ label, type }) {
    
    
    return (
        <div className="c-grid__content-sub">
            <label>{label}</label>
            <input type={type} className="p-form__text" />
            <div>
                <p className="c-text__error">エラーメッセージ</p>
            </div>
        </div>
    )
}