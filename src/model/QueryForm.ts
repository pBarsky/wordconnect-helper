export interface QueryFormProps {
  initialQuery?: string;
  initialMinCount?: number;
  initialMaxCount?: number;
  initialUnique?: boolean;
  clearResults: () => void;
  handleQuerySearch: (values: QueryFormValues) => void;
}

export interface QueryFormValues {
  query: string;
  maxCount: number;
  minCount: number;
  unique: boolean;
}
