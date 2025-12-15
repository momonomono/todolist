import LabelForm from '../components/top/label-form.jsx';

export default function Top() {

    return (
        <div>
            <LabelForm type="text" label="品番" />
            <button>送信</button>
        </div>
    )
}