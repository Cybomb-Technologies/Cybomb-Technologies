import React, { useState, useEffect } from 'react';

function Popupform() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Show modal after 15 seconds
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 5000); // 15 seconds = 15000ms

        return () => clearTimeout(timer); // Cleanup
    }, []);

    const handleClose = () => setShowModal(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
        handleClose();
    };

    return (
        <>
            {/* Bootstrap Modal (without react-bootstrap) */}
            {showModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Contact Us</h5>
                                <button type="button" className="btn-close" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your name" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter your email" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Popupform;