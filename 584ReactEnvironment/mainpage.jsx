var RegisterComponent;
var LoginComponent;
var ChatComponent;
var MainComponent;
var TextInput;
var Button;

Button = React.createClass({
    getDefaultProps: function () {
        return {
            color: "#2FB1DF",
            textColor: 'white',
            hasShadow: true,
            onClick: () => {}
        };
    },
    render: function () {
        var className;
        var style;

        className = ("material-button " + (this.props.className || "")).trim();
        style = Object.keys(this.props.style || {}).reduce((newStyle, name) => {newStyle[name] = this.props.style[name]; return newStyle;}, {});
        style.backgroundColor = this.props.color;
        style.color = this.props.textColor;
        style.WebkitBoxShadow = this.props.hasShadow === true ? "0px 1px 3px rgba(0, 0, 0, 0.35)" : null;

        return <div className={className} style={style} onClick={this.props.onClick}><div className="material-button-overlay" />{this.props.text}</div>;
    }
});

TextInput = React.createClass({
	getDefaultProps: function () {
		return {
			label: null,
			onChange: () => {},
			defaultValue: ""
		};
	},
	update: function (evt) {
		var {value} = evt.target;
		this.props.onChange(value);
	},
	focus: function () {
		ReactDOM.findDOMNode(this).focus;
	},
	render: function () {
		var label = null;

		if (this.props.label !== null) {
			label = <div>{this.props.label}</div>;
		}

		return (
			<div onClick={this.focus} className="material-input">
				{label}
				<input type="text" placeholder={this.props.placeholder} className="material-input-elem" value={this.props.value} onChange={this.update} />
			</div>
		);
	}
});

RegisterComponent = React.createClass({
	getInitialState: function () {
		'use strict';
		return (
			{
				usernameText: '',
				passwordText: ''
			}
		);
	},
	usernameChange: function (evt) {
		'use strict';

		var username;

		this.setState({usernameText: evt});

		username = this.state.usernameText;

	},
	passwordChange: function (evt) {
		'use strict';

		var password;

		this.setState({passwordText: evt});

		password = this.state.passwordText;

	},
	registerNow: function () {
		'use strict';

		this.props.onNext(ChatComponent)
	},
	render: function () {
		'use strict';
		return (
			<div className="RegisterBox">
				<h3>{"Please Register!"}</h3>
        		<TextInput placeholder="Username" label="Username" onChange={this.usernameChange} value={this.state.usernameText}/>
        		<TextInput placeholder="Password" label="Password" onChange={this.passwordChange} value={this.state.passwordText}/>
        		<Button className="RegisterButton" onClick={this.registerNow} text='Register' />
      		</div>
		);
	}
});

LoginComponent = React.createClass({
	getInitialState: function () {
		'use strict';
		return (
			{
				usernameText: '',
				passwordText: ''
			}
		);
	},
	usernameChange: function (evt) {
		'use strict';

		var username;

		this.setState({usernameText: evt});

		username = this.state.usernameText;

	},
	passwordChange: function (evt) {
		'use strict';

		var password;

		this.setState({passwordText: evt});

		password = this.state.passwordText;

	},
	loginNow: function () {
		'use strict';

		this.props.onNext(ChatComponent)
	},
	render: function () {
		'use strict';
		return (
			<div className="LoginBox">
				<h3>{"Login Time!"}</h3>
        		<TextInput placeholder="Username" label="Username" onChange={this.usernameChange} value={this.state.usernameText}/>
        		<TextInput placeholder="Password" label="Password" onChange={this.passwordChange} value={this.state.passwordText}/>
        		<Button className="LoginButton" onClick={this.loginNow} text='Register' />
      		</div>
		);
	}
});

MessageComponent = React.createClass({
	getInitialState: function () {
		'use strict';

		return {};
	},
	render: function () {
		'use strict';

		return (
			<div className="MessageComponent">
				<img src={this.props.userAvatar} />
				<div className="usernameLabel">
					{this.props.username}
				</div>
				<div className="aMessage">
					{this.props.message}
				</div>
			</div>
		);
	}
});

ChatComponent = React.createClass({
	getInitialState: function () {
		'use strict';
		return (
			{
				previousMessages: [
					{
						text: "Hi",
						aviURL: "th.jpg",
						username: "Pete"
					},
					{
						text: "Hello?",
						aviURL: "th.jpg",
						username: "Pete"
					}
				],
				messageText: ''
			}
		);
	},
	messageChange: function (evt) {
		'use strict';

		this.setState({messageText: evt});
	},
	sendMessage: function () {
		'use strict';

	},
	render: function () {
		'use strict';

		var chatscreen;

		if (this.state.previousMessages === [] || this.state.previousMessages === null) {
			var divR = () => {return(<div></div>);};
			chatscreen = divR();
		}
		else {
			chatscreen = this.state.previousMessages.map((messages, index) => {
				return (<MessageComponent userAvatar={messages.aviURL} username={messages.username} message={messages.text} />);
			});
		}

		return (
			<div className="MailBox">
				<div className="messagesBox">
					{chatscreen}
				</div>
				<div className="typingBox">
					<TextInput placeholder="Type Here" onChange={this.messageChange} value={this.state.messageText}/>
					<Button className="SendButton" onClick={this.sendMessage} text='Send' />
				</div>
      		</div>
		);
	}
});

MenuComponent = React.createClass({
	getInitialState: function () {
		'use strict';

		return ({});
	},
	render: function () {
		'use strict';

		return (
			<div className="menuStyle">
				<Button className="RegisterTab" onClick={this.props.registerFunction} text='Register Tab' />
				<Button className="LoginTab" onClick={this.props.loginFunction} text='Login Tab' />
			</div>
		);
	}
});

MainComponent = React.createClass({
	getInitialState: function () {
		'use strict';
		return (
		{
			username: '',
			password: '',
			workspaceView: RegisterComponent
		});
	},
	switchWorkSpace: function (value) {
		'use strict';

		this.setState({
				workspaceView: value
			});
	},
	render: function () {
		'use strict';

		var WorkspaceView;
		WorkspaceView = this.state.workspaceView;
		return (
			<div>
				<div className="tabs">
					<Button className="MenuTab" onClick={()=>{}} text='Menu' />
					<MenuComponent registerFunction={this.switchWorkSpace.bind(this, RegisterComponent)} loginFunction={this.switchWorkSpace.bind(this, LoginComponent)} text="Menu" />
				</div>
				<div className="PageMount">
	        		<WorkspaceView onNext={this.switchWorkSpace} />
	      		</div>
      		</div>
		);
	}
});

ReactDOM.render(
  <MainComponent/>,
  document.getElementById('AppContainer')
);