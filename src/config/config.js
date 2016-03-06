module.exports = {
    firebase: 'https://personaltraining.firebaseIO.com',
    signup: {
        questions: {
            general: [
                {
                    type: 'input',
                    fieldName: 'Name'
                },
                {
                    type: 'radio',
                    fieldName: 'Gender',
                    options: [ 'Male', 'Female' ]
                },
                {
                    type: 'input',
                    fieldName: 'Address'
                },
                {
                    type: 'input',
                    fieldName: 'City'
                },
                {
                    type: 'select',
                    fieldName: 'State'
                },
                {
                    type: 'input',
                    fieldName: 'Zip Code'
                },
                {
                    type: 'input',
                    fieldName: 'Mobile'
                },
                {
                    type: 'input',
                    fieldName: 'Email'
                }
            ],
            trainers: [
                {
                    type: 'input',
                    fieldName: 'Years you\'ve been a trainer'
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
