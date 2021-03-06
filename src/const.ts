export const DEFAULT_CITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export enum SortType {
  POPULAR = 'Popular',
  PRICE_LOW_TO_HIGH = 'Price: low to high',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  TOP_RATED_FIRST = 'Top rated first',
}

export enum CardType {
  CITY = 'city',
  NEAR = 'near',
  FAVORITE = 'favorite',
}

export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
}

export enum AppRoute {
  ROOT = '/',
  LOGIN = '/login',
  FAVORITES = '/favorites',
  OFFER = '/offer',
}

export enum MapType {
  HOVERED_ACTIVE_OFFER = 'HOVERED_ACTIVE_OFFER',
  STATIC_ACTIVE_OFFER = 'STATIC_ACTIVE_OFFER',
}
