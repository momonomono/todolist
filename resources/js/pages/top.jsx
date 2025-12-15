import LabelForm from '../components/top/label-form.jsx';

export default function Top() {
    const [ error, setError ] = useState({});

    const clickSubmit = () => {
        
    }

    return (
        <div className="u-mt-5 c-grid__content-main">
            <LabelForm type="text" label="品番" />

            <LabelForm type="text" label="品番" />

            <LabelForm type="text" label="品番"  />

            <div className="c-grid__primary">
                <button className="p-button__main">送信</button>
            </div>
        </div>
    )
}