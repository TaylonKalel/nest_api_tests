import { describe } from "node:test";
import { Tweet, TweetSchema } from "./tweet.entity";
import mongoose from 'mongoose';

describe('Tweet Tests', () => {
	describe('Local', ()=>{
		it('should create a tweet', () => {
			const tweet = new Tweet({
				content: 'Hello World',
				screen_name: 'Luiz Carlos'
			});
	
			expect(tweet.content).toBe('Hello World');
			expect(tweet.screen_name).toBe('Luiz Carlos');
		});
	})
	describe('Using MongoDB', () => {
		let conn: mongoose.Mongoose;
		beforeEach(async () => {
			conn = await mongoose.connect('mongodb://root:root@localhost:27017/tweets_test?authSource=admin');
		})
		afterEach(async ()=> {
			await conn.disconnect();
		})
		it('create a tweet document', async () => {
			const TweetModel = conn.model('Tweet', TweetSchema);
			const tweetModel = new TweetModel({
				content: 'Hello World',
				screen_name: 'Luiz Carlos'
			});
			await tweetModel.save();
			const tweetCreated = await TweetModel.findById(tweetModel._id);
			expect(tweetCreated.content).toBe('Hello World');
			expect(tweetCreated.screen_name).toBe('Luis Carlos');
			await conn.disconnect();
		});
	})


})