import { useState, useEffect } from "react";
  
export default function Card() {
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        fetch('/api/liked', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token
            },
            body: JSON.stringify({
                id: 1
            })
        })
        .then(response => console.log(response))
        .then((data) => {
            setIsLiked(!isLiked);
            console.log
        });
    }, []);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        console.log('clicked');
    }


    return (
        <div className="p-grid__card">
            <div className="p-grid__like">
                <p>いいね</p>
                <button onClick={handleLikeClick}>♡</button>
            </div>
        </div>
    )
}