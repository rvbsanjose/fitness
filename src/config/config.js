module.exports = {
    firebase: 'https://personaltraining.firebaseIO.com',
    signup: {
        questions: {
            general: [
                {
                    type: 'input',
                    fieldName: 'Name',
                    placeholder: 'Type your first name...'
                },
                {
                    type: 'radio',
                    fieldName: 'Gender',
                    options: [ 'Male', 'Female' ]
                },
                {
                    type: 'input',
                    fieldName: 'Address',
                    placeholder: 'Type your home address...'
                },
                {
                    type: 'input',
                    fieldName: 'City',
                    placeholder: 'Type your city...'
                },
                {
                    type: 'select',
                    fieldName: 'State'
                },
                {
                    type: 'input',
                    fieldName: 'Zip Code',
                    placeholder: 'Type your zip code...'
                },
                {
                    type: 'input',
                    fieldName: 'Mobile',
                    placeholder: 'Type your mobile phone number...'
                },
                {
                    type: 'input',
                    fieldName: 'Email',
                    placeholder: 'Type your email address...'
                }
            ],
            coaches: [
                {
                    type: 'input',
                    fieldName: 'Years you\'ve been a trainer',
                    placeholder: 'Please be as accurate as possible...'
                }
            ],
            palestrato: [
                {
                    type: 'radio',
                    fieldName: 'Are you looking for a trainer',
                    options: [ 'Yes', 'No' ]
                },
                {
                    type: 'radio',
                    fieldName: 'Which gender do you prefer',
                    options: [ 'Male', 'Female' ]
                },
                {
                    type: 'radio',
                    fieldName: 'Do you belong to any gym currently',
                    options: [ 'Yes', 'No' ]
                },
                {
                    type: 'checkbox',
                    fieldName: 'What are your fitness goals',
                    options: [ 'Weight Loss', 'Tone Up', 'Other' ]
                }
            ]
        }
    }
};
