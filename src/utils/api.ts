class Api {
  _url: string;

  constructor(url: string) {
    this._url = url;
  }

  _checkResponse(res: Response) {
    if(res.ok) {
      return res.json();
    }
    
    return Promise.reject(res.status);
  }

  signUp(name: string, email: string, password:string) {
    return fetch(`${this._url}/auth/register`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username: name, email, password}),
    }).then(this._checkResponse);
  }
}

export const api = new Api('http://localhost:5000/api');