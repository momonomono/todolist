import React, { useState, useEffect } from 'react';
import FormContainer from '../components/Form-container';

const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

export default function Form({ children }) {

    return (
        <>
            <div className="p-grid__main">
                <article className="p-grid__content-todolist">
                    { children }
                </article>
            </div>
        </>
    )
}
