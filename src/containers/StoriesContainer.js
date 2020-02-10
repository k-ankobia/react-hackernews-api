
import React, { useEffect, useState } from 'react';
import { getStoriesIds, getStory } from '../services/hackerNewsApi';

export const StoriesContainer = () => {
  const [storyIds, setStroyId] = useState([]);
  useEffect(() => {
    getStoriesIds().then((apiData) => setStroyId(apiData));
  }, []);
  return (
    <p>{JSON.stringify(storyIds)}</p>
  );
};
