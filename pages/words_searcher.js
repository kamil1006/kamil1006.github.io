var tablica =[];
document.addEventListener('DOMContentLoaded', function() {
 //------------------------------------------------------
	document.querySelector('#form1').onsubmit = function() {
		
		let inputField = document.querySelector('#input1');
	
		if(inputField.value.length == 0)
			alert("have to input something.");
		else{
			//alert("OK.");
			let tekst = inputField.value.trim();
				tekst = tekst.split(" ").join("%20")
				
				getValue(tekst);
				//console.log(tekst);
		}
		
		
	return false;
	};

  });
 //------------------------------------------------------
  function getValue(inputText){
	  //console.log(inputText);
	  
	  let language = document.querySelector('#select1').value;
	  
	  let url = "https://api.dictionaryapi.dev/api/v2/entries/"+language+"/"+inputText;
	   
	fetch(url)
		.then(response => response.json())
		.then(data => {
			//console.log(data);
			
			let resultTable = document.querySelector('#results_table');
			//
			let obj1 = Object.entries(data[0]);
			//console.log(data[0]);
			console.log(obj1);
			
			var temp = "";
			for( item1 in obj1){
				
				var first = item1;
				var second = obj1[item1];
				console.log("---------------");
				//console.log(first);
				console.log(second);
				
				let ifArray = Array.isArray(second);
				
				if(ifArray){
					
					switch(second[0]){
								case "word":
										//word.innerHTML =second[1];
										//row.append(word);
										temp = second[1];
									break;
							
									case "meanings":
											let ifArray2 = Array.isArray(second[1]);
											if(ifArray2){
												console.log("drukuj"+second[1]);
												console.log(second[1]);
												var tbl2 = second[1];
												console.log("---------------");
												console.log(tbl2[0]);
												console.log("---------------");
												console.log(tbl2[1]);
												console.log("---------------");
												console.log(Array.isArray(tbl2[0]));
												console.log(Array.isArray(tbl2[1]));
												console.log("---------------");
												
												var item3 = tbl2[0];
												console.log(item3);
												console.log(item3.definitions);
												
												console.log("---------------");
												var jon = JSON.stringify(item3);
												console.log(jon);
												console.log("---------------");
												
												let arrayDefinitions = item3.definitions;
											for(def in arrayDefinitions){
												console.log(arrayDefinitions[def].definition);
												console.log("---------------");
												
												var row = document.createElement('tr');
												var word = document.createElement('td');
												var wordMeaning = document.createElement('td');
												word.innerHTML =temp;
												row.append(word);
												wordMeaning.innerHTML =arrayDefinitions[def].definition;
												row.append(wordMeaning);
												resultTable.append(row);
											}
												
											}
											else{
												var row = document.createElement('tr');
												var word = document.createElement('td');
												var wordMeaning = document.createElement('td');
												word.innerHTML =temp;
												row.append(word);
												wordMeaning.innerHTML =second[1];
												row.append(wordMeaning);
												resultTable.append(row);
											}
										
									break;
							
								}


					
					
					
					
				}
				
				
			}


		});
  }
 //------------------------------------------------------
 function printRow(wciecie,klucz,wartosc){
		let resultField = document.querySelector('#results');
		var el4 = document.createElement('p');
		el4.className = "";
		let ifArray = Array.isArray(wartosc);
	
	if(!ifArray){
		el4.innerHTML =wciecie+klucz + " = " + wartosc;
		resultField.appendChild(el4);
	}
	else{
		console.log("tablica");
		wciecie=wciecie+" ";
		for(el in wartosc){
			printRow(wciecie,klucz,el);
		}
	}
	 
	 
 }
 //------------------------------------------------------
 function printRow2(obj){
	 
	 let resultField = document.querySelector('#results');
		var el4 = document.createElement('p');
		
	  for (var o in obj) {
		    if (typeof obj[o] == "object") {
            addAttributeInput(obj[o]);
        } else {
           // $("input[name='" + o + "']").val(obj[o]);
			//el4.innerHTML = obj[o];
			//resultField.appendChild(el4);
        }
		  
	  }
	 
 }
 
  //------------------------------------------------------
  
  
  /*
  
  
			for(el in data){
				//console.log("i="+i++);
				//console.log("el="+el);
				let parent = data[el];
				//console.log("parent="+parent);
				var result = Object.entries(parent);
				console.log(result);
					for (el2 in result){
						//console.log("el2="+el2);
						let result2 = result[el2];
						console.log(result2);
						//console.log("el2value="+result[el2]);
						let y = 0;
						let y_item = result2[y];
						let y_item2 = result2[y+1];
						var el4 = document.createElement('p');
						el4.className = "";
						
						let ifArray = Array.isArray(y_item2);
						//printRow(" ",y_item,y_item2);
						printRow2(el);
						
						switch(y_item){
									case "word":
										console.log("word = " + y_item2);
										el4.innerHTML ="word = " + y_item2;
									break;
									case "phonetic":
										console.log("phonetic = " + y_item2);
										el4.innerHTML ="phonetic = " + y_item2;
									break;
									case "phonetics":
										console.log("phonetics = " + y_item2);
										el4.innerHTML ="phonetics = " + y_item2;
									break;
									case "meanings":
										console.log("meanings = " + y_item2);
										el4.innerHTML ="meanings = " + y_item2;
									break;
							
								}
						resultField.appendChild(el4);
						
						
						
						
						
						
						
						
					}
				
					
				
			}
  
  */