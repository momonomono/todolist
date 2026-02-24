import useFormChange from '@js/components/top/hooks/useFormChange.jsx';

export default function labelForm({ label, formName, errorMsg="", type="text", setFormData }) {
    const { handleChange } = useFormChange({ setFormData });
    
    return (
        <div className="c-grid__container">
            <label htmlFor={formName} >
                <p>{label}</p>
                { type === "textarea" ? (
                <textarea onBlur={handleChange} name={formName} className="p-form__text p-form__detail"></textarea>
                ) : (
                    <input type={type} onBlur={handleChange} name={formName} className="p-form__text" />
                )}
            </label>
            <div>
                <p className="c-text__error">{errorMsg}</p>
            </div>
        </div>
    )
}