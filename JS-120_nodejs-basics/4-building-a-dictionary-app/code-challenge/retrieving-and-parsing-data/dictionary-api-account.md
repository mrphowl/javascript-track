# Dictionary API Credentials

To be able to use the dictionary API, we need the correct API endpoint and API key.

We can [login](https://dictionaryapi.com/sign-in) or [register](https://dictionaryapi.com/register/index) a developer account in [Merriam-Webster Developer Center](https://dictionaryapi.com/).

After logging in, the API keys can be accessed in the [YOUR KEYS](https://dictionaryapi.com/account/my-keys) section.

> Note: What I used here is the Learner's dictionary. The other one that I selected, the school dictionary, seems to have weird definitions or limited words.

## Usage

In the API keys page, you can click on the API key and it will show an example usage, written in PHP, where we can copy the URL endpoint and API key.

For this project, the API endpoint is

```text
https://www.dictionaryapi.com/api/v3/references/learners/json
```

The `learners` part is the dictionary that will be used and is different from other dictionary APIs.

After the `json` part, we can add the word that we need to get the definition of, like this:

```text
https://www.dictionaryapi.com/api/v3/references/learners/json/apple
```

Then we supply the API key as the value of the `key` parameter.

```text
https://www.dictionaryapi.com/api/v3/references/learners/json/apple?key=<API_KEY>
```



