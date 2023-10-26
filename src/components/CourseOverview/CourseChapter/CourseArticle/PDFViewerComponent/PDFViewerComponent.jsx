import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewerComponent = (props) => {
    return (
        <div style={{ width: '100%', height: '800px' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js`}>
                <Viewer fileUrl={`/articlesPdf/${props.urlLink}.pdf`} />
            </Worker>
        </div>
    );
};

export default PDFViewerComponent;