import { createClient } from "agora-rtm-react";

// const appId = "9018a94d10f34248aa03f0d14a011fb9";
const appId = "4b32ad36601e4ba7872ff946c2ebfb80";
const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useRTMClient = createClient(appId);
