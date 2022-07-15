import axios from 'axios'

export class UserService2 {
  private static serverUrl: string = `https://jsonplaceholder.typicode.com`

  public static getAllUsers() {
    let dataUrl: string = `${this.serverUrl}/users`
    return axios.get(dataUrl)
  }
}
