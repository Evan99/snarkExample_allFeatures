//https://github.com/sghall/d3-graphs
//http://www.delimited.io/blog/2014/6/17/force-directed-graphs-in-d3

//****************************************************
// THIS IS THE OBJECT THAT DAT.GUI UPDATES
// SEE: http://workshop.chromeexperiments.com/examples/gui/
//****************************************************
var Config = function (options) 
{
	for (var opt in options) 
	{
		this[opt] = options[opt];
	}
};

//****************************************************
// BASIC NODE CLASS - YOU COULD STORE OTHER INFO HERE
//****************************************************
var Node = function(obj) 
{
	this.id = obj.id;
	this.name = obj.name;
	
	//Les m�mes noms que dans le fichier features_segments_CSV.csv
	/*this.Varietes = obj.Varietes;
	this.ImageFileName = obj.ImageFileName;
	this.OriginalImageFileName = obj.OriginalImageFileName;
	this.Global_XGravityCenter = obj.Global_XGravityCenter;
	this.Global_YGravityCenter = obj.Global_YGravityCenter;
	this.Global_Perimeter = obj.Global_Perimeter;
	this.Global_MinRectArea = obj.Global_MinRectArea;
	this.Global_Area = obj.Global_Area;
	this.Global_AxeA = obj.Global_AxeA;
	this.Global_XChildrenGravityCenter_ByArea = obj.Global_XChildrenGravityCenter_ByArea;
	this.Global_YChildrenGravityCenter_ByArea = obj.Global_YChildrenGravityCenter_ByArea;
	this.Global_XChildrenGravityCenter_ByPerimeter = obj.Global_XChildrenGravityCenter_ByPerimeter;
	this.Global_XChildrenGravityCenter_ByHu1 = obj.Global_XChildrenGravityCenter_ByHu1;
	this.Global_YChildrenGravityCenter_ByHu1 = obj.Global_YChildrenGravityCenter_ByHu1;
	this.Color_L1Normalized = obj.Color_L1Normalized;
	this.Color_EntropyNormalized = obj.Color_EntropyNormalized;
	this.Color_StandardDeviation = obj.Color_StandardDeviation;
	this.Color_BackgroundL1Normalized = obj.Color_BackgroundL1Normalized;
	this.Shape_MERArea = obj.Shape_MERArea;
	this.Shape_hu1 = obj.Shape_hu1;
	this.Shape_hu2 = obj.Shape_hu2;
	this.Shape_hu3 = obj.Shape_hu3;
	this.Shape_hu4 = obj.Shape_hu4;
	this.Shape_hu5 = obj.Shape_hu5;
	this.Shape_hu6 = obj.Shape_hu6;
	this.Shape_hu7 = obj.Shape_hu7;
	this.Shape_Roundness = obj.Shape_Roundness;
	this.Shape_Eccentricity = obj.Shape_Eccentricity;
	this.Shape_RectangleFitFactor = obj.Shape_RectangleFitFactor;
	this.Shape_RealRectangleFitFactor = obj.Shape_RealRectangleFitFactor;
	this.Shape_MERAspectRatio = obj.Shape_MERAspectRatio;
	this.Shape_Elipticity = obj.Shape_Elipticity;
	this.Children_ChildrenGravityCenterDistance_ByArea = obj.Children_ChildrenGravityCenterDistance_ByArea;
	this.Children_ChildrenGravityCenterDistance_ByPerimeter = obj.Children_ChildrenGravityCenterDistance_ByPerimeter;
	this.Children_ChildrenGravityCenterDistance_ByHu1 = obj.Children_ChildrenGravityCenterDistance_ByHu1;
	this.Children_CompressedNodes = obj.Children_CompressedNodes;
	this.Children_DarkNodes = obj.Children_DarkNodes;
	this.Children_RelativeChildrenDistribution = obj.Children_RelativeChildrenDistribution;
	this.Children_RelativeChildrenDistributionUsingAllChildrenCount = obj.Children_RelativeChildrenDistributionUsingAllChildrenCount;
	this.Children_RelativeAllChildrenDistribution = obj.Children_RelativeAllChildrenDistribution;
	this.Children_ChildrenEntropy_Shannon = obj.Children_ChildrenEntropy_Shannon;
	this.Children_ChildrenEntropy_Quadratic = obj.Children_ChildrenEntropy_Quadratic;
	this.Children_ChildrenAverageColor = obj.Children_ChildrenAverageColor;
	this.Children_ChildrenAreaPercent = obj.Children_ChildrenAreaPercent;
	this.Children_ChildrenCount = obj.Children_ChildrenCount;
	this.Children_AllLevelChildrenCount = obj.Children_AllLevelChildrenCount;*/
	
	
	this.features = [];
	this.features["Varietes"] = obj.Varietes;
	this.features["ImageFileName"] = obj.ImageFileName;
	this.features["OriginalImageFileName"] = obj.OriginalImageFileName;
	this.features["Global_XGravityCenter"] = obj.Global_XGravityCenter;
	this.features["Global_YGravityCenter"] = obj.Global_YGravityCenter;
	this.features["Global_Perimeter"] = obj.Global_Perimeter;
	this.features["Global_MinRectArea"] = obj.Global_MinRectArea;
	this.features["Global_Area"] = obj.Global_Area;
	this.features["Global_AxeA"] = obj.Global_AxeA;
	this.features["Global_XChildrenGravityCenter_ByArea"] = obj.Global_XChildrenGravityCenter_ByArea;
	this.features["Global_YChildrenGravityCenter_ByArea"] = obj.Global_YChildrenGravityCenter_ByArea;
	this.features["Global_XChildrenGravityCenter_ByPerimeter"] = obj.Global_XChildrenGravityCenter_ByPerimeter;
	this.features["Global_XChildrenGravityCenter_ByHu1"] = obj.Global_XChildrenGravityCenter_ByHu1;
	this.features["Global_YChildrenGravityCenter_ByHu1"] = obj.Global_YChildrenGravityCenter_ByHu1;
	this.features["Color_L1Normalized"] = obj.Color_L1Normalized;
	this.features["Color_EntropyNormalized"] = obj.Color_EntropyNormalized;
	this.features["Color_StandardDeviation"] = obj.Color_StandardDeviation;
	this.features["Color_BackgroundL1Normalized"] = obj.Color_BackgroundL1Normalized;
	this.features["Shape_MERArea"] = obj.Shape_MERArea;
	this.features["Shape_hu1"] = obj.Shape_hu1;
	this.features["Shape_hu2"] = obj.Shape_hu2;
	this.features["Shape_hu3"] = obj.Shape_hu3;
	this.features["Shape_hu4"] = obj.Shape_hu4;
	this.features["Shape_hu5"] = obj.Shape_hu5;
	this.features["Shape_hu6"] = obj.Shape_hu6;
	this.features["Shape_hu7"] = obj.Shape_hu7;
	this.features["Shape_Roundness"] = obj.Shape_Roundness;
	this.features["Shape_Eccentricity"] = obj.Shape_Eccentricity;
	this.features["Shape_RectangleFitFactor"] = obj.Shape_RectangleFitFactor;
	this.features["Shape_RealRectangleFitFactor"] = obj.Shape_RealRectangleFitFactor;
	this.features["Shape_MERAspectRatio"] = obj.Shape_MERAspectRatio;
	this.features["Shape_Elipticity"] = obj.Shape_Elipticity;
	this.features["Children_ChildrenGravityCenterDistance_ByArea"] = obj.Children_ChildrenGravityCenterDistance_ByArea;
	this.features["Children_ChildrenGravityCenterDistance_ByPerimeter"] = obj.Children_ChildrenGravityCenterDistance_ByPerimeter;
	this.features["Children_ChildrenGravityCenterDistance_ByHu1"] = obj.Children_ChildrenGravityCenterDistance_ByHu1;
	this.features["Children_CompressedNodes"] = obj.Children_CompressedNodes;
	this.features["Children_DarkNodes"] = obj.Children_DarkNodes;
	this.features["Children_RelativeChildrenDistribution"] = obj.Children_RelativeChildrenDistribution;
	this.features["Children_RelativeChildrenDistributionUsingAllChildrenCount"] = obj.Children_RelativeChildrenDistributionUsingAllChildrenCount;
	this.features["Children_RelativeAllChildrenDistribution"] = obj.Children_RelativeAllChildrenDistribution;
	this.features["Children_ChildrenEntropy_Shannon"] = obj.Children_ChildrenEntropy_Shannon;
	this.features["Children_ChildrenEntropy_Quadratic"] = obj.Children_ChildrenEntropy_Quadratic;
	this.features["Children_ChildrenAverageColor"] = obj.Children_ChildrenAverageColor;
	this.features["Children_ChildrenAreaPercent"] = obj.Children_ChildrenAreaPercent;
	this.features["Children_ChildrenCount"] = obj.Children_ChildrenCount;
	this.features["Children_AllLevelChildrenCount"] = obj.Children_AllLevelChildrenCount;
	
	if(this.features["Shape_Roundness"] > 0 && this.features["Shape_Roundness"] <= 10)
		this.group = 1;
	else if(this.features["Shape_Roundness"] > 10 && this.features["Shape_Roundness"] <= 20)
		this.group = 2;
	else
		this.group = 3;
	/*else if(this.Shape_Roundness > 500 && this.Shape_Roundness <= 750)
		this.group = 3;
	else if(this.Shape_Roundness > 500 && this.Shape_Roundness <= 1000)
		this.group = 4;*/
	
	
	
	//console.log(this.group);
};

