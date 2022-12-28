import { fileUpload } from "../../src/helpers/fileUpload"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name:'stx-journal',
    api_key:'672417416813312',
    api_secret:'u3rEUilLV1zzDHLzXSbUdu1U3bg'

 })

describe('Pruebas en fileUpload', () => {
    

    test('debe de subir el archivo correctamente a Cloudinary', async () => {

        const imageUrl = `https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1.jpg`;
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length-1].replace('.jpg','');
        const cloudResp = await cloudinary.api.delete_resources(['journal/'+imageId],{
            resource_type:'image'
        });
        console.log({cloudResp});
    })


    test('debe de retornar null ', async () => {

        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null)

    })
})