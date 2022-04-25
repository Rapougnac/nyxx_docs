import * as React from 'react';
import useInterval from '../../hooks/useInterval';
import {
  DiscordMessage,
  DiscordMessages,
  DiscordOptionsContext,
  DiscordInteraction,
  DiscordMarkdown,
} from '@discord-message-components/react';
import '@discord-message-components/react/styles';
import options from './options';

interface PingCommandProps {
  lightTheme?: boolean;
  prefix?: string;
}

interface PingCommandRepliedProps extends PingCommandProps {
  ping?: boolean;
}

interface PingCommandSlashProps extends Omit<PingCommandProps, 'prefix'> {
  commandContent?: string;
  content?: string;
  ephemeral?: boolean;
}

export default function ({ lightTheme, prefix = '!' }: PingCommandProps) {
  React.useEffect(() => {
    lightTheme ??= localStorage.getItem('theme') === 'light';
  });
  const [light, setLight] = React.useState(lightTheme);
  useInterval(() => {
    setLight(localStorage.getItem('theme') === 'light');
  });
  return (
    <DiscordOptionsContext.Provider value={options}>
      <DiscordMessages lightTheme={light}>
        <DiscordMessage profile="l7ssha">{prefix}ping</DiscordMessage>
        <DiscordMessage profile="mycoolbot">Pong!</DiscordMessage>
      </DiscordMessages>
    </DiscordOptionsContext.Provider>
  );
}

export function PingCommandReplied({
  ping,
  prefix = '!',
  lightTheme,
}: PingCommandRepliedProps) {
  React.useEffect(() => {
    lightTheme ??= localStorage.getItem('theme') === 'light';
  });
  const [light, setLight] = React.useState(lightTheme);
  useInterval(() => {
    setLight(localStorage.getItem('theme') === 'light');
  });
  return (
    <DiscordOptionsContext.Provider value={options}>
      <DiscordMessages lightTheme={light}>
        <DiscordMessage profile="l7ssha">{prefix}ping</DiscordMessage>
        <DiscordMessage profile="mycoolbot">
          <div slot="interactions">
            <DiscordInteraction profile="l7ssha" highlight={!!ping}>
              {prefix}ping
            </DiscordInteraction>
          </div>
          <DiscordMarkdown highlight={!!ping}>Pong!</DiscordMarkdown>
        </DiscordMessage>
      </DiscordMessages>
    </DiscordOptionsContext.Provider>
  );
}

export function PingCommandSlash({
  commandContent,
  content,
  lightTheme,
  ephemeral,
}: PingCommandSlashProps) {
  React.useEffect(() => {
    lightTheme ??= localStorage.getItem('theme') === 'light';
  });
  const [light, setLight] = React.useState(lightTheme);
  useInterval(() => {
    setLight(localStorage.getItem('theme') === 'light');
  });
  return (
    <DiscordOptionsContext.Provider value={options}>
      <DiscordMessages lightTheme={light}>
        <DiscordMessage profile="mycoolbot">
          <DiscordInteraction
            slot="interactions"
            ephemeral={!!ephemeral}
            command
            profile="l7ssha"
          >
            {commandContent}
          </DiscordInteraction>
          <DiscordMarkdown>{content}</DiscordMarkdown>
        </DiscordMessage>
      </DiscordMessages>
    </DiscordOptionsContext.Provider>
  );
}
