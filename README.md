# restfulBIRT-JQuery
BIRT iHub 3.1 REST JQuery Plugin

This is a JQuery plugin for the iHub 3.1 REST API.  In it's current state it has implemented all of the GET requests.  I will be continuing development on this to implement all calls.

# Example usage
```
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
```
