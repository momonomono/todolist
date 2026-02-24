export default function usePost({ formData, setFormData, setError, pathName}) {
    const submitApi = async () => {
        setError({});  
        console.log(pathName);
        const res = await fetch(pathName, {
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

        setFormData( prev => {
            Object.fromEntries(
                Object.keys(prev).map(key => [key, ''])
            )
        })
    };

    return { submitApi }
}