var truckTypeImageUrl = {
	'Default' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N00000332sy&oid=00Do0000000JLLE&lastMod=1496945762000',
	'All' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Wht1&oid=00Do0000000JLLE&lastMod=1495568542000',
	'Rescue Pumpers and Engines' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtz&oid=00Do0000000JLLE&lastMod=1495568876000',
	'Used Rescue Trucksand Squads' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuY&oid=00Do0000000JLLE&lastMod=1495568998000',
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
	'Demoand Refurb Units' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whta&oid=00Do0000000JLLE&lastMod=1495568791000',
};

var GlobalFieldToStrHTML = {
	VF_Main_Title__c : '<div>{0}</div>',
	VF_Website_Price__c : '<div>{0} - <a href="#" onclick="{1}">click here to inquire</a> about this truck</div>',
	Cloud_Documents__r : ''
}

var MiniDetailFieldToStrHTML = {
	VF_Main_Title__c : '<div>{0}</div>',
	Description : '{0}<br/>',
	VF_Additional_Pricing_Text__c : '{0}<br/>',
	VF_Website_Price__c : '{0}</br>'
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
var lastCategorySelected;
var isLocalStorageSupport = (typeof(Storage) !== "undefined");
var defaultTruckImageKey = 'Default';
var tab1Id = 'descriptionTab';
var tab2Id = 'inquiryTab';
var emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phoneRegex =  /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

var DealerAccointId = 'DFTF-00001'; // this value changes as per Dealer.

/* A javascript Class Module for API requests. */
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
			return xhttp;
		}
		return xhttp;
	},			
	getRequest : function(callback) {
		xhttp = this.getWebRequestInstance();
		if(xhttp) {
			xhttp.open("GET", "http://34.208.168.193/api/services?accountId=" + DealerAccointId, true);
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
			xhttp.open("POST", "http://34.208.168.193/api/services", true);
			xhttp.setRequestHeader("Authorization", "Basic ZnNtLWFkbWluOjhlZDMxMmM4NTE0ZDRhMDI3OWFjOTBjNTQxOGEwOGQ5");
			xhttp.send(payload);
			xhttp.onreadystatechange = function() {
				callback(this);
			};
		}
	}
}

/* A function as entry point for all functionality. 
 * - A div having id 'dealerTruckContainerId', must be present on DOM.
 */
var loadTruckData = function() {
	BMFA_TruckContainer = document.getElementById('dealerTruckContainerId');
	WebRequestHandler.getRequest(processTruckData);
}

/* A function handle 'GET' response from request. 
 * @Param xhttp	: holding instance of XMLHttpRequest.
 */
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

/* A function store's and manipulate data. 
 * @Param trucks	: holding instance of list for all trucks(irrespective of categories).
 */
var prepareTruckTypeMap = function(trucks) {
	var truckTypeMap = { All: [] };
	trucks.forEach(function(truck) {
		truckTypeMap.All.push(truck);
		if(truck.apparatusType__c) {
			truck.apparatusType__c.split(';').forEach(function(apparatusType) {
				//var trimedKey = apparatusType.replace(/[^\w]/gi, '');
				var trimedKey = apparatusType;
				if(!truckTypeMap[trimedKey]) {
					truckTypeMap[trimedKey] = [];
				}
				truckTypeMap[trimedKey].push(truck);
			});
		}
	});
	((isLocalStorageSupport) ? localStorage.setItem('truckTypeMap', JSON.stringify(truckTypeMap)) : (window.truckTypeGlobalMap = truckTypeMap));
}

/* A function returns manipulated data either from localsorage or global variable. */
var getBMFAStorage = function() {
	return ((isLocalStorageSupport) ? JSON.parse(localStorage.getItem('truckTypeMap')) : window.truckTypeGlobalMap);
}

/* A function for expand purticuler category. 
 * @Param element	: holding instance of catagory DOM-element that is currently selected by User.
 */
var expandCategory = function(element) {
	var category = element.getAttribute('category');
	lastCategorySelected = element;
	clearContainerDom();
	constructBackButton('toCatagories');
	BMFA_TruckContainer.appendChild( prepareImageContainer(false, getBMFAStorage()[category]) );
	bindEvent('click', prepareTruckDetails, BMFA_TruckContainer.querySelectorAll('img'));
}

/* A function for display all possible categories. 
 * @Param truckTypeMap	: holding instance of list for all trucks respective to categories.
 */
