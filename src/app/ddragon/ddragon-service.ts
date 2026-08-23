import { Injectable } from '@angular/core';

const VERSION = '16.16.1';
const LOCALE = 'en_US';
const BASE = 'https://ddragon.leagueoflegends.com';

interface ImageTypeConfig {
  path: (id: string) => string;
  extension?: string;
}

const IMAGE_CONFIG = {
  championSquare: {
    path: (championId: string) => `${BASE}/cdn/${VERSION}/img/champion/${championId}`,
    extension: 'png',
  },
  championFull: {
    path: (championId: string) => `champion/${championId}/splash`,
    extension: 'png',
  },
  profileIcon: {
    path: (profileId: string) => `${BASE}/cdn/${VERSION}/img/profileicon/${profileId}`,
    extension: 'png',
  },
} as const satisfies Record<string, ImageTypeConfig>;

interface JsonTypeConfig {
  path: string | ((id: string) => string);
}

const JSON_CONFIG: Record<string, JsonTypeConfig> = {
  champion: {
    path: (championId: string) =>
      `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/${LOCALE}/champion/${championId}.json`,
  },
};

type ImageType = keyof typeof IMAGE_CONFIG;
type JsonType = keyof typeof JSON_CONFIG;

@Injectable({
  providedIn: 'root',
})
export class DdragonService {
  public getImageUrl(type: ImageType, id: string): string {
    const { path, extension = 'png' } = IMAGE_CONFIG[type];
    return `${path(id)}.${extension}`;
  }

  public getJson(type: JsonType, id: string): Object {
    const { path } = JSON_CONFIG[type];
    return `${BASE}/${typeof path === 'string' ? path : path(id)}`;
  }
}
