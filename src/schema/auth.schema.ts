import * as yup from 'yup';

export const loginSchema = yup.object({
    username: yup
        .string()
        .required('username_required')
        .min(3, 'username_min'),
    password: yup
        .string()
        .required('password_required')
        .min(6, 'password_min')
        .matches(/^\S+$/, 'password_no_spaces')
});
