var FT_truckTypeImageUrl = {
	'Default' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000003exvn&oid=00Do0000000JLLE&lastMod=1497451382000',
	'All Used Trucks' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Wht1&oid=00Do0000000JLLE&lastMod=1495568542000',
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

var FT_GlobalFieldToStrHTML = {
	VF_Main_Title__c : '<h1 class="FT_title">{0}</h1>',
	VF_Website_Price__c : '<h2 class="FT_heading">{0} - click <a href="#" onclick="{1}">here</a> to inquire about this truck</h2>',
	Cloud_Documents__r : ''
}

var FT_MiniDetailFieldToStrHTML = {
	VF_Main_Title__c : '<div class="FT_redTxt">{0}</div>',
	Description : '<div class="FT_gryTxt">{0}</div>'	
}

var FT_MiniDetailBottomFieldsToStrHTML = {
	VF_Additional_Pricing_Text__c : '<div>{0}</div>',
	VF_Website_Price__c : '<div class="FT_blackCost">{0}</div>'
}

var FT_DetailFieldToStrHTML = {
	'Stock_Number__c' : '<div class="FT_redTxt FT_bigTxt">Stock # {0}</div>',
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

var FT_BMFA_TruckContainer;
var FT_lastCategorySelected;
var FT_isLocalStorageSupport = (typeof(Storage) !== "undefined");
var FT_defaultTruckImageKey = 'Default';
var FT_tab1Id = 'descriptionTab';
var FT_tab2Id = 'inquiryTab';
var FT_emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var FT_phoneRegex =  /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

var FT_DealerAccointId = 'DFTF-00001'; // this value changes as per Dealer.
var FT_TruckId;

/* A javascript Class Module for API requests. */
var FT_WebRequestHandler = {			
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
			xhttp.open("GET", "http://34.208.168.193/api/services?accountId=" + FT_DealerAccointId, true);
			//xhttp.open("GET", "https://www.firetruckapi.com/api/services?accountId=" + DealerAccointId, true);
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
			//xhttp.open("POST", "https://www.firetruckapi.com/api/services", true);
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
var FT_loadTruckData = function() {
	FT_BMFA_TruckContainer = document.getElementById('dealerTruckContainerId');
	FT_WebRequestHandler.getRequest(FT_processTruckData);
}

/* A function handle 'GET' response from request. 
 * @Param xhttp	: holding instance of XMLHttpRequest.
 */
var FT_processTruckData = function(xhttp) {
	if ( xhttp && xhttp.readyState == 4 && xhttp.status == 200 ) {
		var serverResponse = JSON.parse(xhttp.responseText);
		if(serverResponse.Success) {
			var truckData = JSON.parse(serverResponse.Data);
			var trucks = JSON.parse(serverResponse.Data);
			if(trucks.length) {
				FT_prepareTruckTypeMap(trucks);
				FT_displayCategories( FT_getBMFAStorage() );
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
var FT_prepareTruckTypeMap = function(trucks) {
	var truckTypeMap = { 'All Used Trucks': [] };
	trucks.forEach(function(truck) {
		truckTypeMap['All Used Trucks'].push(truck);
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
	((FT_isLocalStorageSupport) ? localStorage.setItem('truckTypeMap', JSON.stringify(truckTypeMap)) : (window.truckTypeGlobalMap = truckTypeMap));
}

/* A function returns manipulated data either from localsorage or global variable. */
var FT_getBMFAStorage = function() {
	return ((FT_isLocalStorageSupport) ? JSON.parse(localStorage.getItem('truckTypeMap')) : window.truckTypeGlobalMap);
}

/* A function for expand purticuler category. 
 * @Param element	: holding instance of catagory DOM-element that is currently selected by User.
 */
var FT_expandCategory = function(element) {
	var category = element.getAttribute('category');
	FT_lastCategorySelected = element;
	FT_clearContainerDom();
	FT_constructBackButton('To Catagories');
	var titleDiv = document.createElement('div');
	titleDiv.className = 'FT_PageTitle';
	titleDiv.innerHTML = 'Shop Our '+ ((category === 'All Used Trucks' ) ? 'Used Fire Trucks' : category);
	FT_BMFA_TruckContainer.appendChild(titleDiv);
	FT_BMFA_TruckContainer.appendChild( FT_prepareImageContainer(false, FT_getBMFAStorage()[category], '') );
	FT_bindEvent('click', FT_prepareTruckDetails, FT_BMFA_TruckContainer.querySelectorAll('img'));
	FT_bindEvent('click', FT_prepareTruckDetails, FT_BMFA_TruckContainer.querySelectorAll('a.FT_redBtn'));
}

/* A function for display all possible categories. 
 * @Param truckTypeMap	: holding instance of list for all trucks respective to categories.
 */
var FT_displayCategories = function(truckTypeMap) {
	FT_clearContainerDom();
	var titleDiv = document.createElement('div');
	titleDiv.className = 'FT_PageTitle';
	titleDiv.innerHTML = 'Shop Our Used Fire Trucks';
	FT_BMFA_TruckContainer.appendChild(titleDiv);
	FT_BMFA_TruckContainer.appendChild( FT_prepareImageContainer(true, truckTypeMap, 'FT_category') );
	FT_bindEvent('click', FT_expandCategory, FT_BMFA_TruckContainer.querySelectorAll('img'));
}

/* A function bind click events on DOM elements. 
 * @Param callback	: holding a function that will class after click event occured.
 * @Param elements	: holding a list of elements that has to bind with click event.
 */
var FT_bindEvent = function(eventToBind, callback, elements) {
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener(eventToBind, function(event) {
			callback(event.target);
		});
	}
}

/* A function add back button to DOM. 
 * @Param toword	: holding string value that indicate where to go after back button clicked. 
 */
var FT_constructBackButton = function(toword) {
	var button = document.createElement('a');
	button.innerText = '« Return ' + toword;
	button.className='FT_backLink';
	button.setAttribute('jData', toword);
	FT_BMFA_TruckContainer.appendChild( button );
	FT_bindEvent('click', FT_doBack, [button]);
}

/* A function handles click event on back button. 
 * @Param button	: button DOM-element. 
 */		
var FT_doBack = function(button) {
	var toBackStr = button.getAttribute('jData');
	if(toBackStr === 'To Catagories') {
		FT_displayCategories( FT_getBMFAStorage() );
	} else if(toBackStr === 'To Truck List') {
		FT_expandCategory(FT_lastCategorySelected);
	}
}

/* A function for display images in container.
 * @Param isForCategory	: A boolean used to indicate where container is for 
 *						  all category image fill or extended category image fill.
 * @Param truckDataList	: A Map/List of truckes for display images on DOM
 */
var FT_prepareImageContainer = function(isForCategory, truckDataList, UICclass) {
	TruckImageContainer = document.createElement('div');
	TruckImageContainer.className += 'FT_container';
	var ul = document.createElement('ul');
	ul.className = 'FT_listStyle ' + UICclass;
	for(var truck in truckDataList) {
		if(truckDataList[truck] || isForCategory) {
			var imgSrc = FT_truckTypeImageUrl[truck];
			var li = document.createElement('li');
			var div = document.createElement('div');
			var img = document.createElement('img');
			
			if(isForCategory) {
				var catDetailDiv = document.createElement('div');
				catDetailDiv.innerHTML = truck+ ' (' +truckDataList[truck].length+ ')';
				catDetailDiv.className = 'FT_redTxt';
				
				//var imgContDiv = document.createElement('div');
				//imgContDiv.className = 'FT_imgDiv';
				img.setAttribute('category', truck);
				if(!imgSrc) {		
					console.log(truck);
				}
				//imgContDiv.appendChild(img);
				div.appendChild(img);
				div.appendChild(catDetailDiv);
			} else {
				truck = truckDataList[truck];
				//var imgContDiv = document.createElement('div');
				//imgContDiv.className = 'FT_imgDiv';
				img.setAttribute('truckid', truck.Id); // Attribute to find truck(for Dev)
				if(truck.Cloud_Documents__r && truck.Cloud_Documents__r.records.length) {
					imgSrc = truck.Cloud_Documents__r.records[0].Amazon_S3_Image_URL__c;//Amazon_S3_Main_Thumbnail_URL__c
				}
				//imgContDiv.appendChild(img);
				div.appendChild(img);
				var miniDetailDiv = document.createElement('div');
				var miniDetailHtml = '';
				for(var field in FT_MiniDetailFieldToStrHTML) {
					if(truck[field]) {
						miniDetailHtml += FT_MiniDetailFieldToStrHTML[field].FT_format([truck[field]]);
					}					
				}
				miniDetailHtml += '<div class="FT_btmDiv">'
				for(var field in FT_MiniDetailBottomFieldsToStrHTML) {
					if(truck[field]) {
						miniDetailHtml += FT_MiniDetailBottomFieldsToStrHTML[field].FT_format([truck[field]]);
					}					
				}
				miniDetailHtml += '<a class="FT_redBtn" truckid="'+truck.Id+'">View Details</a></div>';
				miniDetailDiv.innerHTML = miniDetailHtml;
				div.appendChild(miniDetailDiv);
			}
			img.src = ((imgSrc) ? imgSrc : FT_truckTypeImageUrl[FT_defaultTruckImageKey]);					
			li.appendChild(div);
			ul.appendChild(li);
		}
	}	
	return TruckImageContainer.appendChild(ul);;
}

var FT_addTruckImages = function(ParentNode, ImageList) {
	ImageList.forEach( function(doc) {
		var img = document.createElement('img');
		var img1 = document.createElement('img');
		var imgSrc = FT_truckTypeImageUrl[FT_defaultTruckImageKey];
		if(doc['Main_Image__c']) {
			imgSrc = (doc['Amazon_S3_Main_Thumbnail_URL__c'] ? doc['Amazon_S3_Main_Thumbnail_URL__c'] : '');
		} else {
			imgSrc = (doc['Amazon_S3_Image_URL__c'] ? doc['Amazon_S3_Image_URL__c'] : '');
		}
		img.src = imgSrc;
		img1.src = imgSrc;
		ParentNode.appendChild(img);
		ParentNode.appendChild(img1);
	});
}

/* A function handles click event on indivisual truck. 
 * @Param element	: DOM-element holding image of truck.
 */	
var FT_prepareTruckDetails = function(element) {
	FT_TruckId = element.getAttribute('truckid');
	var selectedTruck;
	var isFound = false;
	FT_getBMFAStorage()['All Used Trucks'].some( function(truck) {
		selectedTruck = truck;
		return (isFound = (truck.Id === FT_TruckId));
	});
	if(isFound) {
		FT_clearContainerDom();
		FT_constructBackButton('To Truck List');
		var truckContainer = document.createElement('div');
		truckContainer.setAttribute('truckId', FT_TruckId);
		var truckPart1Container = document.createElement('div');
		var TruckDetailsHtml = '';
		for(var field in FT_GlobalFieldToStrHTML) {					
			var fieldVal = ((selectedTruck[field]) ? selectedTruck[field] : '');
			if(field === 'Cloud_Documents__r') {
				truckImageContainer = document.createElement('div');
				console.log('cloude docs : ', selectedTruck[field]);
				if(selectedTruck[field]) {
					var cloudDocs = selectedTruck[field].records;
					FT_addTruckImages(truckImageContainer, selectedTruck[field].records);
				} else {
					FT_addTruckImages(truckImageContainer, [{Main_Image__c:true, Amazon_S3_Main_Thumbnail_URL__c:FT_truckTypeImageUrl[FT_defaultTruckImageKey]}]);
				}
				TruckDetailsHtml += truckImageContainer.innerHTML;
			} else if(field === 'VF_Website_Price__c') {
				//var linkUrl = ((selectedTruck['Truck_Public_URL__c']) ? selectedTruck['Truck_Public_URL__c'] : '');
				TruckDetailsHtml += FT_GlobalFieldToStrHTML[field].FT_format([fieldVal, 'document.getElementsByName(\''+FT_tab2Id+'\')[0].click()']);
			} else {
				TruckDetailsHtml += FT_GlobalFieldToStrHTML[field].FT_format([fieldVal]);
			}
		}
		truckPart1Container.innerHTML = TruckDetailsHtml;		
		truckContainer.appendChild(truckPart1Container);
		FT_BMFA_TruckContainer.appendChild(truckContainer);
		FT_displayTabs(truckContainer, selectedTruck);		
	}	
}

/* This is the String format function. */
String.prototype.FT_format = function (args) {
	var str = this;
	return str.replace(String.prototype.FT_format.regex, function(item) {
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
String.prototype.FT_format.regex = new RegExp("{-?[0-9]+}", "g");

/* A function to diaply details of indivisual truck. 
 * @Param selectedTruck	: javascript object of selected Truck.
 */
var FT_displayTabs = function(parentNode, selectedTruck) {
	
	TruckDetailsContainer = document.createElement('div');
	TruckDetailsContainer.className += 'FT_tabs';	
	var tabs = FT_createTabs();
	TruckDetailsContainer.appendChild( tabs );
	
	var contentDiv = document.createElement('div');
	contentDiv.className += 'FT_content';
	
	var tab1Div = document.createElement('div');	
	tab1Div.id = FT_tab1Id;
	tab1Div.className = 'FT_gryTxt';
	
	var truckDetailsHtml = '';
	for(var field in FT_DetailFieldToStrHTML) {
		var innerFieldVal = '';
		field.split('.').some(function(innerField, index) {
			var innerObject = (!(index) ? selectedTruck : (innerObject) ? innerObject : '');
			innerFieldVal = ((innerObject[innerField]) ? innerObject[innerField] : null);
			return (innerFieldVal == null);
		});
		if(innerFieldVal) {
			truckDetailsHtml += FT_DetailFieldToStrHTML[field].FT_format([innerFieldVal]);
		}
	}
	tab1Div.innerHTML = truckDetailsHtml;
	contentDiv.appendChild( tab1Div );	
	// Adding From for user interest(tab2).
	contentDiv.appendChild( FT_addInetrestFrom() );
	TruckDetailsContainer.appendChild( contentDiv );
	parentNode.appendChild( TruckDetailsContainer )
	FT_bindEvent('click', FT_tabClickHandling, tabs.getElementsByTagName('a'));
}

/* A function to add Intrest form to DOM. */
var FT_addInetrestFrom = function() {
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
		'First Name':'FT_input FT_required',
		'Last Name':'FT_input FT_required',
		'Phone':'FT_input FT_required FT_phone',
		'Email':'FT_input FT_required FT_email',
		'Purchase Timeframe':'FT_input FT_required',
		'Make An Offer':'FT_input FT_required',
		'City':'FT_input FT_required',
		'State':'FT_input FT_required',
		'Inquiry Message':'FT_input FT_required ftextArea'
	}
	
	var PurchaseTimeframeOpt = ['', 'Less than 1 month', '1 month - 3 months', '6 months - 12 months', '12 months+'];
	var StateOpt = ['', 'CA'];
	
	var tab2Div = document.createElement('div');
	tab2Div.id = FT_tab2Id;
	tab2Div.style.display = 'none';
	tab2Div.className = 'FT_gryTxt';
	
	var formTitleDiv = document.createElement('div');
	formTitleDiv.innerHTML = 'Contact us to learn more about this truck.';
	formTitleDiv.className = 'FT_formTitle';
	tab2Div.appendChild(formTitleDiv);
	
	var messageContainerDiv = document.createElement('div');
	messageContainerDiv.id = 'messageContainerId';
	messageContainerDiv.classClass = 'FT_closeBtn';
	tab2Div.appendChild(messageContainerDiv);
	var index = 0;
	for(var fieldName in fieldAndType) {
		var inputContainer = document.createElement('div');
		inputContainer.className += ((index%2) ? 'FT_fL' : 'FT_fR');
		var dynamicDom = document.createElement(fieldAndType[fieldName]);
		dynamicDom.name = fieldName.replace(/\s/g,'');
		dynamicDom.className = fieldToClasses[fieldName];
		if(fieldName === 'Purchase Timeframe') {
			PurchaseTimeframeOpt.forEach(function(opt) {
				dynamicDom.className += 'FT_gryTxt';
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
			dynamicDom.className += 'FT_gryTxt';
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
				FT_bindEvent('keyup', FT_processNumberEntry, [dynamicDom]);
			}
		}
		inputContainer.appendChild(dynamicDom);
		tab2Div.appendChild(inputContainer);
		index++;
	}
	var submitButton = document.createElement('button');
	submitButton.type = 'button';
	submitButton.className = 'FT_submitBtn';
	submitButton.innerHTML = 'Submit Fire Truck Inquiry';
	tab2Div.appendChild(submitButton);
	FT_bindEvent('click', FT_submitEnquiry, [submitButton]);
	return tab2Div;
}

/* A function to validate and mask the phone number.
 * @Param element	: set message for Error or Success.
 */
var FT_processNumberEntry = function(element) {
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

var FT_clearFormMessage = function(element) {
	cosole.log('called');
	var messageContainer = document.getElementById('messageContainerId');
	messageContainer.innerHTML = '';
}

/* A function to add page message.
 * @Param isSuccess	: set message for Error or Success.
 * @Param errorMessage	: Message to display.
 */
var FT_setMessage = function(isSuccess, errorMessage) {
	var messageContainer = document.getElementById('messageContainerId');
	var messages = messageContainer.getElementsByClassName('FT_message');
	if(!messages.length && errorMessage) {
		messageDiv = document.createElement('div');
		messageDiv.className = 'FT_message';
		//messageDiv.className += ((isSuccess) ? 'error' : 'success');
		
		var closeButton = document.createElement('a');
		closeButton.className = 'FT_closeBtn';
		var tempParent = document.createElement('div');
		tempParent.appendChild(closeButton);
		
		messageDiv.innerHTML  = errorMessage + tempParent.innerHTML;
		
		messageContainer.appendChild(messageDiv);
		FT_bindEvent('click', FT_clearFormMessage, [closeButton]);
	} else if(messages.length) {
		messages[0].innerHTML = errorMessage;
	}
}

/* A function to submit from for inquiry. 
 * @Param element	: DOM element upon which class will be searched.
 * @Param className	: class Name to search.
 */
var FT_hasClass = function(element, className) {
	var hadClass = false;
	element.className.split(' ').some(function(elementClass) {
		return hadClass = (elementClass === className);
	});
	return hadClass;
}

/* A function to validate data and display error messages if any, before submit. */
var FT_validateData = function() {
	var isProcced = true;
	var inquirJSON = {};
	var inquiryTab = document.getElementById(FT_tab2Id);
	var messageContainer = document.getElementById('messageContainerId');
	messageContainer.innerHTML = '';
	var fieldElementList = inquiryTab.getElementsByClassName('FT_input');
	var isFirstError = true;
	for(var index = 0; index < fieldElementList.length; index++) {
		var element = fieldElementList[index];
		var elementValue = element.value;
		var errorMessage;
		if(elementValue) {
			if(FT_hasClass(element, 'FT_required')) {
				if(FT_hasClass(element, 'FT_email')) {
					isProcced = FT_emailRegex.test(elementValue);
					errorMessage = 'Invalid Email!';
				} else if(FT_hasClass(element, 'FT_phone')) {
					isProcced = FT_phoneRegex.test(elementValue);
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
		} else if(FT_hasClass(element, 'FT_required')) {
			element.style.borderColor = 'red';
			if(isProcced) isProcced = false;
			errorMessage = 'Please Fill All Required Fields!';
		}
		if(!isProcced && isFirstError) {
			element.focus();
			FT_setMessage(isProcced, errorMessage);
			isFirstError = false;
		}		
	}
	return ((isProcced)? inquirJSON : isProcced);
}

/* A function to submit from for inquiry. */
var FT_submitEnquiry = function() {

	var JSON_Buffer = FT_validateData();
	if(!JSON_Buffer) {
		console.log('please fill all required values');
	} else {
		JSON_Buffer['AccountId'] = FT_DealerAccointId;
		JSON_Buffer['TruckId'] = FT_TruckId;
		
		console.log(JSON_Buffer);
		
	    FT_WebRequestHandler.postRequest(JSON.stringify(JSON_Buffer), function(xhttp) {
			console.log(xhttp);
			if ( xhttp && xhttp.readyState == 4 && xhttp.status == 200 ) {
				var serverResponse = JSON.parse(xhttp.responseText);
				if(serverResponse.Success) {
					FT_setMessage(true, 'Inquire Successfull!');
				} else {
					console.log(serverResponse.Message);
					FT_setMessage(false, 'Something Wrong. Please Contact Admin!');
				}
			}
		});
	}
}

/* A function to Tab click handling. */
var FT_tabClickHandling = function(selectedTab) {
	var liTab = selectedTab.parentNode;
	var currentTabToDisplay = document.getElementById(selectedTab.name);
	var activeTabs = liTab.parentNode.getElementsByClassName('FT_active');
	for(var index = 0; index < activeTabs.length; index++) {
		document.getElementById(activeTabs[index].getElementsByTagName('a')[0].name).style.display = 'none';
		activeTabs[index].classList.remove('FT_active');
	}
	currentTabToDisplay.style.display = 'block';
	liTab.className += 'FT_active';
	if(selectedTab.name === FT_tab2Id) {
		currentTabToDisplay.getElementsByClassName('FT_input')[0].focus();
	}
}

/* A function to add tabs to DOM. */
var FT_createTabs = function() {
	var ul = document.createElement('ul');
	ul.className = 'FT_tab-links';
	
	var li1 = document.createElement('li');
	li1.className = 'FT_active';
	var a1 = document.createElement('a');
	a1.innerHTML = 'DESCRIPTION';
	a1.href = '#';
	a1.name = FT_tab1Id;
	li1.appendChild(a1);
	ul.appendChild(li1);
	
	var li2 = document.createElement('li');
	var a2 = document.createElement('a');
	a2.innerHTML = 'YES I&#39;M INTERESTED';
	a2.href = '#';
	a2.name = FT_tab2Id;
	li2.appendChild(a2);
	ul.appendChild(li2);
	
	return ul;
}

var FT_clearContainerDom = function() {
	while (FT_BMFA_TruckContainer.hasChildNodes()) {
		FT_BMFA_TruckContainer.removeChild(FT_BMFA_TruckContainer.lastChild);
	}
}