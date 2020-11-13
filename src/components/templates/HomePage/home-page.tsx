import Link from 'next/link';
import Head from 'next/head';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { NextSeo } from 'next-seo';

import {
  PageMain,
  StartDemoLink,
  BlockSpan,
  BlockSpanVariable,
  StartJokeButton,
  JokeP,
  OrP,
} from './home-page.styled';

const jokes = [
  {
    joke: 'What’s the cheapest part of any house?',
    punchLine: "The roof, it's always on the house.",
  },
  {
    joke: 'How does a penguin build a house?',
    punchLine: 'Igloos it together!',
  },
  {
    joke: 'Why did a dog get hired to build my house?',
    punchLine: 'Because he is an excellent roofer!',
  },
  {
    joke: 'Whats going to be the scariest haunted house this year?',
    punchLine: 'The one where they don’t wear masks...',
  },
  {
    joke: 'Some thieves stole all the tiles on top of my house...',
    punchLine: 'Roofless!',
  },
];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
export const HomePage = (): ReactElement => {
  const [tellAJoke, setTellAJoke] = useState<boolean>(false);
  const [tellingAJoke, setTellingAJoke] = useState<boolean>(false);
  const [showPunchline, setShowPunchline] = useState<boolean>(false);
  const jokeIndex = useRef(getRandomInt(jokes.length - 1));

  const chosenJoke = jokes[jokeIndex.current];

  useEffect(() => {
    if (tellAJoke) {
      setTellingAJoke(true);
      setTimeout(() => {
        setShowPunchline(true);
        setTellingAJoke(false);
      }, 2000);
    }
  }, [tellAJoke, setShowPunchline]);
  return (
    <PageMain>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo title="PB Hack" description="Site description" />
      <h1>
        <BlockSpan>I can&apos;t believe it&apos;s not native</BlockSpan>
        <BlockSpanVariable> PWA Demo</BlockSpanVariable>
      </h1>

      <Link href="/properties">
        <StartDemoLink
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <span role="img" aria-label="rocket">
            {'🚀 '}
          </span>
          Start the Demo
          <span role="img" aria-label="rocket">
            {' '}
            🚀
          </span>
        </StartDemoLink>
      </Link>
      <OrP>OR</OrP>
      <StartJokeButton
        hidden={tellAJoke}
        type="button"
        onClick={() => {
          setTellAJoke(true);
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <span role="img" aria-label="laughing tears emoji">
          {'😂 '}
        </span>
        Tell me a Joke
        <span role="img" aria-label="laughing tears emoji">
          {' 😂'}
        </span>
      </StartJokeButton>
      <JokeP hidden={!tellAJoke}>{chosenJoke.joke}</JokeP>
      <JokeP hidden={!tellingAJoke}>
        <span role="img" aria-label="drum emoji">
          🥁
        </span>
      </JokeP>
      <JokeP hidden={!showPunchline}>
        <span role="img" aria-label="laughing tears emoji">
          {'😂 '}
        </span>
        {chosenJoke.punchLine}
        <span role="img" aria-label="laughing tears emoji">
          {' 😂'}
        </span>
      </JokeP>
      <StartJokeButton
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        hidden={!showPunchline}
        type="button"
        onClick={() => {
          setTellAJoke(false);
          setTellingAJoke(false);
          setShowPunchline(false);
          jokeIndex.current = getRandomInt(jokes.length - 1);
        }}
      >
        <span role="img" aria-label="stars in eyes emoji">
          {'🤩 '}
        </span>
        Another Joke!
        <span role="img" aria-label="stars in eyes emoji">
          {' 🤩'}
        </span>
      </StartJokeButton>
    </PageMain>
  );
};
