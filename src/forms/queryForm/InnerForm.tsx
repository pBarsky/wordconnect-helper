import { FormikProps } from 'formik'
import { Checkbox, Form, Input, SubmitButton } from 'formik-semantic-ui-react'
import { memo } from 'react'
import { FormGroup } from 'semantic-ui-react'
import ErrorBox from '../../components/errors/ErrorBox'
import { QueryFormValues } from '../../model/QueryForm'
import cssClasses from './QueryForm.module.scss'

const InnerForm = (props: FormikProps<QueryFormValues>) => {
  const {
    touched,
    errors,
    isSubmitting,
    values: { minCount, maxCount }
  } = props
  return (
    <Form className={cssClasses.QueryForm}>
      <FormGroup grouped>
        <Input label='Litery' type='text' name='query' />
        <ErrorBox
          visible={!!errors.query && !!touched.query}
          message={errors.query ?? ''}
        />
        <Checkbox name='unique' label='Bez powtórzeń' />
      </FormGroup>
      <FormGroup widths={'equal'}>
        <Input
          fluid
          label='Maks liczba liter'
          type='number'
          name='maxCount'
          min={minCount}
        />
        <ErrorBox
          visible={!!errors.maxCount && !!touched.maxCount}
          message={errors.maxCount ?? ''}
        />

        <Input
          label='Min liczba liter'
          type='number'
          name='minCount'
          fluid
          min={1}
          max={maxCount}
        />
        <ErrorBox
          visible={!!errors.minCount && !!touched.minCount}
          message={errors.minCount ?? ''}
        />
      </FormGroup>
      <SubmitButton
        color='black'
        style={{ marginTop: '20px' }}
        type='submit'
        disabled={isSubmitting}
      >
        Szukaj
      </SubmitButton>
    </Form>
  )
}

export default memo(InnerForm)
