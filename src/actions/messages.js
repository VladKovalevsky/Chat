import {
  ADD_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE
} from './types';

export const addMessage = message => ({
  type: ADD_MESSAGE,
  message
});

export const editMessage = (message, messageId) => ({
  type: EDIT_MESSAGE,
  payload: {
    message,
    messageId
  }
})

export const deleteMessage = (messageId, user) => ({
  type: DELETE_MESSAGE,
  payload: {
    messageId,
    user
  }
})
