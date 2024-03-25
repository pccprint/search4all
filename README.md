<div align="center">
<h1 align="center">Search4All</h1>
The opensource AI search platform
<br/>
<a href="https://search2ai.online/website" target="_blank"> Live Demo </a>
<br/>
<img width="70%" src="https://github.com/leptonai/search_with_lepton/assets/1506722/845d7057-02cd-404e-bbc7-60f4bae89680">
</div>


## Features
- Built-in support for LLM
- Built-in support for search engine
- Customizable pretty UI interface
- Shareable, cached search results

## Setup Search Engine API
Choose your search service

### Search1API
Search1API is a versatile search aggregation service that enables you to perform searches across Google, Bing, and DuckDuckGo, and also retrieve clear content from URLs. [search1api website]( https://docs.search2ai.online/introduction)

### Bing Search
To use the Bing Web Search API, please visit [this link](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api) to obtain your Bing subscription key.

### Google Search
You have three options for Google Search: you can use the [SearchApi Google Search API](https://www.searchapi.io/) from SearchApi, [Serper Google Search API](https://www.serper.dev) from Serper, or opt for the [Programmable Search Engine](https://developers.google.com/custom-search) provided by Google.


## Deployment
### Zeabur

<a href="https://zeabur.com/templates/YHKPET?referralCode=fatwang2"><img src="https://zeabur.com/button.svg" alt="Deploy on Zeabur"/></a>

### Docker

```
docker run -d --name search4all -e OPENAI_API_KEY=sk-XXX -e OPENAI_BASE_URL=https://api.openai.com/v1 -e LLM_MODEL=gpt-3.5-turbo-0125 -e RELATED_QUESTIONS=1 -e SEARCH1API_KEY=XXX -e BACKEND=SEARCH1API -p 8800:8800 docker.io/fatwang2/search4all
```

### Docker-Compose
[Hub address](https://hub.docker.com/r/fatwang2/search4all)
```
version: '3.4'

services:
  search4all:
    image: docker.io/fatwang2/search4all
    restart: unless-stopped
    ports:
      - 8800:8800
    environment:
      OPENAI_API_KEY: sk-xxx
      OPENAI_BASE_URL: https://api.openai.com/v1
      LLM_MODEL: gpt-3.5-turbo-0125
      RELATED_QUESTIONS: 1
      NODE_ENV: production
      # Change your search provider name here, if use another different provider
      BACKEND: SEARCH1API
      # Set your search key from your provider here
      SEARCH1API_KEY: xxxx  
```

### Manual
1. install the requirements.txt
```shell
pip3 install -r requirements.txt
```
2. Set you LLM
```shell
export OPENAI_API_KEY=sk-XXX
OPENAI_BASE_URL=https://api.openai.com/v1
LLM_MODEL=gpt-3.5-turbo-0125
RELATED_QUESTIONS=1
NODE_ENV=production
```
3. Set your key of search
```shell
export SEARCH1API_KEY=YOUR_SEARCH1API_KEY
```
4. Build web
```shell
cd web && npm install && npm run build
```
5. Run server
```shell
BACKEND=SEARCH1API python3 search4all.py
```
## Environment Variable
This project provides some additional configuration items set with environment variables:

| Environment Variable | Required | Description                                                                                                                                                               | Example                                                                                                              |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `OPENAI_API_KEY`     | Yes      | This is the API key you apply on the OpenAI account page                                                                                                                  | `sk-xxxxxx...xxxxxx`                                                                                                 |
| `OPENAI_BASE_URL`   | No       | If you manually configure the OpenAI interface proxy, you can use this configuration item to override the default OpenAI API request base URL                             | The default value is<br/>`https://api.openai.com/v1` |                                                           |
| `LLM_MODEL`      | Yes       | The model you want to use. | `gpt-3.5-turbo-0125`   
| `RELATED_QUESTIONS`      | Yes       | Show the related questions. | `1`   
| `NODE_ENV`      | Yes       | The environment required for deployment is necessary only during manual deployment. | `production`   
| `BACKEND`      | Yes       | The search service you want. | `SEARCH1API,BING,GOOGLE,SERPER,SEARCHAPI`   
| `SEARCH1API_KEY`      | Yes       | If you choose SEARCH1API. | `xxx`   
| `BING_SEARCH_V7_SUBSCRIPTION_KEY`      | Yes       | If you choose BING. | `xxx`   
| `GOOGLE_SEARCH_CX`      | Yes       | If you choose GOOGLE. | `xxxx`   
| `GOOGLE_SEARCH_API_KEY`      | Yes       | If you choose GOOGLE. | `xxx`   
| `SEARCHAPI_API_KEY`      | Yes       | If you choose SEARCHAPI. | `xxx`   
| `SERPER_SEARCH_API_KEY`      | Yes       | If you choose SERPER. | `xxx`   



## TODO
- [ ] Support Lepton
- [ ] Support continuous search
- [ ] Support More LLMs
- [x] Support the Docker
- [x] Support the Zeabur
