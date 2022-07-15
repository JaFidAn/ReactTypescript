import { IUser2 } from '../components/models/IUser2'

export class UserService {
  private static users: IUser2[] = [
    {
      sno: 'AAA111',
      name: 'Rasim',
      age: 38,
      designation: 'Software Engineer',
      company: 'RasCo',
    },
    {
      sno: 'AAA112',
      name: 'Javid',
      age: 8,
      designation: 'Designer Engineer',
      company: 'RasCo',
    },
    {
      sno: 'AAA113',
      name: 'Fidan',
      age: 6,
      designation: 'Medical Engineer',
      company: 'RasCo',
    },
  ]

  public static getAllUsers() {
    return this.users
  }
}
