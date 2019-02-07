export const updateFormData = formData => {
    return {
      type: 'UPDATE_FORM_DATA',
      formData
    }
  }
  
  export const resetForm = () => {
    return {
      type: 'RESET_FORM'
    }
  }
  