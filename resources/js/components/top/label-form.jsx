export default function labelForm({ label, type }) {
    return (
        <div>
            <label>{label}</label>
            <input type={type} />
            <div>
                <p>エラーメッセージ</p>
            </div>
        </div>
    )
}