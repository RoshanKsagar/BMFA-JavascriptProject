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

var GlobalFieldToStrHTML = {
	VF_Main_Title__c : '<div>{0}</div>',
	VF_Website_Price__c : '<div>{0} - click <a href="{1}" target="_balnk">here</a> to inquire about this truck</div>',
	Cloud_Documents__r : ''
}

var DetailFieldToStrHTML = {
	'Stock_Number__c' : 'Stock # {0}<br/>',
	'Description' : '{0}<br/>',
	'VF_Main_Title__c' : '<div>{0}</div>',
	'VF_Chassis__c' : '{0}<br/>',
	'VF_Seating__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Chassis_Info__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Fire_Body_Info__c' : '{0}<br/>',
	'VF_Engine__c' : '{0}<br/>',
	'VF_Transmission_Description__c' : '{0}<br/>',
	'VF_Engine_Brake__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Engine_Info__c' : '{0}<br/>',
	'VF_Pump__c' : '{0}<br/>',
	'VF_Current_Annual_Pump_Service_Test__c' : '{0}<br/>',
	'VF_Water_Tank__c' : '{0}<br/>',
	'VF_Foam_System__c' : '{0}<br/>',
	'VF_Foam_Tank_1__c' : '{0}<br/>',
	'VF_Foam_Tank_2__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Pump_Info__c' : '{0}<br/>',
	'VF_Drivers_Side_Discharges__c' : '{0}<br/>',
	'VF_Drivers_Side_Suction__c' : '{0}<br/>',
	'VF_Officers_Side_Discharges__c' : '{0}<br/>',
	'VF_Officers_Side_Suction__c' : '{0}<br/>',
	'VF_Front_Discharges__c' : '{0}<br/>',
	'VF_Front_Suction__c' : '{0}<br/>',
	'VF_Rear_Discharges__c' : '{0}<br/>',
	'VF_Rear_Suction__c' : '{0}<br/>',
	'FT_Deck_Gun__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Plumbing_Info__c' : '{0}<br/>',
	'VF_Booster_Reel__c' : '{0}<br/>',
	'VF_Crosslays_Speedlays__c' : '{0}<br/>',
	'VF_Monitor_Description__c' : '{0}<br/>',
	'VF_Generator_Description__c' : '{0}<br/>',
	'VF_Lighting_Description__c' : '{0}<br/>',
	'VF_Heated_Mirrors__c' : '{0}<br/>',
	'VF_Hard_Suction__c' : '{0}<br/>',
	'VF_Electric_Reels__c' : '{0}<br/>',
	'VF_Hydraulic_Reels__c' : '{0}<br/>',
	'VF_Air_Reels__c' : '{0}<br/>',
	'VF_Electronic_Siren__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Electrical_Info__c' : '{0}<br/>',
	'VF_Cascade_System__c' : '{0}<br/>',
	'VF_Breathing_Air__c' : '{0}<br/>',			
	'VF_Air_Conditioning__c' : '{0}<br/>',
	'VF_Hydraulic_Ladder_Rack__c' : '{0}<br/>',
	'VF_Aluminum_Hose_Bed_Cover__c' : '{0}<br/>',
	'VF_Automatic_Tire_Chains__c' : '{0}<br/>',
	'VF_Pump_Heat_Pan__c' : '{0}<br/>',
	'VF_Backup_Camera__c' : '{0}<br/>',
	'VF_Federal_Q2B_Siren__c' : '{0}<br/>',
	'FT_Ground_Ladders__c' : '{0}<br/>',
	'VF_Auto_Lube_System__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Features__c' : '{0}<br/>',
	'VF_Pump_Hours__c' : '{0}<br/>',
	'VF_Engine_Hours__c' : '{0}<br/>',
	'VF_Arrowstick_Traffic_Indicator__c' : '{0}<br/>',
	'VF_LED_Lighting__c' : '{0}<br/>',
	'VF_Light_Tower__c' : '{0}<br/>',
	'VF_Telescoping_Lights__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Lighting_Info__c' : '{0}<br/>',
	'VF_Current_Aerial_Certification__c' : '{0}<br/>',
	'Fire_Truck__r.Aerial_Info__c' : '{0}<br/>',
	'FT_Aerial_Hours__c' : '{0}<br/>',
	'VF_Mileage__c' : '{0}<br/>',
	'Loose_Equipment_Included__c' : '{0}<br/>',
	'VF_Break_Text_1__c' : '{0}<br/>',
	'VF_OAL__c' : '{0}<br/>',
	'VF_OAH__c' : '{0}<br/>',
	'VF_OAW__c' : '{0}<br/>',
	'VF_GVRW__c' : '{0}<br/>',
	'VF_Wheelbase__c' : '{0}<br/>',
	'Additional_Dimension_Info__c' : '{0}<br/>'
};
var BMFA_TruckContainer;
var isLocalStorageSupport = (typeof(Storage) !== "undefined");
var tab1Id = 'descriptionTab';
var tab2Id = 'inquiryTab';

