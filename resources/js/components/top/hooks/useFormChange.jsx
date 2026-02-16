export default function useFormChange() {
    // フォーム変更の際の処理
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return { handleChange };
}