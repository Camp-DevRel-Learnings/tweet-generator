"use server"

import { generateTweet, updateTweet } from "@/app/data-access/generate";
import { fetchTweet } from "@/app/data-access/x";
import { revalidatePath } from "next/cache";

export async function updateTweetAction(prevState: {userId: string}, formData: FormData) {
       const tweet = formData.get("name") as string;
       if (!tweet) {
           return {userId: prevState.userId, name: "", message: "error"};
       }
       const userId = prevState.userId as string;
       const data = await fetchTweet(tweet);
       const newTweet = await generateTweet(data);
       await updateTweet(newTweet);
       revalidatePath(`/`);
       return {userId, name: data, message: "success"}; 
}