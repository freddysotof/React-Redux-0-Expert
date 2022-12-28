import { DeleteOutline, SaveOutlined, UploadFileOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks"
import { setActiveNote, startDeletingNote, startLoadingFiles, startSaveNote } from "../../store/journal"
import { ImageGallery } from "../components"
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setActiveNote(formState))


    }, [formState])

    useEffect(() => {
        if (messageSaved.length > 0)
            Swal.fire(
                'Nota actualizada',
                messageSaved,
                "success"
            );
    }, [messageSaved])


    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();

    }, [date])

    const fileInputRef = useRef();
    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(startLoadingFiles(target.files))
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }
    return (
        <Grid
            className="animate__animated animate__fadeIn animate__faster"

            container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>

                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                />
                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadFileOutlined />
                </IconButton>

                <Button color="primary" sx={{ padding: 2 }}
                    onClick={onSaveNote}
                    
                    disabled={isSaving}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Que sucedió en el día de hoy?"
                    // label="Cuerpo"
                    sx={{ border: 'none', mb: 1 }}
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />

                <Grid container
                    justifyContent={'end'}
                >
                    <Button
                    color="error"
                        onClick={onDelete}
                        sx={{ mt2: 2 }}
                    >
                        <DeleteOutline />
                        Borrar
                    </Button>

                </Grid>

                {/* Image Gallery */}
                <ImageGallery images={note.imageUrls} />
            </Grid>
        </Grid>
    )
}
