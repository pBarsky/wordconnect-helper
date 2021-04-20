import { FormikProps } from 'formik'
import { QueryFormValues } from '../../model/QueryForm'
import { Checkbox, Form, Input, SubmitButton } from 'formik-semantic-ui-react'
import cssClasses from './QueryForm.module.scss'
import { FormGroup } from 'semantic-ui-react'
import ErrorBox from '../../components/errors/ErrorBox'

export const InnerForm = (props: FormikProps<QueryFormValues>) => {
  const { touched, errors, isSubmitting, values: { minCount, maxCount } } = props
  return (
    <Form className={cssClasses.QueryForm}>
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
      <SubmitButton style={{ marginTop: '20px' }} type="submit" primary disabled={isSubmitting}>
        Szukaj
      </SubmitButton>
    </Form>
  )
}
