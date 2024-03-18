import {
  createClient,
  createMicrophoneAndCameraTracks,
  createScreenVideoTrack,
} from "agora-rtc-react";

import AgoraRTM from "agora-rtm-sdk";

const appId = "4b32ad36601e4ba7872ff946c2ebfb80";
const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const useScreenVideoTrack = createScreenVideoTrack();

export const rtmClient = AgoraRTM.createInstance(appId);
