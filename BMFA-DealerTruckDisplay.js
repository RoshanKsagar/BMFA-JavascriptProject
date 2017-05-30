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

var BMFA_TruckContainer = document.getElementById('dealerTruckContainerId');
var isLocalStorageSupport = (typeof(Storage) !== "undefined");
var tab1Id = 'descriptionTab';
var tab2Id = 'inquiryTab';

var loadTruckData = function() {
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

var processTruckData = function(xhttp) {
	if ( xhttp && xhttp.readyState == 4 && xhttp.status == 200 ) {
		var serverResponse = JSON.parse(xhttp.responseText);
		if(serverResponse.Success) {
			var truckData = JSON.parse(serverResponse.Data);
			//console.log(JSON.parse(serverResponse.Data));
			var trucks = JSON.parse(serverResponse.Data);
			if(trucks.length) {
				prepareTruckTypeMap(trucks);
				displayCategories( getBMFAStorage() );
			} else {
				
			}						
		} else {
			console.log(serverResponse.Message);
		}
	}
}

var prepareTruckTypeMap = function(trucks) {
	var truckTypeMap = { All: [] };
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
	((isLocalStorageSupport) ? localStorage.setItem('truckTypeMap', JSON.stringify(truckTypeMap)) : (window.truckTypeGlobalMap = truckTypeMap));
}

var getBMFAStorage = function() {
	return ((isLocalStorageSupport) ? JSON.parse(localStorage.getItem('truckTypeMap')) : window.truckTypeGlobalMap);
}

var expandCategory = function(element) {
	var category = element.getAttribute('category');
	clearContainerDom();
	BMFA_TruckContainer.appendChild( prepareImageContainer(false, getBMFAStorage()[category]) );
	bindEvents(prepareTruckDetails, BMFA_TruckContainer.querySelectorAll('img'));
}
var displayCategories = function(truckTypeMap) {
	clearContainerDom();
	BMFA_TruckContainer.appendChild( prepareImageContainer(true, truckTypeMap) );
	bindEvents(expandCategory, BMFA_TruckContainer.querySelectorAll('img'));
}
var bindEvents = function(callback, elements) {
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener("click", function(event) {
			callback(event.target);
			/*if(isForCategory) {
				expandCategory(event.target.getAttribute('truckdata'));
			} else {
				prepareTruckDetails(event.target.getAttribute('truckid'));
			}*/
		});
	}
}

var prepareImageContainer = function(isForCategory, truckDataList) {
	TruckImageContainer = document.createElement('div');
	TruckImageContainer.className += 'container';
	var ul = document.createElement('ul');
	ul.className = 'FT_listStyle';
	for(var truck in truckDataList) {
		if(truckDataList[truck] || isForCategory) {
			var imgSrc = truckTypeImageUrl[truck];			
			var li = document.createElement('li');
			var div = document.createElement('div');
			var img = document.createElement('img');
			
			if(isForCategory) {
				img.setAttribute('category', truck);
				if(!imgSrc) {		
					console.log(truck);
				}
			} else {
				truck = truckDataList[truck];
				img.setAttribute('truckid', truck.Id);
				if(truck.Cloud_Documents__r && truck.Cloud_Documents__r.records.length) {
					imgSrc = truck.Cloud_Documents__r.records[0].Amazon_S3_Image_URL__c;//Amazon_S3_Main_Thumbnail_URL__c
				}
			}
			img.src = ((imgSrc) ? imgSrc : truckTypeImageUrl['All']);
			div.appendChild(img);
			li.appendChild(div);
			ul.appendChild(li);
		}
	}	
	return TruckImageContainer.appendChild(ul);;
}

var prepareTruckDetails = function(element) {
	var truckId = element.getAttribute('truckid');
	var selectedTruck;
	var isFound = false;
	getBMFAStorage()['All'].some( function(truck) {
		selectedTruck = truck;
		return (isFound = (truck.Id === truckId));
	});
	if(isFound) {
		//console.log(selectedTruck);
		clearContainerDom();
		displayTruckDetails(selectedTruck);		
	}	
}

var displayTruckDetails = function(selectedTruck) {
	TruckDetailsContainer = document.createElement('div');
	TruckImageContainer.className += 'tabs';	
	var tabs = createTabs();
	TruckDetailsContainer.appendChild( tabs );
	
	var contentDiv = document.createElement('div');
	contentDiv.className += 'FT_content';
	
	var tab1Div = document.createElement('div');
	tab1Div.id = tab1Id;
	for(var fields in selectedTruck) {
		if(typeof selectedTruck[fields] !== 'object') {
			var div = document.createElement('div');
			div.innerHTML = fields+ ':' +selectedTruck[fields];
			tab1Div.appendChild(div);
		}
	}
	contentDiv.appendChild( tab1Div );	
	// Adding From for user interest.
	contentDiv.appendChild( addInetrestFrom() );
	TruckDetailsContainer.appendChild( contentDiv );
	BMFA_TruckContainer.appendChild(TruckDetailsContainer)
	bindEvents(tabClickHandling, tabs.getElementsByTagName('a'));
}

var addInetrestFrom = function() {
	var tab2Div = document.createElement('div');
	tab2Div.id = tab2Id;
	
	return tab2Div;
}

var tabClickHandling = function(selectedTab) {
	var liTab = selectedTab.parentNode;
	var tabContainer = liTab.parentNode.nextSibling;
	var activeTabs = liTab.parentNode.getElementsByClassName('FT_active');
	for(var index = 0; index < activeTabs.length; index++) {
		document.getElementById(activeTabs[index].getElementsByTagName('a')[0].getAttribute('href').replace(/#/g,'')).style.display = 'none';
		activeTabs[index].classList.remove('FT_active');
	}
	document.getElementById(selectedTab.getAttribute('href').replace(/#/g,'')).style.display = 'block';
	liTab.className += 'FT_active';
}

var createTabs = function() {
	var ul = document.createElement('ul');
	ul.className = 'FT_tab-links';
	
	var li1 = document.createElement('li');
	li1.className = 'FT_active';
	var a1 = document.createElement('a');
	a1.innerHTML = 'DESCRIPTION';
	a1.href = '#' +tab1Id;
	li1.appendChild(a1);
	ul.appendChild(li1);
	
	var li2 = document.createElement('li');
	var a2 = document.createElement('a');
	a2.innerHTML = 'YES I&#39;M INTERESTED';
	a2.href = '#' +tab2Id;
	li2.appendChild(a2);
	ul.appendChild(li2);
	
	return ul;
}

var clearContainerDom = function() {
	while (BMFA_TruckContainer.hasChildNodes()) {
		BMFA_TruckContainer.removeChild(BMFA_TruckContainer.lastChild);
	}
}