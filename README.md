<div align="center">
<h1 align="center">Search4All</h1>
Build your own conversational search engine using less than 500 lines of code.
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
There are three default supported search engines: Bing、Google，and you can also use my own search1api service, it supports Google、Bing、Duckduckgo search

### Search1API
Search1API is a versatile search aggregation service that enables you to perform searches across Google, Bing, and DuckDuckGo, and also retrieve clear content from URLs.[this link]( https://docs.search2ai.online/introduction)

### Bing Search
To use the Bing Web Search API, please visit [this link](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api) to obtain your Bing subscription key.

### Google Search
You have three options for Google Search: you can use the [SearchApi Google Search API](https://www.searchapi.io/) from SearchApi, [Serper Google Search API](https://www.serper.dev) from Serper, or opt for the [Programmable Search Engine](https://developers.google.com/custom-search) provided by Google.


```shell
pip3 install -r requirements.txt
```
0. Set you LLM
```shell
export OPENAI_API_KEY=
OPENAI_BASE_URL=
LLM_MODEL=gpt-3.5-turbo-0125
RELATED_QUESTIONS=1
NODE_ENV=production
```

1. Set your key of search
```shell
export SEARCH1API_KEY=YOUR_SEARCH1API_KEY
```
2. Build web
```shell
cd web && npm install && npm run build
```
3. Run server
```shell
BACKEND=SEARCH1API python3 search4all.py
```

Others Search Service if you want

For Bing Search using Azure
```shell
export BING_SEARCH_V7_SUBSCRIPTION_KEY=YOUR_BING_SUBSCRIPTION_KEY
BACKEND=BING python3 search4all.py
```

For Google Search using SearchApi:
```shell
export SEARCHAPI_API_KEY=YOUR_SEARCHAPI_API_KEY
BACKEND=SEARCHAPI python search4all.py
```

For Google Search using Serper:
```shell
export SERPER_SEARCH_API_KEY=YOUR_SERPER_API_KEY
BACKEND=SERPER python search4all.py
```

For Google Search using Programmable Search Engine:
```shell
export GOOGLE_SEARCH_API_KEY=YOUR_GOOGLE_SEARCH_API_KEY
export GOOGLE_SEARCH_CX=YOUR_GOOGLE_SEARCH_ENGINE_ID
BACKEND=GOOGLE python search4all.py
```