var displayCategories = function(truckTypeMap) {
	clearContainerDom();
	BMFA_TruckContainer.appendChild( prepareImageContainer(true, truckTypeMap) );
	bindEvent('click', expandCategory, BMFA_TruckContainer.querySelectorAll('img'));
}

/* A function bind click events on DOM elements. 
 * @Param callback	: holding a function that will class after click event occured.
 * @Param elements	: holding a list of elements that has to bind with click event.
 */
var bindEvent = function(eventToBind, callback, elements) {
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener(eventToBind, function(event) {
			callback(event.target);
		});
	}
}


/* A function add back button to DOM. 
 * @Param toword	: holding string value that indicate where to go after back button clicked. 
 */
var constructBackButton = function(toword) {
	var button = document.createElement('button');
	button.innerText = 'back';
	button.setAttribute('jData', toword);
	BMFA_TruckContainer.appendChild( button );
	bindEvent('click', doBack, [button]);
}

/* A function handles click event on back button. 
 * @Param button	: button DOM-element. 
 */		
var doBack = function(button) {
	var toBackStr = button.getAttribute('jData');
	if(toBackStr === 'toCatagories') {
		displayCategories( getBMFAStorage() );
	} else if(toBackStr === 'toCatagory') {
		expandCategory(lastCategorySelected);
	}
}

/* A function for display images in container.
 * @Param isForCategory	: A boolean used to indicate where container is for 
 *						  all category image fill or extended category image fill.
 * @Param truckDataList	: A Map/List of truckes for display images on DOM
 */
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
				var catDetailDiv = document.createElement('div');
				catDetailDiv.innerHTML = truck+ ' (' +truckDataList[truck].length+ ')';
				img.setAttribute('category', truck);
				if(!imgSrc) {		
					console.log(truck);
				}
				div.appendChild(img);
				div.appendChild(catDetailDiv);
			} else {
				truck = truckDataList[truck];
				img.setAttribute('truckid', truck.Id); // Attribute to find truck(for Dev)
				if(truck.Cloud_Documents__r && truck.Cloud_Documents__r.records.length) {
					imgSrc = truck.Cloud_Documents__r.records[0].Amazon_S3_Image_URL__c;//Amazon_S3_Main_Thumbnail_URL__c
				}
				div.appendChild(img);
				var miniDetailDiv = document.createElement('div');
				var miniDetailHtml = '';
				for(var field in MiniDetailFieldToStrHTML) {
					miniDetailHtml += MiniDetailFieldToStrHTML[field].format([truck[field]]);
				}
				miniDetailDiv.innerHTML = miniDetailHtml;
				miniDetailDiv.innerHTML += '<div>View Details</div>';
				div.appendChild(miniDetailDiv);
			}
			img.src = ((imgSrc) ? imgSrc : truckTypeImageUrl[defaultTruckImageKey]);					
			li.appendChild(div);
			ul.appendChild(li);
		}
	}	
	return TruckImageContainer.appendChild(ul);;
}

var addTruckImages = function(ParentNode, ImageList) {
	ImageList.forEach( function(doc) {
		var img = document.createElement('img');
		var imgSrc = truckTypeImageUrl[defaultTruckImageKey];
		if(doc['Main_Image__c']) {
			imgSrc = (doc['Amazon_S3_Main_Thumbnail_URL__c'] ? doc['Amazon_S3_Main_Thumbnail_URL__c'] : '');
		} else {
			imgSrc = (doc['Amazon_S3_Image_URL__c'] ? doc['Amazon_S3_Image_URL__c'] : '');
		}
		img.src = imgSrc;
		ParentNode.appendChild(img);
	});
}

/* A function handles click event on indivisual truck. 
 * @Param element	: DOM-element holding image of truck.
 */	
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
		constructBackButton('toCatagory');
		var truckContainer = document.createElement('div');
		truckContainer.setAttribute('truckId', truckId);
		var truckPart1Container = document.createElement('div');
		var TruckDetailsHtml = '';
		for(var field in GlobalFieldToStrHTML) {					
			var fieldVal = ((selectedTruck[field]) ? selectedTruck[field] : '');
			if(field === 'Cloud_Documents__r') {
				truckImageContainer = document.createElement('div');
				console.log('cloude docs : ', selectedTruck[field]);
				if(selectedTruck[field]) {
					var cloudDocs = selectedTruck[field].records;
					addTruckImages(truckImageContainer, selectedTruck[field].records);
				} else {
					addTruckImages(truckImageContainer, [{Main_Image__c:true, Amazon_S3_Main_Thumbnail_URL__c:truckTypeImageUrl[defaultTruckImageKey]}]);
				}
				TruckDetailsHtml += truckImageContainer.innerHTML;
			} else if(field === 'VF_Website_Price__c') {
				//var linkUrl = ((selectedTruck['Truck_Public_URL__c']) ? selectedTruck['Truck_Public_URL__c'] : '');
				TruckDetailsHtml += GlobalFieldToStrHTML[field].format([fieldVal, 'document.getElementsByName(\''+tab2Id+'\')[0].click()']);
			} else {
				TruckDetailsHtml += GlobalFieldToStrHTML[field].format([fieldVal]);
			}
		}
		truckPart1Container.innerHTML = TruckDetailsHtml;		
		truckContainer.appendChild(truckPart1Container);
		BMFA_TruckContainer.appendChild(truckContainer);
		displayTabs(truckContainer, selectedTruck);		
	}	
}

