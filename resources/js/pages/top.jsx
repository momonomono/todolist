import LabelForm from '../components/top/label-form.jsx';
import ImagesGrid from '../components/top/images-grid.jsx';
import { useState } from 'react';

export default function Top() {
    const [ error, setError ] = useState({});
    const [ formData, setFormData ] = useState({
        'title': '',
        'name': '',
        'quantity':'',
        'description':'',
        'picture_path1': '',
        'picture_path2': ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
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
            const text = await res.text(); 
            throw new Error(`Request failed: ${res.status} ${text}`);
        }

        setFormData({
            'title': '',
            'name': '',
            'quantity':'',
            'description':'',
            'picture_path1': '',
            'picture_path2': ''
        })
    };

    return (
        <div className="u-mt-5 c-grid__content-main">
            <LabelForm label="品番" formName="title" errorMsg={error.title}>
                <input type="text" onBlur={handleChange} name="title" className="p-form__text p-form__sub" />
            </LabelForm>

            <LabelForm label="現場名" formName="name" errorMsg={error.name}>
                <input type="text" onBlur={handleChange} name="name" className="p-form__text" />
            </LabelForm>

            <LabelForm label="数量" formName="quantity" errorMsg={error.quantity}>
                <input type="number" min="0" onBlur={handleChange} name="quantity" className="p-form__text p-form__sub" />
            </LabelForm>

            <LabelForm label="詳細" formName="description" errorMsg={error.description}>
                <textarea onBlur={handleChange} name="description" className="p-form__text p-form__sub"></textarea>
            </LabelForm>

            <ImagesGrid />

            <div className="c-grid__primary">
                <button className="p-button__main" onClick={clickSubmit} >送信</button>
            </div>
        </div>
    )
}