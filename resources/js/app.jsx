import { createRoot } from 'react-dom/client';
import Form from './pages/form.jsx';
import Top from './pages/top.jsx';

const roots = [
    { id: 'form', component: <Form /> },
    { id: 'top', component: <Top /> }
];

roots.forEach(({ id, component }) => {
    const element = document.getElementById(id);
    if (element) {
        createRoot(element).render(component);
    }
});