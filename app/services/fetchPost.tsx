interface formData {
    name:string,
    text:string
}

const postFetch = (data: formData) => {
    return fetch('https://portafolio-back-ld0c.onrender.com/feedback', {
        method:'post',
        body:JSON.stringify(data)
    })
    .then(res => res.json())
}

export default postFetch