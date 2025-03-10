export type RootStackParamList = {
	Home: undefined;
	Input: { storyId: number };
	Story: { storyId: number, words: WordInput[] };
	StorySelection: undefined;
};

export type WordInput = {
	type: WordType;
	text: string;
};

export type WordType = 'noun' | 'verb' | 'adjective' | 'adverb';

export type StoryTemplate = {
	id: number;
	title: string;
	template: string;
	placeholders: WordType[]
};