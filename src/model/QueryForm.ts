export interface QueryFormProps {
  initialQuery?: string;
  initialMinCount?: number;
  initialMaxCount?: number;
  clearResults: () => void,
  handleQuerySearch: (values: QueryFormValues) => void
}

export interface QueryFormValues {
  query: string;
  maxCount: number,
  minCount: number
}
