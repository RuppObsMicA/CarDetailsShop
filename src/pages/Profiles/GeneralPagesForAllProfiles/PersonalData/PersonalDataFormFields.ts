export function getChangePersonalDataFieldsSettings() {
    return [
        {
            label: 'Username',
            name: 'username',
            type: 'text',
            placeholder: 'Enter Username',
            validation: {
                required: 'This is a required field',
                minLength: { value: 5, message: 'Min length is 5' },
            },
        },
        {
            label: 'Fullname',
            name: 'fullname',
            type: 'text',
            placeholder: 'Enter Full name',
            validation: {
                required: 'This is a required field',
            },
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Enter email',
            validation: {
                required: 'This is a required field',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                },
            },
        },
        {
            label: 'Phone',
            name: 'phone',
            type: 'number',
            placeholder: 'Enter phone',
            validation: {
                required: 'This is a required field',
            },
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'Enter password',
            validation: {
                required: 'This is a required field',
                minLength: { value: 6, message: 'Min length is 6' },
            },
        },
    ];
}
