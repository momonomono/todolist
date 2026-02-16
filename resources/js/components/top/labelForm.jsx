
export default function labelForm({ label, formName, errorMsg="", children }) {
    return (
        <div className="c-grid__container">
            <label htmlFor={formName} >
                <p>{label}</p>
            </label>
            {children}
            <div>
                <p className="c-text__error">{errorMsg}</p>
            </div>
        </div>
    )
}