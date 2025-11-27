const getApiStatus = (req, res) => {
    // Send a success response with a friendly message
    res.json({
        message: 'Cybomb Technologies Company API is running smoothly!',
        status: 'OK',
        service: 'Cybomb Backend Service'
    });
};

export { getApiStatus };