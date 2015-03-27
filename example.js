var urls = {
	loginURL: 'http://krisbox.demoimage.com:5000/ihub/v1/login',
	filesURL: 'http://krisbox.demoimage.com:5000/ihub/v1/files',
	dataObjectsURL: 'http://krisbox.demoimage.com:5000/ihub/v1/dataobject',
	foldersURL: 'http://krisbox.demoimage.com:5000/ihub/v1/folders',
	jobsURL: 'http://krisbox.demoimage.com:5000/ihub/v1/jobs',
	usersURL: 'http://krisbox.demoimage.com:5000/ihub/v1/users',
	userGroupURL: 'http://krisbox.demoimage.com:5000/ihub/v1/usergroups',
	visualsURL: 'http://krisbox.demoimage.com:5000/ihub/v1/visuals'
}

var creds = {
	username: 'Administrator',
	password: ''
}

var birt = new RestfulBIRT(urls);
	birt.authorize(creds);
	birt.getFolderPrivileges(800000000000);
	console.log(birt.folderPrivileges);