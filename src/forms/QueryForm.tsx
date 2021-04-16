import { FormikErrors, FormikProps, withFormik } from 'formik'
import { Checkbox, Form, Input, SubmitButton } from 'formik-semantic-ui-react'
import React from 'react'
import { QueryFormProps, QueryFormValues } from '../model/QueryForm'
import ErrorBox from './ErrorBox'
import { FormGroup } from 'semantic-ui-react'
import ErrorMessages from '../utilities/ErrorMessages'

// TODO: Add validation for numbers
// TODO: Change the way errors are presented

const InnerForm = (props: FormikProps<QueryFormValues>) => {
  const { touched, errors, isSubmitting, values: { minCount, maxCount } } = props
  return (
    <Form style={{ maxWidth: '400px' }}>
      <FormGroup widths={'equal'} grouped>
        <Input label="Litery" type="text" name="query"/>
        <Checkbox name='unique' label="Bez powtórzeń"/>
        <ErrorBox visible={!!errors.query && !!touched.query} message={errors.query ?? ''}/>
      </FormGroup>
      <FormGroup widths={'equal'}>
        <Input label="Maks liczba liter" type="number" name="maxCount" min={minCount}/>
        <ErrorBox visible={!!errors.maxCount && !!touched.maxCount} message={errors.maxCount ?? ''}/>

        <Input label="Min liczba liter" type="number" name="minCount" min={1} max={maxCount}/>
        <ErrorBox visible={!!errors.minCount && !!touched.minCount} message={errors.minCount ?? ''}/>
      </FormGroup>
      <SubmitButton style={{ marginTop: '20px' }} type="submit" disabled={isSubmitting}>
        Szukaj
      </SubmitButton>
    </Form>
  )
}

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

const validate = (values: QueryFormValues) => {
  const errors: FormikErrors<QueryFormValues> = {}
  validateQuery(values, errors)
  validateMinCount(values, errors)
  validateMaxCount(values, errors)
  return errors
}

const QueryForm = withFormik<QueryFormProps, QueryFormValues>({
  mapPropsToValues: props => {
    return {
      query: props.initialQuery ?? '',
      maxCount: props.initialMaxCount ?? 5,
      minCount: props.initialMinCount ?? 1,
      unique: props.initialUnique ?? true
    }
  },
  validate: validate,
  handleSubmit: (values, { props: { handleQuerySearch, clearResults }, setSubmitting }) => {
    clearResults()
    handleQuerySearch(values)
    setSubmitting(false)
  }
})(InnerForm)

export default QueryForm
