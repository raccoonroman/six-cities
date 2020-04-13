import { combineReducers } from 'redux';
import * as ActionTypes from '@/reducer/types';
import { DEFAULT_CITIES, ActionType, AuthorizationStatus } from '@/const';
import { getCitiesByOffers, updateOffers } from '@/utils';


const InitialState = {
  CITIES: {
    currentCity: DEFAULT_CITIES[0],
    cities: DEFAULT_CITIES,
  },
  AUTHORIZATION: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  },
  USER_DATA: {
    email: '',
  },
};

const offers = (state = [], action: ActionTypes.offersAction) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS: {
      return action.payload;
    }
    case ActionType.UPDATE_OFFER: {
      const newOffer = action.payload;
      const updatedOffers = updateOffers(state, newOffer);
      return updatedOffers;
    }
    default: {
      return state;
    }
  }
};

const cities = (state = InitialState.CITIES, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS: {
      const allCities = getCitiesByOffers(action.payload);
      return {
        currentCity: allCities[0],
        cities: allCities,
      };
    }
    case ActionType.SET_CITY: {
      return { ...state, currentCity: action.payload };
    }
    default: {
      return state;
    }
  }
};

const authorization = (state = InitialState.AUTHORIZATION, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION: {
      return { ...state, authorizationStatus: action.payload };
    }
    default: {
      return state;
    }
  }
};

const userData = (state = InitialState.USER_DATA, action: ActionTypes.userDataAction) => {
  switch (action.type) {
    case ActionType.SET_EMAIL: {
      return { ...state, email: action.payload };
    }
    default: {
      return state;
    }
  }
};

const commentsByOffer = (state = [], action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const nearbyOffers = (state = [], action) => {
  switch (action.type) {
    case ActionType.LOAD_NEARBY_OFFERS: {
      return action.payload;
    }
    case ActionType.UPDATE_OFFER: {
      const newOffer = action.payload;
      const updatedOffers = updateOffers(state, newOffer);
      return updatedOffers;
    }
    default: {
      return state;
    }
  }
};


export {
  offers,
  cities,
  authorization,
  userData,
  commentsByOffer,
  nearbyOffers,
};

export default combineReducers({
  offers,
  cities,
  authorization,
  userData,
  commentsByOffer,
  nearbyOffers,
});