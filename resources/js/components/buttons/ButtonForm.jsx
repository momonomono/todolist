import usePost from '@js/usual/usePost.jsx';

export default function ButtonForm({ formData, setFormData, setError }) {
    const { submitApi } = usePost({ formData, setFormData, setError, pathName: '/api/top' });

    return (
        <button 
            className="p-button__main" 
            onClick={ submitApi }
        >送信</button>
    )
}