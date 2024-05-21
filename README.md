# Deepgram Conversational AI Agent Demo using the llama3-70b-8192 API served by Groq

Hey there! We're pumped to introduce EmilyAI, a cutting-edge conversational AI agent that combines the best of Text-to-Speech and Speech-to-Text.

[![Discord](https://dcbadge.vercel.app/api/server/xWRaCDBtW4?style=flat)](https://discord.gg/xWRaCDBtW4)

We're going to walk you through building a conversational AI app that can chat with users in a super natural way. And the secret sauce? [Deepgram](https://deepgram.com/)'s natural language processing tech that makes it all possible.

Imagine having virtual assistants that can answer all your questions and control your smart devices, educational tutors that can tailor their teaching to your needs, healthcare bots that can provide expert advice, or even chatbots that can keep you company with conversation and games. This technology is going to make life so much simpler and more convenient.

## Reporting Issues

If you stumble upon any bugs or have ideas for new features, please head over to the issues section of this repository and let us know. But please, keep any security vulnerability reports private - we don't want to broadcast them to the world.

Oh, and before you submit anything, make sure to check out our [KNOWN ISSUES](./KNOWN_ISSUES.md) list to ensure it hasn't already been reported.

## Demo features

- Capture audio in real-time using [Deepgram's live speech-to-text streaming feature](https://developers.deepgram.com/docs/getting-started-with-live-streaming-audio).
- Experience natural language responses driven by Groq's llama3-70b-8192 API.
- Turn text into speech with [Deepgram's Aura Text to Speech feature](https://developers.deepgram.com/docs/text-to-speech).

## What is Deepgram?

[Deepgram](https://deepgram.com/) is a company that's making some serious waves in the world of speech recognition and language understanding. They're the ones providin' the tech that makes all this magic happen.

## Sign up for Deepgram

Ready to get started on this project? Get your API key from Deepgram - it's a breeze, I swear. [Sign up now](https://console.deepgram.com/signup?jump=keys) and let's get moving!

## Quickstart

Time to get this party started! Here's the lowdown on how to fire up this demo app.

### Clone the repository

First things first, head on over to GitHub and [clone this repository](https://github.com/BlueBirdBack/deepgram-convo-demo-groq).

```bash
git clone https://github.com/BlueBirdBack/deepgram-convo-demo-groq
```

### Install dependencies

Next up, install all the project dependencies.

```bash
npm install
```

### Edit the config file

Duplicate `sample.env.local` and save it as a new file called `.env.local`.

```bash
DEEPGRAM_STT_DOMAIN=https://api.deepgram.com
DEEPGRAM_API_KEY=YOUR-DG-API-KEY
GROQ_API_KEY=YOUR-GROQ-API-KEY
BASE_URL=https://api.groq.com/openai/v1
MODEL=llama3-70b-8192
```

1. For `DEEPGRAM_API_KEY`, just paste in the key you generated in the [Deepgram console](https://console.deepgram.com/).

2. `GROQ_API_KEY` should be a Groq API Key that can access the chat completions API. You can get one [here](https://console.groq.com/keys) for free.

### Run the application

Get the app up and running, and you can access it in your browser at http://localhost:3000.

```bash
npm run dev
```

## Getting Help

We love to hear from you so if you have questions, comments or find a bug in the project, let us know! You can either:

- [Open an issue in this repository](https://github.com/deepgram-devs/deepgram-aura-tts-demo/issues)
- [Join the Deepgram Github Discussions Community](https://github.com/orgs/deepgram/discussions)
- [Join the Deepgram Discord Community](https://discord.gg/xWRaCDBtW4)

## Author

[Deepgram](https://deepgram.com)

## License

This project is licensed under the MIT license. See the [LICENSE](./LICENSE) file for more info.
