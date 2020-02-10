import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoriesIds = async () => {
  const results = await axios.get(newStoriesUrl).then(({ data }) => data);
  return results;
};

export const getStory = async (StoryId) => {
  const results = await axios
    .get(`${storyUrl + StoryId}.json`)
    .then(({ data }) => data);
  return results;
};
