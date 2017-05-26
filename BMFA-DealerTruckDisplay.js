var truckTypeImageUrl = {
	'All' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Wht1&oid=00Do0000000JLLE&lastMod=1495568542000',
	'Rescue Pumpers and Engines' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtz&oid=00Do0000000JLLE&lastMod=1495568876000',
	'Used Rescue Trucks and Squads' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuY&oid=00Do0000000JLLE&lastMod=1495568998000',
	'Used Aerials, Ladder Trucks and Quints' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whu9&oid=00Do0000000JLLE&lastMod=1495568916000',
	'Used Tankers and Tenders' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whud&oid=00Do0000000JLLE&lastMod=1495569016000',
	'Ambulances and Transport Units' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhtL&oid=00Do0000000JLLE&lastMod=1495568688000',
	'Used Brush Trucks, Quick Attacks & Minis' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuO&oid=00Do0000000JLLE&lastMod=1495568956000',
	'Used ARFF and Airport Crash Trucks' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuE&oid=00Do0000000JLLE&lastMod=1495568936000',
	'Towers and Platforms' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtl&oid=00Do0000000JLLE&lastMod=1495568896000',
	'Command Units' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhtQ&oid=00Do0000000JLLE&lastMod=1495568717000',
	'Loose and Miscellaneous Equipment' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtp&oid=00Do0000000JLLE&lastMod=1495568834000',
	'European Style Units' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtf&oid=00Do0000000JLLE&lastMod=1495568815000',
	'Pacific Rim Style Fire Apparatus' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtu&oid=00Do0000000JLLE&lastMod=1495568856000',
	'Vocational Trucks' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whun&oid=00Do0000000JLLE&lastMod=1495569042000',
	'Used Pumpers and Engines' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuT&oid=00Do0000000JLLE&lastMod=1495568974000',
	'Demo and Refurb Units' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whta&oid=00Do0000000JLLE&lastMod=1495568791000',
};

function loadTruckData() {
	var xhttp;
	if ( window.XMLHttpRequest ) {
		// code for modern browsers
		xhttp = new XMLHttpRequest();
	} else if( window.ActiveXObject ) {
		// code for old IE browsers
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		console.log('Your Browser Does Not Support Web-Request!');
	}
	
	xhttp.onreadystatechange = function() {
		processTruckData(this);
	};
	
	xhttp.open("GET", "http://34.208.168.193/api/services?accountId=DFTF-00001", true);
	//xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.setRequestHeader("Authorization", "Basic ZnNtLWFkbWluOjhlZDMxMmM4NTE0ZDRhMDI3OWFjOTBjNTQxOGEwOGQ5");
	//xhttp.open("POST", "Your Rest URL Here", false);
	xhttp.send();
	//xhttp.send(string);	
}

function processTruckData(xhttp) {
	if ( xhttp && xhttp.readyState == 4 && xhttp.status == 200 ) {
		var serverResponse = JSON.parse(xhttp.responseText);
		if(serverResponse.Success) {
			var truckData = JSON.parse(serverResponse.Data);
			//console.log(JSON.parse(serverResponse.Data));
			var trucks = JSON.parse(serverResponse.Data);
			if(trucks.length) {
				updateDom( prepareTruckTypeMap(trucks) );
			} else {
				
			}						
		} else {
			console.log(serverResponse.Message);
		}
	}
}

function prepareTruckTypeMap(trucks) {
	var truckTypeMap = { All: [] };
	trucks.forEach(function(truck) {
		truckTypeMap.All.push(truck);
		if(truck.apparatusType__c) {
			truck.apparatusType__c.split(';').forEach(function(apparatusType) {
				if(!truckTypeMap[apparatusType]) {
					truckTypeMap[apparatusType] = [];
				}
				truckTypeMap[apparatusType].push(truck);
			});
		}
	});
	return truckTypeMap;
}

function updateDom(truckTypeMap) {
	var listContainer = document.getElementById('containerId');
	
	for(var truckType in truckTypeMap) {
		//console.log(truckType);
		if(!truckTypeImageUrl[truckType]) {
			truckType = 'All';
		}				
		
		var li = document.createElement('li');
		var div = document.createElement('div');
		var img = document.createElement('img');
		img.src = truckTypeImageUrl[truckType];
		div.appendChild(img);
		li.appendChild(div);
		listContainer.appendChild(li);
	}
	//console.log(truckTypeMap);
}

//loadTruckData();