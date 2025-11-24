import ReactDOM from 'react-dom/client';
import Form from './pages/form.jsx';


const roots = [{
    id : 'form', component : <Form />
}];

roots.forEach(({ id, component }) => {
    const element = document.getElementById(id);
    if (element) {
        ReactDOM.createRoot(element).render(component);
    }
});