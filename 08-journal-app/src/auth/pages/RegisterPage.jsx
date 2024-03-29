import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../hooks"
import { startCreatingUserWithEmailPassword } from "../../store/auth"
import { AuthLayout } from "../layout/AuthLayout"


const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'La contraseña debe de tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es requerido'],
}

export const RegisterPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, displayName, email, password,
    onInputChange, isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);
  const isAuthenticating = useMemo(() => status === 'checking', [status]);


  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState))
  }
  return (
    <AuthLayout title="Crear cuenta">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid
          container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="John Doe"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />

          </Grid>
        </Grid>
        <Grid
          container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              // type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />

          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Conraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />

          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid
              item
              xs={12}
              sm={6}
              display={!!errorMessage ? '' : 'none'}
            >
              <Alert severity="error">
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
              >
                Crear Cuenta
              </Button>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid> */}
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="end"
          >
            <Typography
              sx={{ mr: 1 }}
            >Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Ingresar

            </Link>

          </Grid>
        </Grid>

      </form>
    </AuthLayout>
  )
}
