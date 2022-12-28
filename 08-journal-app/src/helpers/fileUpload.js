export const fileUpload = async (file) => {
    // if (!file) throw new Error("No se recibió el archivo");
    if (!file)
        return null;
    const cloudUrl = 'https://api.cloudinary.com/v1_1/stx-journal/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'stx-journal')
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,

        })

        if (!resp.ok) throw new Error("No se puedo subir imagen");

        const cloudResp = await resp.json();
        return cloudResp.secure_url;

    } catch (error) {
        // console.error(error)
        // throw new Error(error.message);
        return null;
    }
}