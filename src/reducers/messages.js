import { ADD_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from '../actions/types';

function messagesReducer(messages = [], action = {}) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...messages, action.message];
    case EDIT_MESSAGE:
      if (!action.payload.message) {
        return messages.removeIn([
          action.payload.messageId
        ]);
      } else {
        return messages.setIn([action.payload.messageId], {
          number: action.payload.messageId,
          text: action.payload.message,
          is_user_msg: true
        });
      }
    case DELETE_MESSAGE:
      return messages.removeIn([action.payload.user, action.payload.messageId]);
    default:
      return messages;
  }
}

export default messagesReducer;
