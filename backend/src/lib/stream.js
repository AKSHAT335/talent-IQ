import {StreamChat} from 'stream-chat';
import {StreamClient} from '@stream-io/node-sdk';
import {ENV} from './env.js';

const apiKey=ENV.STREAM_API_KEY
const apiSecret=ENV.STREAM_API_SECRET

if(!apiKey || !apiSecret) {
    console.log("Stream API key or secret is missing. ");
}

export const streamClient=new StreamClient(apiKey, apiSecret); // this is for activity feed feature
export const chatClient = StreamChat.getInstance(apiKey, apiSecret); // this is for chat feature


export const upsertStreamUser = async (userData) => {
    try {
        await chatClient.upsertUser(userData);
        console.log(`Stream user ${userData.id} upserted successfully.`);
    } catch (error) {
        console.error("Error upserting Stream user:", error);
    }
}

export const delteStreamUser = async (userId) => {
    try {
        await chatClient.deleteUser(userId)
        console.log(`Stream user ${userId} deleted successfully.`)
    } catch (error) {
        console.error("Error deleting Stream user:", error);
    } 
}