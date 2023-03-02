import { FormValues } from 'interfaces/property';

export const validateForm = (formValues: FormValues) => {
    const error: { message: string } = { message: '' };
    let hasError = false;

    Object.keys(formValues).forEach((key) => {
        switch (key) {
            case 'title':
                if (!formValues.title) {
                    error.message = 'Title is required';
                    hasError = true;
                }
                break;

            case 'description':
                if (!formValues.description) {
                    error.message = 'Description is required';
                    hasError = true;
                }    
                break;

            case 'propertyType':
                if (!formValues.propertyType) {
                    error.message = 'property type is required';
                    hasError = true;
                }     
                break;
            
            case 'location':
                if (!formValues.location) {
                    error.message = 'Location is required';
                    hasError = true;
                }    
                break;
             
            case 'price':
                if (!formValues.price) {
                    error.message = 'price is required';
                    hasError = true;
                }    
                break;

            default:
                hasError = false;    
        }
    });

    return { hasError, error };
};

export const hasChange = (initialValues: FormValues, currentValues : FormValues) => {
    const initialValuesArray = Object.values(initialValues);
    const currentValuesArray = Object.values(initialValues);
    for (let i = 0; i < initialValuesArray.length; i++) {
        if (initialValuesArray[i] !== currentValuesArray[i]) {
            return true;
        }
    }
    return false;
};