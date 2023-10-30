import { client } from './utils/network';

export type Subject =
  | 'science'
  | 'art'
  | 'history'
  | 'literature'
  | 'social_science'
  | 'random';

export async function requestPassage(subject: Subject) {
  const { data } = await client.post<{ passage: string }>('/sat/passage', {
    subject,
  });
  return data;
}

export type ProblemType = 'blank' | 'find_subject' | 'grammar' | 'conjunction';

export async function requestProblem(
  passage: string,
  problemType: ProblemType
) {
  const { data } = await client.post<{
    passage: string;
    problem: string;
    choices: string[];
    answer: string;
  }>('/sat/problem', { passage, problem_type: problemType });
  return data;
}
