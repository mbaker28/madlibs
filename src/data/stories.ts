import { StoryTemplate } from "../types";

export const stories: StoryTemplate[] = [
	{
		id: 1,
		title: 'A Day at the Park',
		template: 'Today, I saw a very {adjective} {noun} at the park. It {verb} {adverb}!',
		placeholders: ['adjective', 'noun', 'verb', 'adverb']
	}
]