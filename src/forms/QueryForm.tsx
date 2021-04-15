import { FormikErrors, FormikProps, withFormik } from 'formik'
import { Form, Input, SubmitButton } from 'formik-semantic-ui-react'
import React from 'react'
import { QueryFormProps, QueryFormValues } from '../model/QueryForm'
import ErrorBox from './ErrorBox'
import { FormGroup } from 'semantic-ui-react'

// TODO: Add validation for numbers
// TODO: Change the way errors are presented

const InnerForm = (props: FormikProps<QueryFormValues>) => {
  const { touched, errors, isSubmitting } = props
  return (
    <Form style={{ maxWidth: '400px' }}>
      <FormGroup widths={'equal'}>
        <Input label="Litery" type="text" name="query"/>
        <ErrorBox visible={!!errors.query && !!touched.query} message={errors.query ?? ''}/>
      </FormGroup>
      <FormGroup>
        <Input label="Maks liczba liter" type="number" name="maxCount"/>
        <ErrorBox visible={!!errors.maxCount && !!touched.maxCount} message={errors.maxCount ?? ''}/>

        <Input label="Min liczba liter" type="number" name="minCount"/>
        <ErrorBox visible={!!errors.minCount && !!touched.minCount} message={errors.minCount ?? ''}/>
      </FormGroup>
      <SubmitButton style={{ marginTop: '20px' }} type="submit" disabled={isSubmitting}>
        Submit
      </SubmitButton>

    </Form>
  )
}

const validate = (values: QueryFormValues) => {
  const errors: FormikErrors<QueryFormValues> = {}
  if (!values.query) {
    errors.query = 'Required'
  }
  if (!values.query.match(/^[a-zA-Z ]+$/)) {
    errors.query = 'Must contain only letters'
  }
  return errors
}

const QueryForm = withFormik<QueryFormProps, QueryFormValues>({
  mapPropsToValues: props => {
    return {
      query: props.initialQuery ?? '',
      maxCount: props.initialMaxCount ?? 5,
      minCount: props.initialMinCount ?? 1
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
