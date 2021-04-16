interface queryMessages {
  required: string;
  onlyLetters: string
}

interface minCountMessages {
  minimum: string;
  greaterThanMax: string;
}

interface maxCountMessages {
  minimum: string;
  lesserThanMin: string;

}

interface IMessages {
  query: queryMessages;
  minCount: minCountMessages;
  maxCount: maxCountMessages;
}

const messages: Record<string, IMessages> = {
  en: {
    query: {
      required: 'Required',
      onlyLetters: 'Must contain only letters or space character'
    },
    maxCount: {
      minimum: 'Maximum number of letters in a word must be at least 1.',
      lesserThanMin: 'Maximum number of letters must greater or equal to minimum number of letters.'
    },
    minCount: {
      minimum: 'Minimum number of letters in a word must be at least 1.',
      greaterThanMax: 'Minimum number of letters must less or equal to maximum number of letters.'
    }
  },
  pl: {
    query: {
      required: 'Wymagane',
      onlyLetters: 'Musi zawierać wyłacznie litery lub znak spacji.'
    },
    maxCount: {
      minimum: 'Maksymalna liczba liter musi być więszka lub równa 1.',
      lesserThanMin: 'Maksymalna liczba liter musi być większa lub równa minimalnej liczbie liter.'
    },
    minCount: {
      minimum: 'Minimalna liczba liter w słowie musi wynosić co najmniej 1.',
      greaterThanMax: 'Minimalna liczba liter musi być mniejsza lub równa maksymalnej liczbie liter.'
    }
  }
}

export default messages
