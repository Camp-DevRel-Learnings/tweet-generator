import axios from 'axios';

const apiUrl = 'https://wv2h4to5qa.execute-api.us-east-2.amazonaws.com/dev/twitter/getTweetById';
const apiKey = process.env.CAMP_API_KEY;

export async function fetchTweet(tweetUrl: string) {
    const tweetId = extractTweetId(tweetUrl);
    try {
        const response = await axios.get(`${apiUrl}?tweetId=${tweetId}`, {
            headers: {
                'x-api-key': apiKey
            }
        });

        const data = response.data;
        return data.data.tweetData?.tweetText;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error with axios request:', error.message);
            if (error.response) {
                console.error('Server responded with:', error.response.data, error.response.status);
            }
        } else {
            console.error('Unexpected error:', error);
        }
        return ""
    }
}

export function extractTweetId(tweetUrl: string) {
    const tweetId = tweetUrl.split('/').pop();
    return tweetId;
}


