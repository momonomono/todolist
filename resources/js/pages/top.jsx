import LabelForm from '../components/top/labelForm.jsx';
import ImagesGrid from '../components/top/imageGrid.jsx';
import ButtonForm from '@js/components/buttons/ButtonForm.jsx';
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
    const fields = [
        { label: '品番', formName: 'title', errorMsg: error.title, type: 'text' },
        { label: '現場名', formName: 'name', errorMsg: error.name, type: 'text' },
        { label: '数量', formName: 'quantity', errorMsg: error.quantity, type: 'number' },
        { label: '詳細', formName: 'description', errorMsg: error.description, type: 'textarea' }
    ]

    return (
        <div className="u-mt-5 u-mb-5">
            <div className=" c-grid__content-main">

                {Object.values(fields).map((field, index) => (
                    <LabelForm 
                        key={index}
                        label={field.label}
                        formName={field.formName}
                        errorMsg={field.errorMsg}
                        type={field.type}
                        setFormData={setFormData}
                    />
                ))}
                
                <ImagesGrid />

                <ButtonForm 
                    formData={formData}
                    setFormData={setFormData}
                    setError={setError}
                 />
            </div>
        </div>
    )
}