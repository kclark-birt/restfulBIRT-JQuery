// first we set up our constructor function
var RestfulBIRT = function(options){
  this.options = jQuery.extend({}, this.defaults, options);
}; RestfulBIRT.prototype = {
  // now we define the prototype for Disabler
  defaults: {
  	loginURL: '',
  	filesURL: '',
  	dataObjectsURL: '',
  	foldersURL: ''
  },

  OAuth: {
  },

  folders: {
  },

  folderItems: {
  },

  folderPrivileges: {
  },

  folderPermissions: {
  },

  visualis: {
  },

  jobs: {
  },

  files: {
  },

  filePrivileges: {
  },

  fileDownload: {
  },

  dataObjects: {
  },

  dataSet: {
  },

  users: {
  },

  uniqueUserGroups: {
  },

  userGroups: {
  },

  groupUsers: {
  },

  jobs: {
  },

  jobStatus: {
  },

  visualsBookmarks: {
  },

  visualsBookmark: {
  },

  visualsDatasets: {
  },

  visualsParameters: {
  },

  visualsParametersPicklist: {
  },

  visualsPDF: {
  },

  visualsXLSX: {
  },

  authorize: function(creds){
  		var tempOAuth;

  	if(creds != null) {
	   	$.ajax({
       		    type: 'POST',
       		    async: false,
    	        data: JSON.stringify(creds),
	            url: this.options.loginURL,
           		contentType: 'application/json; charset=utf-8',
       		    dataType: 'json',
	            success: function(data) {
	            		OAuth = {token: data.AuthId};
	            		console.log('Authentication complete');
	            		tempOAuth = OAuth;
            	},
	       	    error: function() {
       	    	        console.log('Error logging in!');
        	    }
	    });

	    this.OAuth = tempOAuth;
  	}else{
  		console.log('Error: You must supply a username and password');
  	}
  },

  getFolders: function(folderID) {
  	var tempFolders;
  	var tempURL;

  	if(folderID == null) {
  		tempURL = this.options.foldersURL;
  	}else{
  		tempURL = this.options.foldersURL + '/' + folderID;
  	}

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempFolders = data;
  			console.log('Done Getting files');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});
  	this.folders = tempFolders;
  	console.log(this.folders);
  },

  getFolderItems: function(folderID) {
  	var tempItems;
  	var tempURL = this.options.foldersURL + '/' + folderID + '/items';

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempItems = data;
  			console.log('Done Getting files');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});
  	this.folderItems = tempItems;
  	console.log(this.folderItems);
  },

  getFolderPrivileges: function(folderID) {
  	var tempPerms;
  	var tempURL = this.options.foldersURL + '/' + folderID + '/privileges';

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempPerms = data;
  			console.log('Done Getting files');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});
  	this.folderPrivileges = tempPerms;
  	console.log(this.folderPrivileges);
  },

  getFiles: function(fileID) {
  	var tempFiles;
  	var tempURL;

  	if(fileID == null) {
  		tempURL = this.options.filesURL;
  	}else{
  		tempURL = this.options.filesURL + '/' + fileID;
  	}

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: this.options.filesURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempFiles = data;
  			console.log('Done Getting files');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});
  	this.files = tempFiles;
  },

  getFilePrivileges: function(fileID) {
  	var tempFiles;
  	var tempURL;

	tempURL = this.options.filesURL + '/' + fileID + '/privileges';

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempFiles = data;
  			console.log('Done Getting files');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});
  	this.filePrivileges = tempFiles;
  },

  getFileDownload: function(fileID) {
  	var tempFiles;
  	var tempURL;

	tempURL = this.options.filesURL + '/' + fileID + '/download';

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		success: function(data) {
  			tempFiles = data;
  			console.log('Done Getting files');
  		},
  		error: function(data) {
  			console.log('error ' + data);
  		}
  	});
  	this.fileDownload = tempFiles;
  },

  getJobs: function() {
  	var tempJobs;

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: this.options.jobsURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempJobs = data;
  			console.log('Done Getting files');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});
  	this.jobs = tempJobs;
  },

  getJobStatus: function(jobID) {
  	var tempJobs;

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: this.options.jobsURL + '/' + jobID + '/status?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempJobs = data;
  			console.log('Done Getting files');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});
  	this.jobStatus = tempJobs;
  },

  getDataObject: function(dataobject) {
  	var tempDataSet;

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: this.options.dataObjectsURL + dataobject + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempDataSet = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.dataObjects = tempDataSet;
  },

  getDataSet: function(dataobject, dataset) {
  	var tempDataSet;

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: this.options.dataObjectsURL + '/' + dataobject + '/' + dataset + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempDataSet = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.dataset = tempDataSet;
  },

  getUsers: function(userID) {
  	var tempUsers;
  	var tempURL;

  	if(userID == null) {
  		tempURL = this.options.usersURL;
  	}else{
  		tempURL = this.options.usersURL + '/' + userID;
  	}

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempUsers = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.users = tempUsers;
  },

  getUniqueUserGroup: function(userID) {
  	var tempUsers;
  	var tempURL;

	tempURL = this.options.usersURL + '/' + userID + '/usergroups';

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempUsers = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.uniqueusergroups = tempUsers;
  },

  getUserGroups: function(groupID) {
  	var tempGroups;
  	var tempURL;

  	if(groupID == null) {
  		tempURL = this.options.userGroupURL;
  	}else{
  		tempURL = this.options.userGroupURL + '/' + groupID;
  	}

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempGroups = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.usergroups = tempGroups;
  },

  getGroupUsers: function(groupID) {
  	var tempGroups;
  	var tempURL;

	tempURL = this.options.userGroupURL + '/' + groupID + '/users';

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempGroups = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.groupusers = tempGroups;
  },

  getBookmarks: function(visualId) {
  	var tempBookmarks;
  	var tempURL;


	tempURL = this.options.visualsURL + '/' + visualId + '/bookmarks';

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempBookmarks = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.bookmarks = tempBookmarks;
  },

  getBookmark: function(visualId, bookmark) {
  	var tempBookmark;
  	var tempURL;


	tempURL = this.options.visualsURL + '/' + visualId + '/bookmarks/' + bookmarkName;

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempBookmark = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.bookmark = tempBookmark;
  },

  getVisualDataset: function(visualId) {
  	var tempDataset;
  	var tempURL;


	tempURL = this.options.visualsURL + '/' + visualId + '/datasets';

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempDataset = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.visualsDatasets = tempDataset;
  },

  getVisualParameters: function(visualId) {
  	var tempParameters;
  	var tempURL;


	tempURL = this.options.visualsURL + '/' + visualId + '/parameters';

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempParameters = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.visualsParameters = tempParameters;
  },

  getVisualParameterPicklist: function(visualId, parameterName) {
  	var tempParameters;
  	var tempURL;


	tempURL = this.options.visualsURL + '/' + visualId + '/parameters/picklist';

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token + '&paramName=' + parameterName,
  		contentType: 'application/json; charset=utf-8',
  		dataType: 'json',
  		success: function(data) {
  			tempParameters = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.visualsParameterPicklist = tempParameters;
  },

  getVisualPDF: function(visualId) {
  	var tempPDF;
  	var tempURL;


	tempURL = this.options.visualsURL + '/' + visualId + '/pdf';

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		success: function(data) {
  			tempPDF = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.visualsPDF = tempPDF;
  },

  getVisualXLSX: function(visualId) {
  	var tempXLSX;
  	var tempURL;


	tempURL = this.options.visualsURL + '/' + visualId + '/xlsx';

  	$.ajax({
  		type: 'GET',
  		async: false,
  		url: tempURL + '?authId=' + this.OAuth.token,
  		contentType: 'application/json; charset=utf-8',
  		success: function(data) {
  			tempXLSX = data;
  			console.log('Done getting data objects');
  		},
  		error: function() {
  			console.log('error');
  		}
  	});

  	this.visualsXLSX = tempXLSX;
  }

};