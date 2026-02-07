import { createRoot } from 'react-dom/client';
import Form from './pages/form.jsx';
import Top from './pages/top.jsx';
import Like from './pages/like.jsx';
import Material from './pages/material.jsx';

const roots = [
    { id: 'form', component: <Form /> },
    { id: 'top', component: <Top /> },
    { id: 'like', component: <Like /> },
    { id: 'material', component: <Material /> }
];

roots.forEach(({ id, component }) => {
    const element = document.getElementById(id);
    if (element) {
        createRoot(element).render(component);
    }
});