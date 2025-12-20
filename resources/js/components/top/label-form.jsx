export default function labelForm({ label, formName, errorMsg="", children }) {
    
    
    return (
        <div className="c-grid__content-sub">
            <label htmlFor={formName}>{label}</label>
            {children}
            <div>
                <p className="c-text__error">{errorMsg}</p>
            </div>
        </div>
    )
}