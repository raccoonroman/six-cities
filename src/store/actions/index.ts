import ActionType from '@/store/actions/types';
import { OfferRaw, CommentRaw } from '@/api/types';


export const setCity = (cityName: string) => ({
  type: ActionType.SET_CITY,
  payload: cityName,
});

export const requireAuthorization = (status: string) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadComments = (comments: CommentRaw[]) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export const loadNearbyOffers = (nearbyOffers: OfferRaw[]) => ({
  type: ActionType.LOAD_NEARBY_OFFERS,
  payload: nearbyOffers,
});

export const updateOffer = (newOffer: OfferRaw) => ({
  type: ActionType.UPDATE_OFFER,
  payload: newOffer,
});
