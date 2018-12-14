import React from 'react'
import { DisplayFormikState } from './DisplayFormikState'
import { TextField, Grid, Button, CircularProgress } from '@material-ui/core';
function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
const MyForm = props => {
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        dirty,
    } = props;
    return (

        <form onSubmit={handleSubmit}>
            <Grid container spacing={16}>
                <Grid item xs={6}>
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            Registration Form
                        </div>
                        <div className="card-body">
                            <TextField
                                id="email"
                                label="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                margin="normal"
                                variant="outlined"
                                type="email"
                                error={errors.email !== "" && errors.email != undefined && touched.email === true}
                                helperText={errors.email != "" && touched.email === true && errors.email}
                                fullWidth
                            />
                            <TextField
                                id="name"
                                label="Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                margin="normal"
                                variant="outlined"
                                type="text"
                                error={errors.name !== "" && errors.name != undefined && touched.name === true}
                                helperText={errors.name != "" && touched.name === true && errors.name}
                                fullWidth
                            />

                            <Button
                                variant="contained"
                                className="mr-3"
                                color="primary"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >
                                Reset
                            </Button>
                            <Button className="mr-4" variant="contained" color="primary" type="submit" disabled={isSubmitting || !isEmpty(errors)}>
                                Submit
                             </Button>
                             {isSubmitting && <CircularProgress size={24} thickness={4} />}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <DisplayFormikState {...props} />
                </Grid>
            </Grid>

        </form>


    );
};

export default MyForm