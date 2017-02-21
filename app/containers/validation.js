//validation.js

export const validate = ( fieldValue, fieldName, validation, error ) => {
  var errorArr = {}
  if(!validation(fieldValue)){
    errorArr[fieldName] = error
    errorArr["_error"] = error
    throw new SubmissionError(errorArr)
  }
}

export const validateNotNegative = (fieldValue, fieldName, label ) =>{
  validate(fieldValue, fieldName, ((value) => value >= 0), `invalid value for ${label}`)
}