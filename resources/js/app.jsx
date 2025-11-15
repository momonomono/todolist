import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <input type="text" />
            <button>追加</button>
        </div>
    );
};

const rootElement = document.getElementById('app');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
}

