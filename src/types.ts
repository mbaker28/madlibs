export type RootStackParamList = {
	Home: undefined;
	Input: { storyId: number };
	Story: { storyId: number, words: WordInput[] };
	StorySelection: undefined;
};

export type WordInput = {
	type: string;
	text: string;
};

export type StoryTemplate = {
	id: number;
	title: string;
	template: string;
};