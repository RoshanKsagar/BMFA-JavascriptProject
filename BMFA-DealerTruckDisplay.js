var truckTypeImageUrl = {
	'All' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Wht1&oid=00Do0000000JLLE&lastMod=1495568542000',
	'RescuePumpersandEngines' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtz&oid=00Do0000000JLLE&lastMod=1495568876000',
	'UsedRescueTrucksandSquads' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuY&oid=00Do0000000JLLE&lastMod=1495568998000',
	'UsedAerialsLadderTrucksandQuints' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whu9&oid=00Do0000000JLLE&lastMod=1495568916000',
	'UsedTankersandTenders' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whud&oid=00Do0000000JLLE&lastMod=1495569016000',
	'AmbulancesandTransportUnits' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhtL&oid=00Do0000000JLLE&lastMod=1495568688000',
	'UsedBrushTrucksQuickAttacksMinis' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuO&oid=00Do0000000JLLE&lastMod=1495568956000',
	'UsedARFFandAirportCrashTrucks' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuE&oid=00Do0000000JLLE&lastMod=1495568936000',
	'TowersandPlatforms' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtl&oid=00Do0000000JLLE&lastMod=1495568896000',
	'CommandUnits' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhtQ&oid=00Do0000000JLLE&lastMod=1495568717000',
	'LooseandMiscellaneousEquipment' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtp&oid=00Do0000000JLLE&lastMod=1495568834000',
	'EuropeanStyleUnits' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtf&oid=00Do0000000JLLE&lastMod=1495568815000',
	'PacificRimStyleFireApparatus' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtu&oid=00Do0000000JLLE&lastMod=1495568856000',
	'VocationalTrucks' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whun&oid=00Do0000000JLLE&lastMod=1495569042000',
	'UsedPumpersandEngines' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuT&oid=00Do0000000JLLE&lastMod=1495568974000',
	'DemoandRefurbUnits' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whta&oid=00Do0000000JLLE&lastMod=1495568791000',
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
var truckTypeMap = {};
function prepareTruckTypeMap(trucks) {
	truckTypeMap = { All: [] };
	trucks.forEach(function(truck) {
		truckTypeMap.All.push(truck);
		if(truck.apparatusType__c) {
			truck.apparatusType__c.split(';').forEach(function(apparatusType) {
				var trimedKey = apparatusType.replace(/[^\w]/gi, '');
				if(!truckTypeMap[trimedKey]) {
					truckTypeMap[trimedKey] = [];
				}
				truckTypeMap[trimedKey].push(truck);
			});
		}
	});
	return truckTypeMap;
}

function expandCategory(category) {
	var BMFA_TruckContainer = document.getElementById('dealerTruckContainerId');
	while (BMFA_TruckContainer.hasChildNodes()) {
		BMFA_TruckContainer.removeChild(BMFA_TruckContainer.lastChild);
	}
	
	BMFA_TruckContainer.className += 'container';
	var ul = document.createElement('ul');
	ul.className = 'FT_listStyle';
	truckTypeMap[category].forEach( function(truck) {
		var truckImageSrc = truckTypeImageUrl['All'];
		if(truck.Cloud_Documents__r && truck.Cloud_Documents__r.records.length) {
			truckImageSrc = truck.Cloud_Documents__r.records[0].Amazon_S3_Image_URL__c;//Amazon_S3_Main_Thumbnail_URL__c
		}
		
		//console.log(truck.VF_Main_Title__c);
				
		var li = document.createElement('li');
		var div = document.createElement('div');
		var img = document.createElement('img');
		img.src = truckImageSrc;
		div.appendChild(img);
		li.appendChild(div);
		ul.appendChild(li);
	});
	BMFA_TruckContainer.appendChild(ul);
}
function updateDom(truckTypeMap) {
	var BMFA_TruckContainer = document.getElementById('dealerTruckContainerId');
	while (BMFA_TruckContainer.hasChildNodes()) {
		BMFA_TruckContainer.removeChild(BMFA_TruckContainer.lastChild);
	}
	BMFA_TruckContainer.className += 'container';
	var ul = document.createElement('ul');
	ul.className = 'FT_listStyle';
	for(var truckType in truckTypeMap) {
		if(!truckTypeImageUrl[truckType]) {
			truckType = 'All';
		}				
		
		var li = document.createElement('li');
		var div = document.createElement('div');
		div.setAttribute('category', truckType);
		var img = document.createElement('img');
		img.setAttribute('category', truckType);
		img.src = truckTypeImageUrl[truckType];		
		div.appendChild(img);
		li.appendChild(div);
		ul.appendChild(li);
	}
	BMFA_TruckContainer.appendChild(ul);
	bindEvents();
}
function bindEvents() {
	var elements = document.querySelectorAll("img");
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener("click", function(event) {
			expandCategory(event.target.getAttribute('category'));
		});
	}
}