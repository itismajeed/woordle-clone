import { LetterStatus } from '../../components/Letter/letter.status'

export interface Attempt {
  word: string;
  status: LetterStatus[];
}

export interface AttemptStore {
  attempts: Attempt[]
  setAttempt: (attempt: Attempt) => void
}