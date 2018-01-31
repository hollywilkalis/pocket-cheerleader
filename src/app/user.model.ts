export class User {
    constructor (
      public firstName: string,
      public userName: string,
      public password: string,
      public id: number,
      public moods: string[]
    ) { }
}