/* This is the String format function. */
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

/* A function to diaply details of indivisual truck. 
 * @Param selectedTruck	: javascript object of selected Truck.
 */
var displayTabs = function(parentNode, selectedTruck) {
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
	parentNode.appendChild(TruckDetailsContainer)
	bindEvent('click', tabClickHandling, tabs.getElementsByTagName('a'));
}

/* A function to add Intrest form to DOM. */
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
	
	var fieldToClasses = {
		'First Name':'input required',
		'Last Name':'input required',
		'Phone':'input required phone',
		'Email':'input required email',
		'Purchase Timeframe':'input required',
		'Make An Offer':'input required',
		'City':'input required',
		'State':'input required',
		'Inquiry Message':'input required'
	}
	
	var PurchaseTimeframeOpt = ['', 'Less than 1 month', '1 month - 3 months', '6 months - 12 months', '12 months+'];
	var StateOpt = ['', 'CA'];
	
	var tab2Div = document.createElement('div');
	tab2Div.id = tab2Id;
	tab2Div.style.display = 'none';
	var messageContainerDiv = document.createElement('div');
	messageContainerDiv.id = 'messageContainerId';
	tab2Div.appendChild(messageContainerDiv);
	for(var fieldName in fieldAndType) {
		var dynamicDom = document.createElement(fieldAndType[fieldName]);
		dynamicDom.name = fieldName.replace(/\s/g,'');
		dynamicDom.className = fieldToClasses[fieldName];
		if(fieldName === 'Purchase Timeframe') {
			PurchaseTimeframeOpt.forEach(function(opt) {
				var option = document.createElement('option');
				option.value = (opt) ? opt: '';
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
				option.value = (opt) ? opt: '';
				option.innerHTML = (opt) ? opt : 'State';
				if(!opt) {
					option.disabled = true;
					option.selected = true;
				}
				dynamicDom.appendChild(option);
			});
		} else {
			dynamicDom.placeholder = fieldName;			
			if(fieldName === 'Phone') {
				bindEvent('keyup', processNumberEntry, [dynamicDom]);
			}
		}
		tab2Div.appendChild(dynamicDom);
	}
	var submitButton = document.createElement('button');
	submitButton.type = 'button';
	submitButton.innerHTML = 'Submit Fire Truck Inquiry';
	tab2Div.appendChild(submitButton);
	bindEvent('click', submitEnquiry, [submitButton]);
	return tab2Div;
}

/* A function to validate and mask the phone number.
 * @Param element	: set message for Error or Success.
 */
var processNumberEntry = function(element) {
	var val = element.value;
	if(val.length >= 13) {
		element.value = formatPhone(val.replace(/[^0-9]+/g,'').slice(0, 10));
		return false;
	} else {
		element.value = formatPhone(val.replace(/[^0-9]+/g,''));
	}
	
	function formatPhone(value) {
		var digitList = value.split('');
		digitList.forEach(function(char, index) {
			if(index === 2 || index === 6) {
				digitList.splice( index+1, 0, '-');
			}
		});
		return digitList.join('');
	}
}

/* A function to add page message.
 * @Param isSuccess	: set message for Error or Success.
 * @Param errorMessage	: Message to display.
 */
var setMessage = function(isSuccess, errorMessage) {
	var messageContainer = document.getElementById('messageContainerId');
	var messages = messageContainer.getElementsByClassName('message');
	if(!messages.length && errorMessage) {
		messageDiv = document.createElement('div');
		messageDiv.className = 'message';
		//messageDiv.className += ((isSuccess) ? 'error' : 'success');
		messageDiv.innerHTML  = errorMessage;
		messageContainer.appendChild(messageDiv);
	} else if(messages.length) {
		messages[0].innerHTML = errorMessage;
	}
}

