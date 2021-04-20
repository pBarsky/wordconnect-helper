import { QueryFormValues } from '../model/QueryForm'
import { FormikErrors } from 'formik'
import ErrorMessages from './ErrorMessages'

function validateQuery ({ query }: QueryFormValues, errors: FormikErrors<QueryFormValues>) {
  if (!query) {
    errors.query = ErrorMessages.pl.query.required
    return
  }
  if (!query.match(/^[a-zA-Z zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/)) {
    errors.query = ErrorMessages.pl.query.onlyLetters
  }
}

function validateMinCount ({ minCount, maxCount }: QueryFormValues, errors: FormikErrors<QueryFormValues>) {
  if (minCount < 1) {
    errors.minCount = ErrorMessages.pl.minCount.minimum
    return
  }
  if (minCount > maxCount) {
    errors.minCount = ErrorMessages.pl.minCount.greaterThanMax
  }
}

function validateMaxCount ({ maxCount, minCount }: QueryFormValues, errors: FormikErrors<QueryFormValues>) {
  if (maxCount < 1) {
    errors.minCount = ErrorMessages.pl.maxCount.minimum
    return
  }
  if (minCount > maxCount) {
    errors.minCount = ErrorMessages.pl.maxCount.lesserThanMin
  }
}

export const validateQueryForm = (values: QueryFormValues) => {
  const errors: FormikErrors<QueryFormValues> = {}
  validateQuery(values, errors)
  validateMinCount(values, errors)
  validateMaxCount(values, errors)
  return errors
}
