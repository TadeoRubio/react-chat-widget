import React, { Component } from 'react';

import { Widget, addResponseMessage, setQuickButtons, toggleMsgLoader, addLinkSnippet, getFirstOrDefaultChat, deleteMessages, dropMessages } from '../index';
import { addUserMessage } from '..';

export default class App extends Component {
  
  chat2: string = "second"

  componentDidMount() {
    console.log("My FirstOrDefault Chat:", getFirstOrDefaultChat() );
    addResponseMessage('Welcome to this awesome chat!',this.chat2);
    addLinkSnippet({ link: 'https://google.com', title: 'Google' },this.chat2);
    addResponseMessage('![](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)',this.chat2);
    addResponseMessage('![vertical](https://d2sofvawe08yqg.cloudfront.net/reintroducing-react/hero2x?1556470143)',this.chat2);

    addResponseMessage('Welcome to this super chat!');
    addLinkSnippet({ link: 'https://mail.google.com', title: 'Mail Google' });
    addResponseMessage('![](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)');
    addResponseMessage('![vertical](https://d2sofvawe08yqg.cloudfront.net/reintroducing-react/hero2x?1556470143)');
  }

  handleNewUserMessage = (newMessage: any, chat:string) => {
    toggleMsgLoader(chat);
    setTimeout(() => {
      toggleMsgLoader(chat);
      if (newMessage === 'fruits') {
        setQuickButtons([ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' } ],chat);
      } else {
        addResponseMessage(newMessage,chat);
      }
    }, 2000);
  }

  handleQuickButtonClicked = (e: any, chat:string) => {
    addResponseMessage('Selected ' + e,chat);
    setQuickButtons([],chat);
  }

  handleSubmit = (msgText: string, chat:string) => {
    if(msgText.length < 80) {
      addUserMessage("Uh oh, please write a bit more.",chat);
      return false;
    }
    return true;
  }

  btnTestClicked = (sender: any) => {
    deleteMessages(1);
    //dropMessages();
  }


  render() {
    return (
      <div>
        <button id="btnTest" style={{position: 'absolute', right: 40, bottom: 150}} onClick={this.btnTestClicked}>test</button>
        <Widget
          title="Hey Default Chat!"
          subtitle="Asistente virtual"
          senderPlaceHolder="Escribe aquí ..."
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          imagePreview
          handleSubmit={this.handleSubmit}
        />
        
        <Widget
          title="Here a Second Chat!!"
          subtitle="Asistente virtual"
          senderPlaceHolder="Escribe aquí ..."
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          imagePreview
          handleSubmit={this.handleSubmit}
          name={this.chat2}
        />
        
      </div>
    );
  }
}
