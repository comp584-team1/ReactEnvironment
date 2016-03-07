var RegisterComponent;
var LoginComponent;
var MailComponent;
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

		this.props.onNext(MailComponent)
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

		this.props.onNext(MailComponent)
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

MailComponent = React.createClass({
	getInitialState: function () {
		'use strict';
		return (
			{
				addressText: '',
				messageText: ''
			}
		);
	},
	addressChange: function (evt) {
		'use strict';

		var username;

		this.setState({usernameText: evt});

		username = this.state.usernameText;

	},
	messageChange: function (evt) {
		'use strict';

		var password;

		this.setState({passwordText: evt});

		password = this.state.passwordText;

	},
	sendMail: function () {
		'use strict';

	},
	render: function () {
		'use strict';
		return (
			<div className="MailBox">
				<h3>{"Send Mail!"}</h3>
        		<TextInput placeholder="example@placholder.com" label="Email To:" onChange={this.addressChange} value={this.state.addressText}/>
        		<TextInput placeholder="Message Goes Here" label="Message" onChange={this.messageChange} value={this.state.messageText}/>
        		<Button className="SendButton" onClick={this.sendMail} text='Send' />
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
					<Button className="RegisterTab" onClick={this.switchWorkSpace.bind(this, RegisterComponent)} text='Register Tab' />
					<Button className="LoginTab" onClick={this.switchWorkSpace.bind(this, LoginComponent)} text='Login Tab' />
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