import LabelForm from '../components/top/label-form.jsx';
import { useState } from 'react';

export default function Top() {
    const [ error, setError ] = useState({});
    const [ formData, setFormData ] = useState({
        'title': '',
        'name': '',
        'quantity':''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        console.log(formData);
    }

    const clickSubmit = async () => {
        setError({});  

        const res = await fetch('/api/top', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content,
            },
            body: JSON.stringify({
                ...formData
            })
        });

        if (res.status === 422) {
            const data = await res.json();
            setError(data.errors);
            return;
        }

        if (!res.ok) {
            const text = await res.text(); // JSONじゃない場合もあるので保険
            throw new Error(`Request failed: ${res.status} ${text}`);
        }
    };

    return (
        <div className="u-mt-5 c-grid__content-main">
            <LabelForm label="品番" formName="title">
                <input type="text" onBlur={handleChange} name="title" className="p-form__text p-form__sub" />
            </LabelForm>

            <LabelForm label="品名" formName="name">
                <input type="text" onBlur={handleChange} name="name" className="p-form__text" />
            </LabelForm>

            <LabelForm label="数量" formName="quantity">
                <input type="number" min="0" onBlur={handleChange} name="quantity" className="p-form__text p-form__sub" />
            </LabelForm>

            <div className="c-grid__primary">
                <button className="p-button__main" onClick={clickSubmit} >送信</button>
            </div>
        </div>
    )
}