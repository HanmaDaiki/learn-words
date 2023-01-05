class ApiDictionary {
  _url: string;
  _options: {[key: string]: any};

  constructor(url: string, options: {[key: string]: any}) {
    this._url = url;
    this._options = options;
  }

  _checkResponse(res: Response) {
    if(res.ok) {
      return res.json();
    };
    
    return Promise.reject(res.status);
  };

  getTranslation(word: string): Promise<any> {
    return fetch(`${this._url}?key=${this._options.key}&lang=${this._options.lang}&text=${word}`)
      .then(this._checkResponse)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}

const apiDictionary = new ApiDictionary('https://dictionary.yandex.net/api/v1/dicservice.json/lookup', {
  lang: 'en-ru', 
  key: 'dict.1.1.20230105T075914Z.5f251d51bba977d5.673ab2e11b87cdd4aac0cb5ba7916944390844e1'
});

export {apiDictionary};