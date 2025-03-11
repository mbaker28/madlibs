import { StoryTemplate } from "../types";

export const stories: StoryTemplate[] = [
	{
		id: 1,
		title: 'Picnic Problems',
		template: `Today, I went to the picnic with {person's name}. We packed a {adjective} {food} and a big bottle of {liquid}.\n\nWhile we were eating, a {adjective} {animal} ran over and {verb, past tense} our {noun}!\n\nI yelled, "{exclaimation}!" but it was too late. We had to eat {adjective} {food, plural} instead.\n\nIt was a {adjective} day!`
	},
	{
		id: 2,
		title: 'Lost in the Park',
		template: `I was walking through the park when I saw a {adjective} {animal} sitting on a {noun}.\n\nSuddenly, it {verb, past tense} at me and ran toward the {adjective} {object}.\n\nI followed it and found a {adjective} {noun}!\n\nBest day ever? {yes/no}!`
	},
	{
		id: 3,
		title: 'The Playground Adventure',
		template: `I went to the playground and saw a {adjective} {noun} near the swings.\n\nI decided to {verb} on the {noun}, but it was too {adjective}!\n\nInstead, I played with a {adjective} {animal} that knew how to {verb}.\n\nWhat a {adjective} day!`
	}
]