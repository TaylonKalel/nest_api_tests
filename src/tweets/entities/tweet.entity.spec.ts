import { Tweet, TweetSchema } from "./tweet.entity";
import mongoose from 'mongoose';

describe('Tweet Tests', () =>{
	it('should create a tweet', () =>{
		const tweet = new Tweet({
			content: 'Hello World',
			screen_name: 'Luiz Carlos'
		});

		expect(tweet.content).toBe('Hello World');
		expect(tweet.screen_name).toBe('Luiz Carlos');
	});
	it('create a tweet document', async () =>{
		const conn = await mongoose.connect('mongodb://root:root@db:27017/tweets_test');
		const TweetModel = conn.model('Tweet', TweetSchema);
		const tweetModel = new TweetModel({content: 'Hello World',
		screen_name: 'Luiz Carlos'});
		await tweetModel.save();
	});

})