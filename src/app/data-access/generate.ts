import axios from 'axios';

const apiKey = process.env.GOOGLE_API_KEY; // Replace with your actual API key
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

function constructTweet(text: string) {
  return {
    contents: [
      {
        parts: [
          {
            text: `Generate a tweet regarding ${text}`,
          },
        ],
      },
    ],
  };
}

function parseTweet(tweet: any) {
  return tweet.candidates[0].content.parts[0].text;
}

export async function generateTweet(topic: string) {
  const requestBody = constructTweet(topic);
  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = response;
    return parseTweet(data);
  } catch (error) {
    console.error('Error:', error);
    return "";
  }
}
declare const global: {
    tweet: string;
};

global.tweet = `DApps are struggling to grow sustainably due to a lack of user data. 😥 Airdrops and points programs are band-aids, attracting users for the wrong reasons and creating low-impact communities. 📉 Camp is changing the game with the world's first identity layer, bringing Web2 social data onchain! ⚡️ Users own & monetize their data, and dApps can build engaging experiences that truly resonate. 🚀 #Web3 #DataPrivacy #IdentityLayer`;

export async function getTweet() {
    return global['tweet'];
}

export async function updateTweet(tweet: string) {
    (global.tweet as String) = tweet;
}
