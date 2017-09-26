const childWindowContent = {
	leaveGroup: {
		headline: 'Grouped Window',
		description: [
			'This window has been grouped with its parent window. As you move it around the',
			'screen it will move the other grouped windows with it. Click the button below to',
			'remove it from the group.'
		].join(' ')
	},
	sharedMemory: {
		headline: 'Send Data Back to Parent',
		description: [
			'In the snippet below, we directly access the DOM of the child\'s parent and send a',
			'randomly calculated number back to it. This communication is possible in either direction',
			'and makes things like breaking out small pieces of a UI quick and easy.'
		].join(' ')
	}
}

export default childWindowContent;