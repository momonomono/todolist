export default function useFormChange({ setFormData }) {
    // フォーム変更の際の処理
    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(name, value);
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return { handleChange };
}