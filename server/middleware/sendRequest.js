const sendRequest = (req, request, url, data) => {
    axios.post(`${url}`, data, {
        headers: {'Authorization': req.headers.authorization}
    })
    .then(async (response) => {
        return next(response.data)
    
    })
    .catch(err => new ErrorResponse(err, 500))
}