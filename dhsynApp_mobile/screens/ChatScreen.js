import React from 'react';
import { Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import emojiUtils from 'emoji-utils';

import SlackMessage from '../components/SlackMessage';

export default class ChatScreen extends React.Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 8,
          text:
              'Có ai thừa bột giặt không? Cho em xin một chút 😄',
          createdAt: new Date(),
          user: {
            _id: 8,
            name: 'Minh Thư',
            avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
          },
        },
        {
          _id: 9,
          text:
              'Phòng chị thừa nhiều lắm, lên 301 ',
          createdAt: new Date(),
          user: {
            _id: 9,
            name: 'Annie Annie',
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
          },
        },
        {
          _id: 1,
          text: 'Hello, can someone speak English? I need help 😣',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Brad Gibson',
            avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
          },
        },
        {
          _id: 2,
          text: `Yes, we can!!! 👋👋
Do you need any help?`,
          createdAt: new Date(),
          user: {
            _id: 3,
            name: 'Long Do',
            avatar: 'https://randomuser.me/api/portraits/men/26.jpg',
          },
        },
        {
          _id: 4,
          text:
            'I think I have a symptom of Corona virus, how can I check it? 🤧🤧',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Brad Gibson',
            avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
          },
        },
        {
          _id: 5,
          text:
            'Go Home -> Symptom Checker. You can test and get the result',
          createdAt: new Date(),
          user: {
            _id: 6,
            name: 'Long Do',
            avatar: 'https://randomuser.me/api/portraits/men/26.jpg',
          },
        },
        {
          _id: 6,
          text: 'That is so amazing! I am healthy !',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Brad Gibson',
            avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
          },
        },


      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  renderMessage(props) {
    const {
      currentMessage: { text: currText },
    } = props;

    let messageTextStyle;

    // Make "pure emoji" messages much bigger than plain text.
    if (currText && emojiUtils.isPureEmojiString(currText)) {
      messageTextStyle = {
        fontSize: 28,
        // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
        lineHeight: Platform.OS === 'android' ? 34 : 30,
      };
    }

    return <SlackMessage {...props} messageTextStyle={messageTextStyle} />;
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages.reverse()}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
        renderMessage={this.renderMessage}
      />
    );
  }
}
