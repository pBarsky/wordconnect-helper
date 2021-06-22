import { withFormik } from 'formik'
import { QueryFormProps, QueryFormValues } from '../../model/QueryForm'
import { validateQueryForm } from '../../utilities/Validators'
import InnerForm from './InnerForm'
import { memo } from 'react'

const QueryForm = withFormik<QueryFormProps, QueryFormValues>({
  mapPropsToValues: props => {
    return {
      query: props.initialQuery ?? '',
      maxCount: props.initialMaxCount ?? 5,
      minCount: props.initialMinCount ?? 1,
      unique: props.initialUnique ?? true
    }
  },
  validate: validateQueryForm,
  handleSubmit: (values, {
    props: { handleQuerySearch, clearResults, setSubmitting: flagOutsideSubmitting }, setSubmitting
  }) => {
    clearResults()
    flagOutsideSubmitting(true)
    handleQuerySearch(values, () => setSubmitting(false))
  }
})(InnerForm)

export default memo(QueryForm)