//****************************************************
// BASIC LINK CLASS - YOU COULD STORE OTHER INFO HERE
//****************************************************
var Link = function(obj) 
{
	this.id = obj.id;
	this.source_targetID = obj.source_targetID;
	this.source = obj.source;
	this.target = obj.target;
	this.emd = obj.emd;
	
	this.value = obj.value;		//Plus g�n�ral que this.emd. L'utilisateur d�fini quel est la valeur du lien en fonction de la signature choisie et de la m�thode de calcul des liens (euclidiennes, etc...)
};

//******************************************************
// MAIN GRAPH CLASS CONSTRUCTOR
//******************************************************
var Graph = function(data, config) 
{
	this.svg = d3.select("body")
				 .append("svg")
				 .attr("width", config.width)
				 .attr("height", config.height)
				 .append("g");
				 
	//****************************************************
	// CREATE A RADIAL GRADIENT - USED ON NODES
	//****************************************************
	this.defs = this.svg.append("defs");

	this.gradient = this.defs.append("radialGradient")
							 .attr("id", "nodeGradient")
							 .attr({cx: .5, cy: .5, fx: .75, fy: .75, r: .55})
							 .attr("spreadMethod", "pad");

	this.gradient.append("stop")
				 .attr("offset", "0%")
				 .attr("stop-color", "#E6E6FA");

	this.gradient.append("stop")
				 .attr("offset", "100%")
				 .attr("stop-color", "#0000EE");
	
	//****************************************************
	// MAIN GOODIES FOR THE GRAPH OBJECT
	//****************************************************
	this.nodes  = {};     	// Object holding all the nodes
	this.links  = {};     	// Object holding all the links
	//this.deletedLinks = []; //Keep the deleted links after a threshold, to get them back if needed
	this.store  = /*data*/{};   	// Data store w/ all the graphs
	this.nodesStore = {};
	this.config = config; 	// The passed in config object
	
	//*********************************************************
	// CONFIGURE THE FORCE LAYOUT FOR THE GRAPH SET TO PASSED 
	// IN CONFIG VALUES. THEN THESE ARE UPDATED VIA DAT.GUI
	//*********************************************************
	
	this.force = d3.layout.force();
	this.force
		.gravity(config.gravity)
		.charge(config.charge)
		.theta(config.theta)
		.friction(config.friction)
		.linkDistance(function(d) { return d.value * config.distance; } )
		.linkStrength(config.strength)
		.size([2000, config.height]);
	
	//***********************************************************
	// SET DAT.GUI TO CHANGE VALUES IN THE CONFIG OBJECT
	//***********************************************************
	this.datgui = new dat.GUI();
	
	/*this.datgui.add(this.config, 'dataset', Object.keys(this.store)).onChange(function (d) 
	{
		this.svg.selectAll(".node").remove();
		this.svg.selectAll(".link").remove();
		this.setData();
		this.update();
		this.force.start()
		this.shake();
	}.bind(this));*/
	
	var graph_gui = this.datgui.addFolder('Graphe');
	
	graph_gui.add(this.config, 'charge', -1000, 1000).onChange(function (charge) 
	{
		this.force.charge(charge);
		this.force.start();
	}.bind(this));

	graph_gui.add(this.config, 'gravity', -0.1, 1).onChange(function (grav) 
	{
		this.force.gravity(grav);
		this.force.start();
	}.bind(this));

	graph_gui.add(this.config, 'theta', 0, 1).onChange(function (theta) 
	{
		this.force.theta(theta);
		this.force.start();
	}.bind(this));

	graph_gui.add(this.config, 'friction', 0, 1).onChange(function (frict) 
	{
		this.force.friction(frict);
		this.force.start();
	}.bind(this));
	
	
	//____________________________________________________________________________

	var link_gui = this.datgui.addFolder('Liens');

	link_gui.add(this.config, 'distance', 0, 200).onChange(function (dist) 
	{
		this.force.linkDistance(function(d) {return d.value * dist;});
		this.force.start()
	}.bind(this));

	link_gui.add(this.config, 'strength', 0, 1).onChange(function (str) 
	{
		this.force.linkStrength(str);
		this.force.start()
	}.bind(this));
	
	link_gui.add(this.config, 'threshold_EMD', 0, 300)
			.onChange(function (threshEMD) 
			{ 
				//this.svg.selectAll("*").remove();
				//this.setData(data); 
				//this.update(); 
				this.removeLink(threshEMD);
				this.update();
				
				/*d3.selectAll(".node").each(function (d)
				{
					if(d.weight == 0)
					{
						d.style("opacity", 1);
					}
				});*/
			}.bind(this));
	//____________________________________________________________________________
	
	var node_gui = this.datgui.addFolder('Noeuds');
	
	//***************************************************
	//Permet de changer la taille des ic�nes de photos
	node_gui.add(this.config, 'imageSize', 1, 200).onChange( function (size) 
	{
		d3.selectAll("image").each(function(d) { d3.select(this).remove(); });							//Supression des images si elles existent pour ne pas cr�er par dessus
		
		//D3.js s�lectionne tous noeuds du graph
		d3.selectAll(".node").each(function(d)															//Ajout des nouvelles images avec la bonne taille
		{
			//A chaque noeud on ajoute l'image correspondant au nom du noeud et on la positionne
			d3.select(this).append("image")
				.attr("xlink:href", function(d) { return "RosesSegmentees/" + d.name; } )				//**LA**//
				.attr("x", "-12px")
				.attr("y", "-12px")
				.attr("width", config.imageSize + "px")
				.attr("height", config.imageSize + "px");
		});
		//On d�calle le texte vers le haut pour qu'il ne se retrouve pas derri�re l'image
		d3.selectAll("text")
		  .attr("y", -12);
			  
		d3.selectAll("circle").each(function(d)															//Supression des cercles, si l'on change cette option en mode noeuds
		{
			d3.select(this).remove();
		});
	}.bind(this));
	
	//***************************************************
	//permet de changer la taille des noeuds
	node_gui.add(this.config, 'nodeRadius', 1, 30).onChange(function (rad) 
	{ 
		d3.selectAll("image").each(function(d) { d3.select(this).remove(); });
	
		d3.selectAll("circle").each(function(d) 
		{ 
			d3.select(this).remove(); 
		}); 
		
		d3.selectAll(".node")
			  .append("circle")
			  .attr("r", config.nodeRadius)
			  .style("fill", "url(#nodeGradient)");
	}.bind(this));
	
	node_gui.add(this.config, 'stop', true, false).onChange(function (stop)
	{
		nodes = this.getNodes();
		if(stop)
		{
			//this.force.stop();
			for(var key in nodes)
				nodes[key].fixed = true;
		}
		else
		{
			//this.force.start();
			for(var key in nodes)
				nodes[key].fixed = false;
		}
	}.bind(this));
	//____________________________________________________________________________
	
	var fonctions_gui = this.datgui.addFolder('Fonctions');
	
	var allButtons = function()
	{
		//***************************************************
		// DISPLAY PHOTOS INSTEAD OF NODES
		//***************************************************
		this.Mode_Photos = function() 
		{ 
			//Supprimer toutes les images si elles existent pour ne pas en recr�er par dessus
			d3.selectAll("image").each(function(d) { d3.select(this).remove(); });
		
			//D3.js s�lectionne tous noeuds du graph
			d3.selectAll(".node").each(function(d)
			{
				//Images_segmentees
				//RosesSegmentees
				
				//A chaque noeud on ajoute l'image correspondant au nom du noeud et on la positionne
				d3.select(this).append("image")
					//.attr("xlink:href", function(d) { return "Images_segmentees/" + d.name; } )	
					.attr("xlink:href", function(d) { 
														if(d.ImageFileName != "")
															return "RosesSegmentees/" + d.features["ImageFileName"]; 
														else
															return "RosesSegmentees/" + d.features["OriginalImageFileName"];
													} )						//**LA**//
					.attr("x", "-12px")
					.attr("y", "-12px")
					.attr("width", config.imageSize + "px")
					.attr("height", config.imageSize + "px");
			});
			//On d�calle le texte vers le haut pour qu'il ne se retrouve pas derri�re l'image
			d3.selectAll("text")
			  .attr("y", -12);
				  
			//On passe le contour des noeuds en noir pour ne pas les voir en mode image
			d3.selectAll("circle").each(function(d)
			{
				d3.select(this).remove();
			});
			  
			console.log("Mode photo active"); 
		};
		
		//***************************************************
		// DISPLAY NODES INSTEAD OF PHOTOS
		//***************************************************
		this.Mode_Noeuds = function() 
		{ 
			//D3.js s�lectionne toutes les images du graphe
			d3.selectAll("image").each(function(d)
			{
				//On supprime les images une par une
				d3.select(this).remove();
			});
			//on red�calle le texte vers le bas pour qu'il apparaisse � c�t� du noeud
			d3.selectAll("text")
			  .attr("y", 0);
				  
			//On passe le contour des noeuds en blanc pour les voir
			d3.selectAll(".node")
			  .append("circle")
			  .attr("r", config.nodeRadius)
			  .style("fill", "url(#nodeGradient)");
					  
			console.log("Mode noeuds active"); 
		};
	}
	var buttons = new allButtons();
	
	fonctions_gui.add(buttons, 'Mode_Photos');
	fonctions_gui.add(buttons, 'Mode_Noeuds');
	//____________________________________________________________________________
	
	var graphComputation_gui = this.datgui.addFolder('Calcul du graphe');
	
	graphComputation_gui.add(this.config, 'compute', true, false).onChange(function (yes)
	{
		if(yes)
		{
			if(config.chosenFeature1 != "")
			{
				this.update();
				this.shake();
				config.compute = false;
			}
			else
			{
				config.compute = false;
				console.log("Vous devez selectionner une signature avant de lancer le calcul du graphe.")
				console.log("---");
			}
		}
	}.bind(this));
	
	//____________________________________________________________________________
	
	var features_gui = this.datgui.addFolder('Caracteristiques');
	
	var allFeatures = function()
	{
		this.Shape_Roundness = function()
		{
			if(config.chosenFeature1 == "")
			{
				config.chosenFeature1 = "Shape_Roundness";
				console.log("Caracteristique selectionnee : " + config.chosenFeature1);
			}
			else
			{
				config.chosenFeature2 = "Shape_Roundness";
				console.log("Caracteristiques selectionnees : " + config.chosenFeature1 + " et " + config.chosenFeature2);
			}
		}
		
		this.Global_Perimeter = function()
		{
			if(config.chosenFeature1 == "")
			{
				config.chosenFeature1 = "Global_Perimeter";
				console.log("Caracteristique selectionnee : " + config.chosenFeature1);
			}
			else
			{
				config.chosenFeature2 = "Global_Perimeter";
				console.log("Caracteristiques selectionnees : " + config.chosenFeature1 + " et " + config.chosenFeature2);
			}
		}
		
		this.Global_XGravityCenter = function()
		{
			config.chosenFeature1 = "Global_XGravityCenter";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Global_YGravityCenter = function()
		{
			config.chosenFeature1 = "Global_YGravityCenter";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Global_MinRectArea  = function()
		{
			config.chosenFeature1 = "Global_MinRectArea";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Global_Area = function()
		{
			config.chosenFeature1 = "Global_Area";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Global_AxeA = function()
		{
			config.chosenFeature1 = "Global_AxeA";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Global_XChildrenGravityCenter_ByArea = function()
		{
			config.chosenFeature1 = "Global_XChildrenGravityCenter_ByArea";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Global_YChildrenGravityCenter_ByArea = function()
		{
			config.chosenFeature1 = "Global_YChildrenGravityCenter_ByArea";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Global_XChildrenGravityCenter_ByPerimeter = function()
		{
			config.chosenFeature1 = "Global_XChildrenGravityCenter_ByPerimeter";
			console.log("Caracteristique selectionnee : "+ config.chosenFeature1);
		}
		
		this.Global_XChildrenGravityCenter_ByHu1 = function()
		{
			config.chosenFeature1 = "Global_XChildrenGravityCenter_ByHu1";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Global_YChildrenGravityCenter_ByHu1 = function()
		{
			config.chosenFeature1 = "Global_YChildrenGravityCenter_ByHu1";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Color_L1Normalized = function()
		{
			config.chosenFeature1 = "Color_L1Normalized";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Color_EntropyNormalized = function()
		{
			config.chosenFeature1 = "Color_EntropyNormalized";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Color_StandardDeviation = function()
		{
			config.chosenFeature1 = "Color_StandardDeviation";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
	
		this.Color_BackgroundL1Normalized = function()
		{
			config.chosenFeature1 = "Color_BackgroundL1Normalized";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_MERArea = function()
		{
			config.chosenFeature1 = "Shape_MERArea";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_hu1 = function()
		{
			config.chosenFeature1 = "Shape_hu1";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_hu2 = function()
		{
			config.chosenFeature1 = "Shape_hu2";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_hu3 = function()
		{
			config.chosenFeature1 = "Shape_hu3";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_hu4 = function()
		{
			config.chosenFeature1 = "Shape_hu4";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_hu5 = function()
		{
			config.chosenFeature1 = "Shape_hu5";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_hu6 = function()
		{
			config.chosenFeature1 = "Shape_hu6";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_hu7 = function()
		{
			config.chosenFeature1 = "Shape_hu7";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_Eccentricity = function()
		{
			config.chosenFeature1 = "Shape_Eccentricity";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_RectangleFitFactor = function()
		{
			config.chosenFeature1 = "Shape_RectangleFitFactor";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_RealRectangleFitFactor = function()
		{
			config.chosenFeature1 = "Shape_RealRectangleFitFactor";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_MERAspectRatio = function()
		{
			config.chosenFeature1 = "Shape_MERAspectRatio";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Shape_Elipticity = function()
		{
			config.chosenFeature1 = "Shape_Elipticity";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_ChildrenGravityCenterDistance_ByArea = function()
		{
			config.chosenFeature1 = "Children_ChildrenGravityCenterDistance_ByArea";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_ChildrenGravityCenterDistance_ByPerimeter = function()
		{
			config.chosenFeature1 = "Children_ChildrenGravityCenterDistance_ByPerimeter";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_ChildrenGravityCenterDistance_ByHu1 = function()
		{
			config.chosenFeature1 = "Children_ChildrenGravityCenterDistance_ByHu1";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_CompressedNodes = function()
		{
			config.chosenFeature1 = "Children_CompressedNodes";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_DarkNodes = function()
		{
			config.chosenFeature1 = "Children_DarkNodes";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_RelativeChildrenDistribution = function()
		{
			config.chosenFeature1 = "Children_RelativeChildrenDistribution";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_RelativeChildrenDistributionUsingAllChildrenCount = function()
		{
			config.chosenFeature1 = "Children_RelativeChildrenDistributionUsingAllChildrenCount";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_RelativeAllChildrenDistribution = function()
		{
			config.chosenFeature1 = "Children_RelativeAllChildrenDistribution";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_ChildrenEntropy_Shannon = function()
		{
			config.chosenFeature1 = "Children_ChildrenEntropy_Shannon";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_ChildrenEntropy_Quadratic = function()
		{
			config.chosenFeature1 = "Children_ChildrenEntropy_Quadratic";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_ChildrenAverageColor = function()
		{
			config.chosenFeature1 = "Children_ChildrenAverageColor";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_ChildrenAreaPercent = function()
		{
			config.chosenFeature1 = "Children_ChildrenAreaPercent";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_ChildrenCount = function()
		{
			config.chosenFeature1 = "Children_ChildrenCount";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
		
		this.Children_AllLevelChildrenCount = function()
		{
			config.chosenFeature1 = "Children_AllLevelChildrenCount";
			console.log("Caracteristique selectionnee : " + config.chosenFeature1);
		}
	}
	
	var allF = new allFeatures();
	
	features_gui.add(allF, 'Shape_Roundness');
	features_gui.add(allF, 'Global_Perimeter');
	features_gui.add(allF, 'Global_XGravityCenter');
	features_gui.add(allF, 'Global_YGravityCenter');
	features_gui.add(allF, 'Global_MinRectArea');
	features_gui.add(allF, 'Global_Area');
	features_gui.add(allF, 'Global_AxeA');
	features_gui.add(allF, 'Global_XChildrenGravityCenter_ByArea');
	features_gui.add(allF, 'Global_YChildrenGravityCenter_ByArea');
	features_gui.add(allF, 'Global_XChildrenGravityCenter_ByPerimeter');
	features_gui.add(allF, 'Global_XChildrenGravityCenter_ByHu1');
	features_gui.add(allF, 'Global_YChildrenGravityCenter_ByHu1');
	features_gui.add(allF, 'Color_L1Normalized');
	features_gui.add(allF, 'Color_EntropyNormalized');
	features_gui.add(allF, 'Color_StandardDeviation');
	features_gui.add(allF, 'Color_BackgroundL1Normalized');
	features_gui.add(allF, 'Shape_MERArea');
	features_gui.add(allF, 'Shape_hu1');
	features_gui.add(allF, 'Shape_hu2');
	features_gui.add(allF, 'Shape_hu3');
	features_gui.add(allF, 'Shape_hu4');
	features_gui.add(allF, 'Shape_hu5');
	features_gui.add(allF, 'Shape_hu6');
	features_gui.add(allF, 'Shape_hu7');
	features_gui.add(allF, 'Shape_Roundness');
	features_gui.add(allF, 'Shape_Eccentricity');
	features_gui.add(allF, 'Shape_RectangleFitFactor');
	features_gui.add(allF, 'Shape_RealRectangleFitFactor');
	features_gui.add(allF, 'Shape_MERAspectRatio');
	features_gui.add(allF, 'Shape_Elipticity');
	features_gui.add(allF, 'Children_ChildrenGravityCenterDistance_ByArea');
	features_gui.add(allF, 'Children_ChildrenGravityCenterDistance_ByPerimeter');
	features_gui.add(allF, 'Children_ChildrenGravityCenterDistance_ByHu1');
	features_gui.add(allF, 'Children_CompressedNodes');
	features_gui.add(allF, 'Children_DarkNodes');
	features_gui.add(allF, 'Children_RelativeChildrenDistribution');
	features_gui.add(allF, 'Children_RelativeChildrenDistributionUsingAllChildrenCount');
	features_gui.add(allF, 'Children_RelativeAllChildrenDistribution');
	features_gui.add(allF, 'Children_ChildrenEntropy_Shannon');
	features_gui.add(allF, 'Children_ChildrenEntropy_Quadratic');
	features_gui.add(allF, 'Children_ChildrenAverageColor');
	features_gui.add(allF, 'Children_ChildrenAreaPercent');
	features_gui.add(allF, 'Children_ChildrenCount');
	features_gui.add(allF, 'Children_AllLevelChildrenCount');
	
	//____________________________________________________________________________
	
	var linkingMethods_gui = this.datgui.addFolder("Methodes de reliement");
	
	var allLinkingMethods = function()
	{
		this.Euclidean_Distance = function()
		{
			config.linkingMethod = "Euclidean Distance";
			
			console.log("les liens seront calcules avec : la distance euclidienne");
		}
	}
	
	linkingMethods_gui.add(this.config, 'maximumNeighbours', 0, 20).onChange(function () {
		console.log(config.maximumNeighbours + " voisins les plus proches pourront etre trouves au maximum pour chaque noeud.");
	}.bind(this));
	
	var allLnkMth = new allLinkingMethods();
	linkingMethods_gui.add(allLnkMth, 'Euclidean_Distance');
	//____________________________________________________________________________
	
	link_gui.open(); // LEAVE "LINKS" FOLDER OPEN ON LOAD
	node_gui.open();
	fonctions_gui.open();
	linkingMethods_gui.open();
	features_gui.open();
	graphComputation_gui.open();
	
	this.setData(data);  // INITIALIZE THE DATA TO THE PASSED IN DATASET
};


//***************************************************
// GRAPH.PROTOTYPE
//***************************************************
//******************************************
// LOAD A PARTICULAR DATASET FROM THE STORE
//******************************************
Graph.prototype.setData = function (data) 
{
	//var data = this.store[this.config.dataset];

	this.nodes = {};
	this.links = {};
	
	var tmpNodes = {};
	var tmpLinks = {};
	
	tmpLinks = data;
	
	
	
	
	//Lecture du fichier json
	var tmpNodes = data.nodes;
	
	//*****
	/*
	tmpLinks.forEach(function(link) 
	{
		link.source = tmpNodes[link.source] || 
			(tmpNodes[link.source] = {name: link.source});		//On va cr�er un noeud par rose de mani�re unique. Si un nom apparait plusieurs fois dans la colonne source du csv il n'est compt� qu'une fois
		link.target = tmpNodes[link.target] || 
			(tmpNodes[link.target] = {name: link.target});		//De m�me pour la colonne target
		link.emd = +link.emd;									//La colonne emd est quand � elle toujours prise en compte, "+" pour la transformer en chiffre
	});
	*/
	
	
	
	//*debug--------------------------
	//console.log(d3.values(tmpNodes)[0]/*.length*/);
	//Prbl�me ici, recr�e un champ name � chaque fois qu'on rentre dans la fonction : quand on change threshold_EMD
	//console.log(tmpLinks[0]);
	//console.log(d3.values(tmpNodes)[0]);
	
	for (var i = 0 ; i < d3.values(tmpNodes).length ; i++) 
	{
			this.addNode({id : i, 
					  name : d3.values(tmpNodes)[i].ImageFileName,
					  
					  Varietes : d3.values(tmpNodes)[i].Varietes,
					  ImageFileName : d3.values(tmpNodes)[i].ImageFileName,
					  OriginalImageFileName : d3.values(tmpNodes)[i].OriginalImageFileName,
					  Global_XGravityCenter : d3.values(tmpNodes)[i].Global_XGravityCenter,
					  Global_YGravityCenter : d3.values(tmpNodes)[i].Global_YGravityCenter,
					  Global_Perimeter : d3.values(tmpNodes)[i].Global_Perimeter,
					  Global_MinRectArea : d3.values(tmpNodes)[i].Global_MinRectArea,
					  Global_Area : d3.values(tmpNodes)[i].Global_Area,
					  Global_AxeA : d3.values(tmpNodes)[i].Global_AxeA,
					  Global_XChildrenGravityCenter_ByArea : d3.values(tmpNodes)[i].Global_XChildrenGravityCenter_ByArea,
					  Global_YChildrenGravityCenter_ByArea : d3.values(tmpNodes)[i].Global_YChildrenGravityCenter_ByArea,
					  Global_XChildrenGravityCenter_ByPerimeter : d3.values(tmpNodes)[i].Global_XChildrenGravityCenter_ByPerimeter,
					  Global_XChildrenGravityCenter_ByHu1 : d3.values(tmpNodes)[i].Global_XChildrenGravityCenter_ByHu1,
					  Global_YChildrenGravityCenter_ByHu1 : d3.values(tmpNodes)[i].Global_YChildrenGravityCenter_ByHu1,
					  Color_L1Normalized : d3.values(tmpNodes)[i].Color_L1Normalized,
					  Color_EntropyNormalized : d3.values(tmpNodes)[i].Color_EntropyNormalized,
					  Color_StandardDeviation : d3.values(tmpNodes)[i].Color_StandardDeviation,
					  Color_BackgroundL1Normalized :  d3.values(tmpNodes)[i].Color_BackgroundL1Normalized,
					  Shape_MERArea : d3.values(tmpNodes)[i].Shape_MERArea,
					  Shape_hu1 : d3.values(tmpNodes)[i].Shape_hu1,
					  Shape_hu2 : d3.values(tmpNodes)[i].Shape_hu2,
					  Shape_hu3 : d3.values(tmpNodes)[i].Shape_hu3,
					  Shape_hu4 : d3.values(tmpNodes)[i].Shape_hu4,
					  Shape_hu5 : d3.values(tmpNodes)[i].Shape_hu5,
					  Shape_hu6 : d3.values(tmpNodes)[i].Shape_hu6,
					  Shape_hu7 : d3.values(tmpNodes)[i].Shape_hu7,
					  Shape_Roundness : d3.values(tmpNodes)[i].Shape_Roundness,
					  Shape_Eccentricity : d3.values(tmpNodes)[i].Shape_Eccentricity,
					  Shape_RectangleFitFactor : d3.values(tmpNodes)[i].Shape_RectangleFitFactor,
					  Shape_RealRectangleFitFactor : d3.values(tmpNodes)[i].Shape_RealRectangleFitFactor,
					  Shape_MERAspectRatio : d3.values(tmpNodes)[i].Shape_MERAspectRatio,
					  Shape_Elipticity : d3.values(tmpNodes)[i].Shape_Elipticity,
					  Children_ChildrenGravityCenterDistance_ByArea : d3.values(tmpNodes)[i].Children_ChildrenGravityCenterDistance_ByArea,
					  Children_ChildrenGravityCenterDistance_ByPerimeter : d3.values(tmpNodes)[i].Children_ChildrenGravityCenterDistance_ByPerimeter,
					  Children_ChildrenGravityCenterDistance_ByHu1 : d3.values(tmpNodes)[i].Children_ChildrenGravityCenterDistance_ByHu1,
					  Children_CompressedNodes : d3.values(tmpNodes)[i].Children_CompressedNodes,
					  Children_DarkNodes : d3.values(tmpNodes)[i].Children_DarkNodes,
					  Children_RelativeChildrenDistribution : d3.values(tmpNodes)[i].Children_RelativeChildrenDistribution,
					  Children_RelativeChildrenDistributionUsingAllChildrenCount : d3.values(tmpNodes)[i].Children_RelativeChildrenDistributionUsingAllChildrenCount,
					  Children_RelativeAllChildrenDistribution : d3.values(tmpNodes)[i].Children_RelativeAllChildrenDistribution,
					  Children_ChildrenEntropy_Shannon : d3.values(tmpNodes)[i].Children_ChildrenEntropy_Shannon,
					  Children_ChildrenEntropy_Quadratic : d3.values(tmpNodes)[i].Children_ChildrenEntropy_Quadratic,
					  Children_ChildrenAverageColor : d3.values(tmpNodes)[i].Children_ChildrenAverageColor,
					  Children_ChildrenAreaPercent : d3.values(tmpNodes)[i].Children_ChildrenAreaPercent,
					  Children_ChildrenCount : d3.values(tmpNodes)[i].Children_ChildrenCount,
					  Children_AllLevelChildrenCount : d3.values(tmpNodes)[i].Children_AllLevelChildrenCount
					  });		//**LA**//
	}
	
	
	
	
	
	//*debug--------------------------
	//this.getNodeID("Abbaye_de_Cluny (1).jpg");
	//this.getNodeID("Aspirine_Rose (1).jpg");
	//
	//console.log(tmpLinks[0].source);
	
	
	
	//*****
	/*for (var j = 0; j < tmpLinks.length; j++)
	{
		if(tmpLinks[j].emd < this.config.threshold_EMD)
		{
			this.addLink(tmpLinks[j], j);
		}
	}*/
	
	
	this.store = this.getLinks();
	this.nodesStore = this.getNodes();
};

Graph.prototype.evaluateClassification_links = function ()
{
	var nodes = this.getNodes();
	var links = this.getLinks();
	
	var totalLinks = links.length;
	var totalLinksOk = 0;
	
	console.log("nodes :");
	console.log(nodes);
	console.log("---");
	
	nodes.forEach(function(node)
	{
		links.forEach(function(link)
		{
			if(node.name == link.source.name)
			{
				if(node.features["Varietes"] == link.target.features["Varietes"])
					totalLinksOk += 1;
			}
		});
	});
	
	var totalPercentOk = totalLinksOk * 100 / totalLinks;
	
	console.log("Pourcentage de liens corrects : ");
	console.log(totalPercentOk);
	console.log("nombre de liens corrects : " + totalLinksOk + ", sur : " + totalLinks + " liens.");
}

//******************************************
// "SHAKES" GRAPH OUT TO MINIMIZE TANGLES
//******************************************
Graph.prototype.shake = function () 
{
	setTimeout(function () 
	{
		this.force.gravity(.0001);
		this.force.start();
	}.bind(this), 500)
	
	setTimeout(function () 
	{
		this.force.gravity(this.config.gravity);
		this.force.start();
	}.bind(this), 1500)
};

//******************************************
// ADD A NEW NODE - NEEDS A UNIQUE ID
//******************************************
Graph.prototype.addNode = function (obj) 
{
	if (obj.id === undefined) throw "Node ID required";
	this.nodes[obj.id] = new Node(obj);
	
	//*debug--------------------------
	//console.log(this.nodes[obj.id]);
	//console.log(this.nodes);
};

//******************************************
// RETURN AN ARRAY OF NODES FOR RENDER IN D3
//******************************************
Graph.prototype.getNodes = function () 
{
	var nodesArr = [];
	
	for (var key in this.nodes) 
	{
		nodesArr.push(this.nodes[key]);
	}
	
	//*debug--------------------------
	//console.log(nodesArr);
	
	return nodesArr;
};

Graph.prototype.getNodeID = function (nodeName)
{
	//*debug--------------------------
	/*for (var key in this.nodes) 
	{
		
		console.log(this.nodes[key]);
		
	}
	console.log("_");*/
	
	
	for (var key in this.nodes) 
	{
		if(this.nodes[key].name == nodeName)		//**LA**//
		{
			//*debug--------------------------
			//console.log("trouve : " + this.nodes[key].id);
			return this.nodes[key].id;
		}
	}
}
//******************************************
// REMOVE A NODE AND ALL ITS LINKS
//******************************************
Graph.prototype.removeNode = function (nodeID) 
{
	var node = this.nodes[nodeID], links = this.links;
	if (node) 
	{
		delete this.nodes[nodeID];

		for (var l in links) 
		{
			if (links[l].source === node || links[l].target === node) 
			{
				delete links[l];
			}
		}
	} 
	else 
	{
		throw "Node not found";
	}
};

//******************************************
// ADD A LINK BY PASSING IN NODE IDs
//******************************************
Graph.prototype.addLink_deprecated = function(newLink, newLinkID)
{
	var sourceID = -1, targetID = -1;

	sourceID = this.getNodeID(newLink.source.name);
	targetID = this.getNodeID(newLink.target.name);
	
	this.links[newLinkID] = new Link({id: newLinkID, 
									  source_targetID: sourceID + '_' + targetID, 
									  source: this.nodes[sourceID], 
									  target: this.nodes[targetID], 
									  emd: newLink.emd});
	
	//*debug--------------------------
	//console.log(this.links[newLinkID]);
	//console.log(this.links);
};

Graph.prototype.addLink = function(sourceNode, targetNode, linkId, value)
{
	var sourceID = sourceNode.id, targetID = targetNode.id;
	
	this.links[linkId] = new Link({ id : linkId,
									source_targetID : sourceID + '_' + targetID,
									source : sourceNode,
									target : targetNode,
									emd : undefined,
									value : value
	});
}

//Calcul un nombre finis de liens utilisant la m�thode de la distance euclidienne pour connaitre la longueur du lien entre deux noeuds.
//La signature this.graph.chosenFeature1 est prise en compte.
Graph.prototype.computeLinks_UsingEuclideanDistance = function(nodes, featureId)
{
	console.log("Calcul des liens selon la methode de la distance euclidienne...");
	
	this.links = {};
	var linkId = 0;
	
	var euclideanDistance = -1;
	var min = 5000;
	var minPos = -1;
	
	var numberOfminimums = this.config.maximumNeighbours;
	var minEuclideanDistance = [];		for(var i = 0 ; i < numberOfminimums ; i++) { minEuclideanDistance[i] = -1; }
	var minPositions = [];				for(var i = 0 ; i < numberOfminimums ; i++) { minPositions[i] = -1; }
	
	for(var i = 0 ; i < nodes.length ; i++)
	{
		console.log("Traitement du noeud numero " + i + ": " + nodes[i].name);
		
		for(var j = 0 ; j < nodes.length; j++)
		{
			var x1 = 0, x2 = 0;
			
			if(featureId == 1)
			{
				var x1 = nodes[i].features[this.config.chosenFeature1];
				var x2 = nodes[j].features[this.config.chosenFeature1];
			}
			else if(featureId == 2)
			{
				var x1 = nodes[i].features[this.config.chosenFeature2];
				var x2 = nodes[j].features[this.config.chosenFeature2];
			}
			
			euclideanDistance = this.EuclideanDistance(x1, x2);
			
			if(i != j)	//Ne pas prendre une signature compar�e � elle m�me
			{
				if(euclideanDistance < min)
				{
					//Conserve la signature la plus proche en terme de distance euclidienne 
					min = euclideanDistance;
					minPos = j;
					
					//On garde en m�moire un nombre fini de minimums pour cr�er plusieurs liens
					for(var x = numberOfminimums - 1 ; x > 0 ; x--)
					{
						minEuclideanDistance[x] = minEuclideanDistance[x - 1];
						minPositions[x] = minPositions[x - 1];
					}
					minEuclideanDistance[0] = min;
					minPositions[0] = minPos;
				}
			}
		}
		
		for(var x = 0 ; x < numberOfminimums ; x++)
		{
			if(minEuclideanDistance[x] != -1)
			{
				var currentMinPos = minPositions[x];
				this.addLink(nodes[i], nodes[currentMinPos], linkId, minEuclideanDistance[x] * 10);
				linkId++;
			}
		}
		
		//R�initialisation des variables pour le prochain noeud
		min = 5000;
		minPos = -1;
		for(var t = 0 ; t < numberOfminimums ; t++) { minEuclideanDistance[t] = -1; }
		for(var t = 0 ; t < numberOfminimums ; t++) { minPositions[t] = -1; }
	}
	
	return this.getLinks();
}

Graph.prototype.EuclideanDistance = function(x1, x2)
{
	return Math.sqrt( (x2 - x1) * (x2 - x1) );
}

//******************************************
// RETURN AN ARRAY OF LINKS FOR RENDER IN D3
//******************************************
Graph.prototype.getLinks = function () 
{
	var linksArr = [];
	
	for (var key in this.links) 
	{
		linksArr.push(this.links[key]);
	}
	
	return linksArr;
};

//******************************************
// REMOVE A PARTICULAR LINK
//******************************************
Graph.prototype.removeLink = function(begID, endID)
{
	var s_tID = begID + '_' + endID;
	var ok = false;
	
	for (var key in this.links) 
	{
		if(this.links[key].source_targetID == s_tID)
		{
			delete this.links[key];
			ok = true;
		}
	}
	
	if (ok == false)
		throw "Link not found";
};

Graph.prototype.removeLink = function(threshEMD)
{
	/*d3.selectAll(".link").each(function(d)
	{
		//On supprime les images une par une
		d3.select(this).remove();
	});*/
	
	//this.svg.selectAll("*").remove();
	
	//Suppression de tous les liens
	for (var key in this.links) 
	{
		delete this.links[key];
	}

	//Cr�ation d'un identifiant unique pour les nouveaux liens
	var id = 0;
	
	//On regarde dans this.store (qui contient tous les liens du fichier .csv)
	//quels liens v�rifient la condition emd < threshold. On les ajoute au graphe
	for (var key in this.store)
	{
		if(this.store[key].emd < threshEMD)
		{
			this.addLink_deprecated(this.store[key], id);
			id++;
		}
	}
	
	/*d3.selectAll("circle").each(function(d)
	{
		//On supprime les images une par une
		d3.select(this).remove();
	});
	
	d3.selectAll(".node")
	  .append("circle")
	  .attr("r", this.config.nodeRadius)
	  .style("fill", "url(#nodeGradient)");
	
	d3.selectAll(".node").each(function (d)
	{
		this.parentNode.appendChild(this);
	});*/
}

//*********************************************
// RESIZE SVG AND FORCE ON BROWSER RESIZE
//*********************************************
Graph.prototype.onResize = function(){
  var width = window.innerWidth;
  var height = window.innerHeight;

  this.svg
    .attr("width", width)
    .attr("height", height);

  this.force.size([width, height]);
  this.force.start();
};

//**************************************************************
// MEAN, STANDARD DEVIATION AND STANDARDISED NORMAL DISTRIBUTION
//**************************************************************
Graph.prototype.computeMeanAndSTD = function(nodes, featureId)
{
	var f = "";
	
	if(featureId == 1)
		f = this.config.chosenFeature1;
	else if(featureId == 2)
		f = this.config.chosenFeature2;
	console.log("Calcul de la moyenne et de l'ecart type pour la signature : " + f + "...");
	
	var mean = 0;
	var std = 0;
	
	//-1 car le dernier noeud contient des valeurs non d�finis. Pourquoi ?
	for(i = 0 ; i < nodes.length ; i++)
	{
		mean += +nodes[i].features[f];			// !!!nodes[i].features[f] est un chaine de caract�res !
	}
	mean /= nodes.length;
	
	
	for( i = 0 ; i < nodes.length ; i++)
	{
		std += ((+nodes[i].features[f]) - mean) * ((+nodes[i].features[f]) - mean);
	}
	std /= nodes.length;
	std = Math.sqrt(std);

	if(featureId == 1)
	{
		this.config.chosenFeature1_Mean = mean;
		this.config.chosenFeature1_std = std;
	}
	else if(featureId == 2)
	{
		this.config.chosenFeature2_Mean = mean;
		this.config.chosenFeature2_std = std;
	}
	
	console.log("moyenne " + f + ": ");
	console.log(mean);
	console.log("ecart type " + f + ":");
	console.log(std);
}

//Standardised normal distribution (variable centr�e r�duite)
Graph.prototype.computeSND = function(nodes, featureId)
{
	var f = "";
	var m = 0;
	var std = 0;
	
	if(featureId == 1)
	{
		f = this.config.chosenFeature1;
		m = this.config.chosenFeature1_Mean;
		std = this.config.chosenFeature1_std;
	}
	else if(featureId == 2)
	{
		f = this.config.chosenFeature2;
		m = this.config.chosenFeature2_Mean;
		std = this.config.chosenFeature2_std;
	}
	
	// = V - mean / std
	for(i = 0 ; i < nodes.length ; i++)
	{
		nodes[i].features[f] = (+nodes[i].features[f] - m) / std;
	}
}
//******************************************
// UPDATE WHEN NODES AND LINKS HAVE CHANGED
//******************************************
Graph.prototype.update = function()
{
	var nodes = this.getNodes();
	
	var linksFeature1 = [];
	var linksFeature2 = [];
	
	//var links = this.getLinks();
	
	this.computeMeanAndSTD(nodes, 1);
	this.computeSND(nodes, 1);
	
	this.computeMeanAndSTD(nodes, 2);
	this.computeSND(nodes, 2);
	
	console.log("Fin du calcul des valeurs centrees reduites pour la signature : " + this.config.chosenFeature1 + " et " + this.config.chosenFeature2 + ".");
	console.log("---");
	
	if(this.config.linkingMethod == "Euclidean Distance")
	{
		linksFeature1 = this.computeLinks_UsingEuclideanDistance(nodes, 1);
		linksFeature2 = this.computeLinks_UsingEuclideanDistance(nodes, 2);
		console.log("Calcul des distances euclidiennes terminees")
		console.log("---");
		
		this.evaluateClassification_links();
	}
	
	console.log("linksFeature1 :");
	console.log(linksFeature1);
	console.log("linksFeature2 :")
	console.log(linksFeature2);
	
	this.links = {};
	var linkId = 0;
	
	linksFeature1.forEach(function(lf1)					//Pour tous les liens
	{	
		linksFeature2.forEach(function(lf2)				//""
		{
			if(lf2.source.name == lf1.source.name)		//Si les deux liens ont un noeud source identique
			{
				if(lf2.target.features["Varietes"] == lf1.target.features["Varietes"])	//Si les deux liens ont un noeud cible de la m�me variete
				{
					//On cr�e un lien avec une valeur arbitraire
					this.addLink(lf2.source, lf2.target, linkId++, 10);
				}
			}
		}, this/*permet d'avoir acc�s � this dans un forEach*/);
	}, this);
	
	//*debug--------------------------
	//console.log(this.nodes[497].weight);
	//console.log(this.getNodeID("RimosaCI (4).jpg"));
	//console.log('__________________________________');
	//console.log(nodes);
	//console.log('__________________________________');
	//console.log(links);
	
	
	var links = this.getLinks();
	console.log("Liens conserves :");
	console.log(this.getLinks());
	
	var subNodesSelection = [];
	
	//nodes.forEach()
	
	console.log("subNodesSelection :");
	console.log(subNodesSelection);
	
	this.force
		.nodes(nodes)
		.links(links)
		.start();
		
	/*var nodesWithoutLinks = this.force.nodes().filter(function(d, i)
	{
		return d.weight == 0;
	});
	//parcourir tous les noeuds et appliquer le style ?
	console.log(nodesWithoutLinks);
	
	nodesWithoutLinks.style("opacity", 0);*/
	
	var link = graph.svg.selectAll(".link")
					.data(links, function (d) { return d.id; });

	link.enter()
		.append("line")
		.attr("class", "link")
		.style("stroke-width", "2px");

	link.exit()
		.style("stroke", "red")
		.transition().duration(800)
		.style("opacity", 0)
		.remove();

	var node = graph.svg.selectAll(".node")
					.data(nodes, function (d) { return d.id; });
	
	node.enter()
		.append("g")					//ajout de groupes qui contiendront cercles et labels
		.attr("class", "node")
		.call(this.force.drag)
		.on('dblclick', function (d) 
		{
			this.removeNode(d.id);
			this.update();
		}.bind(this));
		
	node.on('click', connectedNodes);
	//node.on('click', function(d){ console.log(d.id); });
		
	node.append("circle")
		.attr("r", this.config.nodeRadius)
		.style("fill", "url(#nodeGradient)");
		

	node.append("text")
		.attr("x", 12)
		.attr("dy", ".35em")
		.text(function(d) { return d.name; } );		
		
		
	node.exit()
		.transition()
		.duration(1000)
		.attr("cx", 2000)
		.attr("cy", 2000)
		.remove();
	
	this.force.on('tick', function () 
	{
		//Pour faire bouger les liens
		link
			.attr("x1", function (d) { return d.source.x; })
			.attr("y1", function (d) { return d.source.y; })
			.attr("x2", function (d) { return d.target.x; })
			.attr("y2", function (d) { return d.target.y; });
		
		//Pour faire bouger les	groupes qui contiennent les noeuds et les labels	
		node
			.attr("transform", function(d) { return 'translate(' + [d.x, d.y ] + ')'; });
		node.each(collide(0.2));
	});
	
	//******************************************
	// HIGHLIGHT NODE WHEN CLICKED
	//******************************************
	//Toggle stores whether the highlighting is on
	var toggle = 0;
	//Create an array logging what is connected to what
	var linkedByIndex = {};
	for (i = 0; i < nodes.length; i++) {
		linkedByIndex[i + "," + i] = 1;		//Matrice de connexit�
	};
	links.forEach(function (d) {
		linkedByIndex[d.source.index + "," + d.target.index] = 1;
	});
	
	//This function looks up whether a pair are neighbours
	function neighboring(a, b) 
	{
		return linkedByIndex[a.index + "," + b.index];
	}
	
	function connectedNodes() 
	{
		if (toggle == 0) 
		{
			//Reduce the opacity of all but the neighbouring nodes
			d = d3.select(this).node().__data__;
			node.style("opacity", function (o) {
				return neighboring(d, o) | neighboring(o, d) ? 1 : 0.1;
			});
			link.style("opacity", function (o) {
				return d.index==o.source.index | d.index==o.target.index ? 1 : 0.1;
			});
			//Reduce the op
			toggle = 1;
		} 
		else 
		{
			//Put them back to opacity=1
			node.style("opacity", 1);
			link.style("opacity", 1);
			toggle = 0;
		}
	}
	
	//******************************************
	// NODE SEARCH WITH JQUERY - AUTOCOMPLETION
	//******************************************
	var optArray = [];			//Tableau de string qui ne contiendra que les noms de chaque noeud
	var objects = nodes;		//On met dans object tous les noeuds et leur propri�t�
	for(var i = 0 ; i < nodes.length ; i++)
	{
		optArray.push(objects[i].name);		//**LA**//
		
	}
	optArray.sort();
	
	//JQery permet l'autocompl�tion lors de la recherche parmi le nom des noeuds
	$(function() 
	{
		$("#search").autocomplete({
			source : optArray
		});
	});
	
	//******************************************
	// PREVENT NODES COLLISIONS
	//******************************************
	var padding = 1, // separation between circles
    radius=/*this.config.nodeRadius*/30;
	function collide(alpha) 
	{
	  var quadtree = d3.geom.quadtree(nodes);
	  return function(d) {
		var rb = 2*radius + padding,
			nx1 = d.x - rb,
			nx2 = d.x + rb,
			ny1 = d.y - rb,
			ny2 = d.y + rb;
		quadtree.visit(function(quad, x1, y1, x2, y2) {
		  if (quad.point && (quad.point !== d)) {
			var x = d.x - quad.point.x,
				y = d.y - quad.point.y,
				l = Math.sqrt(x * x + y * y);
			  if (l < rb) {
			  l = (l - rb) / l * alpha;
			  d.x -= x *= l;
			  d.y -= y *= l;
			  quad.point.x += x;
			  quad.point.y += y;
			}
		  }
		  return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
		});
	  };
	}

}

//******************************************
// NODE SEARCH
//******************************************
function searchNode()
{
	//find the node
	var selectedVal = document.getElementById('search').value;
	//var node = svg.selectAll(".node");
	var node = d3.selectAll(".node");
	
	if (selectedVal == "none") 
	{
		node.style("stroke", "white").style("stroke-width", "1");
	} 
	else 
	{
		//La fonction filter enl�ve toutes les nodes qui v�rifie la condition
		//Ici toute celles qui n'ont pas le nom exacte ne feront pas parti de la s�lection
		var selected = node.filter(function (d, i) 
		{
			return d.name != selectedVal;		//**LA**//
		});
		selected.style("opacity", "0");
		var link = d3.selectAll(".link")
		link.style("opacity", "0");
		d3.selectAll(".node, .link").transition()
			.duration(5000)
			.style("opacity", 1);
	}
}

//Utiliser dans searchAllNodes pour trouver toutes les occurences : 'noeuds commen�ant par...'
String.prototype.startsWith = function(str) 
{
	return (this.match("^"+str)==str);
}

//Pour chercher tous les noeuds d'une m�me esp�ce. La fonction utilise le nom de l'image,
//le tronque pour enlever le chiffre entre parenth�ses et l'extension de fichier image, puis cherche 
//tous les noeuds commen�ant par ce nom
function searchAllNodes()
{
	//find the node
	var selectedVal = document.getElementById('search').value;
	var node = d3.selectAll(".node");
	
	var trunc = selectedVal;
	trunc = trunc.substring(0, selectedVal.length - 8);		//enl�ve ' (x).jpg'
	
	if (selectedVal == "none") 
	{
		node.style("stroke", "white").style("stroke-width", "1");
	} 
	else 
	{
		//La fonction filter enl�ve toutes les nodes qui v�rifie la condition
		//Ici toute celles qui n'ont pas le nom exacte ne feront pas parti de la s�lection
		var selected = node.filter(function (d, i) 
		{
			if(d.name.startsWith(trunc))		//**LA**//
			{
				d.sameSpecie = 1;
			}
			return d.sameSpecie != 1;
		});
		selected.style("opacity", "0");
		var link = d3.selectAll(".link")
		link.style("opacity", "0");
		d3.selectAll(".node, .link").transition()
			.duration(5000)
			.style("opacity", 1);
			
		d3.selectAll(".node").each(function(d)
		{
			d.sameSpecie = 0;
		});
	}
}

















