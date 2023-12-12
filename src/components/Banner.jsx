import React from 'react';
import Container from '../Shared/Container';
import { FiDownload } from 'react-icons/fi';
import { saveAs } from 'file-saver';

const Banner = () => {
    const downloadPdf = () => {
        // Replace the following link with your actual Google Drive PDF link
        const pdfLink = 'https://drive.google.com/uc?export=download&id=18breTMChR8ZeFk-F7O7_je8pXi_MuphJ';

        // Trigger the download
        saveAs(pdfLink, 'Resume.pdf');
    };

    return (
        <Container>
            <div
                className="hero h-96 -mt-14 rounded "
                style={{ backgroundImage: 'url(https://i.ibb.co/VgjbKpb/photo.jpg)' }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Web Developer</h1>
                        <p className="mb-5">
                            I am a frontent developer. react experience assumenda excepturi exercitationem quasi. In
                            deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-outline btn-secondary text-2xl" onClick={downloadPdf}>
                            DownLoadResume
                            <FiDownload />
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;