var WebRequestHandler = {			
	getWebRequestInstance : function() {
		var xhttp = null;
		if ( window.XMLHttpRequest ) {
			// code for modern browsers
			xhttp = new XMLHttpRequest();
		} else if( window.ActiveXObject ) {
			// code for old IE browsers
			xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} else {
			console.log('Your Browser Does Not Support Web-Request!');
		}
		return xhttp;
	},			
	getRequest : function(callback) {
		xhttp = this.getWebRequestInstance();
		if(xhttp) {
			xhttp.open("GET", "http://34.208.168.193/api/services?accountId=DFTF-00001", true);
			xhttp.setRequestHeader("Authorization", "Basic ZnNtLWFkbWluOjhlZDMxMmM4NTE0ZDRhMDI3OWFjOTBjNTQxOGEwOGQ5");
			xhttp.send();
			xhttp.onreadystatechange = function() {
				callback(this);
			};
		}
	},			
	postRequest : function(payload, callback) {
		xhttp = this.getWebRequestInstance();
		if(xhttp) {
			xhttp.open("POST", "http://34.208.168.193/api/services?accountId=DFTF-00001", true);
			//xhttp.setRequestHeader("Content-type", "application/json");
			xhttp.setRequestHeader("Authorization", "Basic ZnNtLWFkbWluOjhlZDMxMmM4NTE0ZDRhMDI3OWFjOTBjNTQxOGEwOGQ5");
			xhttp.send(payload);
			xhttp.onreadystatechange = function() {
				callback(this);
			};
		}
	}
}

var loadTruckData = function() {
	BMFA_TruckContainer = document.getElementById('dealerTruckContainerId');
	WebRequestHandler.getRequest(processTruckData);
}

