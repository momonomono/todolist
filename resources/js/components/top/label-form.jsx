export default function labelForm({ label, formName, children }) {
    
    
    return (
        <div className="c-grid__content-sub">
            <label htmlFor={formName}>{label}</label>
            {children}
            <div>
                <p className="c-text__error">エラーメッセージ</p>
            </div>
        </div>
    )
}