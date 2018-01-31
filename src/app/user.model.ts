import { Sleep } from '../sleep/sleep-model';
// import { Mood } from ''

export class User {
    constructor (
      public firstName: string,
      public email: string,
      public password: string,
      public moods: string[],
      public sleeps: Sleep[]
    ) { }
}
