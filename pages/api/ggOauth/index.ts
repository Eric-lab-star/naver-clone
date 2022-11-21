"use strict";

import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
export default async function runSample(
  req: NextApiRequest,
  response: NextApiResponse
) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GGAUTH_ID,
    process.env.GGAUTH_SECRET,
    "http://localhost:3000/api/ytScraper"
  );

  google.options({
    auth: oauth2Client,
  });
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/auth/youtube",
  });

  response.redirect(url);
}