/* A function to submit from for inquiry. 
 * @Param element	: DOM element upon which class will be searched.
 * @Param className	: class Name to search.
 */
var hasClass = function(element, className) {
	var hadClass = false;
	element.className.split(' ').some(function(elementClass) {
		return hadClass = (elementClass === className);
	});
	return hadClass;
}

/* A function to validate data and display error messages if any, before submit. */
var validateData = function() {
	var isProcced = true;
	var inquirJSON = {};
	var inquiryTab = document.getElementById(tab2Id);
	var messageContainer = document.getElementById('messageContainerId');
	messageContainer.innerHTML = '';
	var fieldElementList = inquiryTab.getElementsByClassName('input');
	var isFirstError = true;
	for(var index = 0; index < fieldElementList.length; index++) {
		var element = fieldElementList[index];
		var elementValue = element.value;
		var errorMessage;
		if(elementValue) {
			if(hasClass(element, 'required')) {
				if(hasClass(element, 'email')) {
					isProcced = emailRegex.test(elementValue);
					errorMessage = 'Invalid Email!';
				} else if(hasClass(element, 'phone')) {
					isProcced = phoneRegex.test(elementValue);
					errorMessage = 'Invalid Phone!';
				} else {
					isProcced = true;
				}			
			}
			if(isProcced) {
				inquirJSON[element.name] = elementValue;
				element.style.borderColor = 'darkgrey';
			} else {
				element.style.borderColor = 'red';
			}
		} else if(hasClass(element, 'required')) {
			element.style.borderColor = 'red';
			if(isProcced) isProcced = false;
			errorMessage = 'Please Fill All Required Fields!';
		}
		if(!isProcced && isFirstError) {
			element.focus();
			setMessage(isProcced, errorMessage);
			isFirstError = false;
		}		
	}
	return ((isProcced)? inquirJSON : isProcced);
}

/* A function to submit from for inquiry. */
var submitEnquiry = function() {

	var JSON_Buffer = validateData();
	if(!JSON_Buffer) {
		console.log('please fill all required values');
	} else {
		JSON_Buffer['AccountId'] = DealerAccointId;
		console.log(JSON_Buffer);
		
	    WebRequestHandler.postRequest(JSON.stringify(JSON_Buffer), function(xhttp) {
			console.log(xhttp);
			if ( xhttp && xhttp.readyState == 4 && xhttp.status == 200 ) {
				var serverResponse = JSON.parse(xhttp.responseText);
				if(serverResponse.Success) {
					setMessage(true, 'Inquire Successfull!');
				} else {
					console.log(serverResponse.Message);
					setMessage(false, 'Something Wrong. Please Contact Admin!');
				}
			}
		});
	}
}

/* A function to Tab click handling. */
var tabClickHandling = function(selectedTab) {
	var liTab = selectedTab.parentNode;
	var currentTabToDisplay = document.getElementById(selectedTab.name);
	var activeTabs = liTab.parentNode.getElementsByClassName('FT_active');
	for(var index = 0; index < activeTabs.length; index++) {
		document.getElementById(activeTabs[index].getElementsByTagName('a')[0].name).style.display = 'none';
		activeTabs[index].classList.remove('FT_active');
	}
	currentTabToDisplay.style.display = 'block';
	liTab.className += 'FT_active';
	if(selectedTab.name === tab2Id) {
		currentTabToDisplay.getElementsByClassName('input')[0].focus();
	}
}

/* A function to add tabs to DOM. */
var createTabs = function() {
	var ul = document.createElement('ul');
	ul.className = 'FT_tab-links';
	
	var li1 = document.createElement('li');
	li1.className = 'FT_active';
	var a1 = document.createElement('a');
	a1.innerHTML = 'DESCRIPTION';
	a1.href = '#';
	a1.name = tab1Id;
	li1.appendChild(a1);
	ul.appendChild(li1);
	
	var li2 = document.createElement('li');
	var a2 = document.createElement('a');
	a2.innerHTML = 'YES I&#39;M INTERESTED';
	a2.href = '#';
	a2.name = tab2Id;
	li2.appendChild(a2);
	ul.appendChild(li2);
	
	return ul;
}

var clearContainerDom = function() {
	while (BMFA_TruckContainer.hasChildNodes()) {
		BMFA_TruckContainer.removeChild(BMFA_TruckContainer.lastChild);
	}
}