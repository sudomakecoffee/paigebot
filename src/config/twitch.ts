if (!process.env.TWITCH_CLIENT_ID) {
  throw "Missing Twitch client ID";
}

if (!process.env.TWITCH_CLIENT_SECRET) {
  throw "Missing Twitch client secret";
}

if (!process.env.TWITCH_CHANNEL) {
  throw "Missing Twitch channel name";
}

if (!process.env.TWITCH_USER_REDIRECT) {
  throw "Missing Twitch user redirect";
}

if (!process.env.TWITCH_BOT_REDIRECT) {
  throw "Missing Twitch bot redirect";
}

export interface TwitchBotConfig {
  channel: string;
  clientId: string;
  clientSecret: string;
  redirectUri: {
    user: string;
    bot: string;
  };
  eventSubSecret: string;
  scopes: string[];
  botScopes: string[];
}

export const twitchConfig: TwitchBotConfig = {
  channel: process.env.TWITCH_CHANNEL,
  clientId: process.env.TWITCH_CLIENT_ID,
  clientSecret: process.env.TWITCH_CLIENT_SECRET,
  redirectUri: {
    user: process.env.TWITCH_USER_REDIRECT,
    bot: process.env.TWITCH_BOT_REDIRECT,
  },
  eventSubSecret: process.env.TWITCH_EVENTSUB_SECRET || "",
  scopes: [
    "bits:read",
    "channel:read:hype_train",
    "channel:read:redemptions",
    "channel:read:subscriptions",
    "chat:read",
    "user:read:broadcast",
    "channel_subscriptions",
    "user_read",
    "user_blocks_read",
  ],
  botScopes: ["chat:read", "whispers:read"],
};
