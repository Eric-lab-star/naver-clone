"use strict";

import { NextApiRequest, NextApiResponse } from "next";

import { google } from "googleapis";

// initialize the Youtube API library

export default async function runSample(
  req: NextApiRequest,
  response: NextApiResponse
) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GGAUTH_ID,
    process.env.GGAUTH_SECRET,
    "http://localhost:3000/"
  );
  const youtube = google.youtube("v3");
  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    // If you only need one scope you can pass it as a string
    scope: ["https://www.googleapis.com/auth/youtube"],
  });
  response.redirect(url);
}
