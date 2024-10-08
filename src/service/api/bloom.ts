import { BloomAiFeedback } from "@/types/object";
import { apiClient } from "./client";

export interface BloomApi {
  get: () => Promise<BloomDetails>;
}

interface Emotions {
  husbandEmotions: string[];
  wifeEmotions: string[];
}

interface BloomDetails {
  feedback: BloomAiFeedback;
  emotions: Emotions;
}

const ENDPOINT = '/bloom/';

export const bloomApi: BloomApi = {
  get() {
    return apiClient.get(ENDPOINT);
  }
};
