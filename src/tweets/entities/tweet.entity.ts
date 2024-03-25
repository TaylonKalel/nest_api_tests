export type TweetProps = {
	content: string;
	screen_name: string;
}

export class Tweet {
	content: string;
	screen_name: string;

	constructor(props: TweetProps) {		
		Object.assign(this, props)
	}
}