var processTruckData = function(xhttp) {
	if ( xhttp && xhttp.readyState == 4 && xhttp.status == 200 ) {
		var serverResponse = JSON.parse(xhttp.responseText);
		if(serverResponse.Success) {
			var truckData = JSON.parse(serverResponse.Data);
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
		clearContainerDom();
		truckContainer = document.createElement('div');
		var TruckDetailsHtml = '';
		for(var field in GlobalFieldToStrHTML) {					
			var fieldVal = ((selectedTruck[field]) ? selectedTruck[field] : '');
			if(field === 'Cloud_Documents__r') {
				truckImageContainer = document.createElement('div');
				console.log('cloude docs : ', selectedTruck[field]);
				if(selectedTruck[field]) {
					var cloudDocs = selectedTruck[field].records;
					cloudDocs.forEach( function(doc) {
						var img = document.createElement('img');
						var imgSrc = truckTypeImageUrl['All'];
						if(true) {
							imgSrc = doc['Amazon_S3_Main_Thumbnail_URL__c'];
						} else {
							imgSrc = doc['Amazon_S3_Image_URL__c'];
						}
						img.src = imgSrc;
						truckImageContainer.appendChild(img);
					});
					TruckDetailsHtml += truckImageContainer.innerHTML;
				}
			} else if(field === 'VF_Website_Price__c') {
				var linkUrl = ((selectedTruck['Truck_Public_URL__c']) ? selectedTruck['Truck_Public_URL__c'] : '');
				TruckDetailsHtml += GlobalFieldToStrHTML[field].format([fieldVal, linkUrl]);
			} else {
				TruckDetailsHtml += GlobalFieldToStrHTML[field].format([fieldVal]);
			}
		}
		truckContainer.innerHTML = TruckDetailsHtml;
		BMFA_TruckContainer.appendChild(truckContainer);
		displayTruckDetails(selectedTruck);		
	}	
}

// This is the string format function.
String.prototype.format = function (args) {
	var str = this;
	return str.replace(String.prototype.format.regex, function(item) {
		var intVal = parseInt(item.substring(1, item.length - 1));
		var replace;
		if (intVal >= 0) {
			replace = args[intVal];
		} else if (intVal === -1) {
			replace = "{";
		} else if (intVal === -2) {
			replace = "}";
		} else {
			replace = "";
		}
		return replace;
	});
};
String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");

var displayTruckDetails = function(selectedTruck) {
	TruckDetailsContainer = document.createElement('div');
	TruckImageContainer.className += 'tabs';	
	var tabs = createTabs();
	TruckDetailsContainer.appendChild( tabs );
	
	var contentDiv = document.createElement('div');
	contentDiv.className += 'FT_content';
	
	var tab1Div = document.createElement('div');
	tab1Div.id = tab1Id;
	
	var truckDetailsHtml = '';
	for(var field in DetailFieldToStrHTML) {
		var innerFieldVal = '';
		field.split('.').some(function(innerField, index) {
			var innerObject = (!(index) ? selectedTruck : (innerObject) ? innerObject : '');
			innerFieldVal = ((innerObject[innerField]) ? innerObject[innerField] : null);
			return (innerFieldVal == null);
		});
		if(innerFieldVal) {
			truckDetailsHtml += DetailFieldToStrHTML[field].format([innerFieldVal]);
		}
	}
	tab1Div.innerHTML = truckDetailsHtml;
	contentDiv.appendChild( tab1Div );	
	// Adding From for user interest.
	contentDiv.appendChild( addInetrestFrom() );
	TruckDetailsContainer.appendChild( contentDiv );
	BMFA_TruckContainer.appendChild(TruckDetailsContainer)
	bindEvents(tabClickHandling, tabs.getElementsByTagName('a'));
}

var addInetrestFrom = function() {
	var fieldAndType = {
		'First Name':'input',
		'Last Name':'input',
		'Phone':'input',
		'Email':'input',
		'Purchase Timeframe':'select',
		'Make An Offer':'input',
		'City':'input',
		'State':'select',
		'Inquiry Message':'textarea'
	}
	
	var PurchaseTimeframeOpt = ['', 'Less than 1 month', '1 month - 3 months', '6 months - 12 months', '12 months+'];
	var StateOpt = ['', 'CA'];
	
	var tab2Div = document.createElement('div');
	tab2Div.id = tab2Id;
	tab2Div.style.display = 'none';
	for(var fieldName in fieldAndType) {
		var dynamicDom = document.createElement(fieldAndType[fieldName]);
		dynamicDom.name = fieldName.replace(/\s/g,'');
		if(fieldName === 'Purchase Timeframe') {
			PurchaseTimeframeOpt.forEach(function(opt) {
				var option = document.createElement('option');
				option.innerHTML = (opt) ? opt: 'Timeframe';
				if(!opt) {
					option.disabled = true;
					option.selected = true;
				}
				dynamicDom.appendChild(option);
			});
		} else if(fieldName === 'State') {
			StateOpt.forEach(function(opt) {
				var option = document.createElement('option');
				option.innerHTML = (opt) ? opt : 'State';
				if(!opt) {
					option.disabled = true;
					option.selected = true;
				}
				dynamicDom.appendChild(option);
			});
		} else {
			dynamicDom.placeholder = fieldName;
		}
		tab2Div.appendChild(dynamicDom);
	}
	var submitButton = document.createElement('button');
	submitButton.type = 'button';
	submitButton.innerHTML = 'Submit Fire Truck Inquiry';
	tab2Div.appendChild(submitButton);
	bindEvents(submitEnquiry, [submitButton]);
	return tab2Div;
}

var submitEnquiry = function() {
	console.log('submit called');
	var inquirJSON = {};
	var inquiryTab = document.getElementById(tab2Id);
	var inputTagList = inquiryTab.getElementsByTagName('input');
	var selectTagList = inquiryTab.getElementsByTagName('select');
	var textareaTagList = inquiryTab.getElementsByTagName('textarea');
	
	for(var index = 0; index < inputTagList.length; index++) {
		inquirJSON[inputTagList[index].name] = inputTagList[index].value;				
	}
	for(var index = 0; index < selectTagList.length; index++) {
		inquirJSON[selectTagList[index].name] = selectTagList[index].value;				
	}
	for(var index = 0; index < textareaTagList.length; index++) {
		inquirJSON[textareaTagList[index].name] = textareaTagList[index].value;				
	}
	console.log(inquirJSON);
	WebRequestHandler.postRequest(JSON.stringify(inquirJSON), function(xhttp) {
		console.log(xhttp);
		if ( xhttp && xhttp.readyState == 4 && xhttp.status == 200 ) {
			var serverResponse = JSON.parse(xhttp.responseText);
			if(serverResponse.Success) {
									
			} else {
				console.log(serverResponse.Message);
			}
		}
	});
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