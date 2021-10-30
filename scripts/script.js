//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    //------------------------------------------------------

	generujProjekty(projekty,projekty3);
  //  generujAkcjePrzyciskow();

    // Get the modal
    var modal = document.getElementById("myModal");

//  https://softauthor.com/javascript-for-loop-click-event-issues-solutions/
	for(var i in projekty3) {
		let ww=i*1+1;
		var button = document.getElementById("button_"+ww);
		//button.innerText = i;
		(function(index){
		  button.addEventListener("click", function() {


			displayAchievments2(projekty3[index]);
		  })
		})(i)
	  
	  
	  }
 
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

   

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        restartContainer();
        modal.style.display = "none";

    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            restartContainer();
            modal.style.display = "none";
            //restartContainer();
        }
    }


	//------------------------------------------------------
	var buttondetails = document.getElementById("detailjetbrains");
	 buttondetails.addEventListener("click", function() {
		// alert("klik");
		
		 var modal = document.getElementById("myModal");
			modal.style.display = "block";
		
		const e1 = document.createElement('img');
		let source = "css/images2/jetbrains1.png";
		
		e1.setAttribute("src",source);
		
		const e2 = document.createElement('div');
		e2.className="d-flex flex-row justify-content-center";
		
		
		var el2 = document.getElementById('modal-body-real');
		e2.append(e1);
		el2.append(e2);
		
		 
	 });
	//------------------------------------------------------
	var buttondetails = document.getElementById("detailharvard");
	 buttondetails.addEventListener("click", function() {
		// alert("klik");
		
		 var modal = document.getElementById("myModal");
			modal.style.display = "block";
		
		const e1 = document.createElement('a');
			e1.innerHTML="Link to my certificate !";
			e1.setAttribute("href","https://certificates.cs50.io/38cd877c-3cf5-4c8d-b82f-7bda84181ed2.pdf?size=A4");

		const e1b = document.createElement('p');

		const e1a = document.createElement('img');
			let source = "css/images2/CS50W.png";
			
			e1a.setAttribute("src",source);	
			e1a.setAttribute("style","max-width:700px;");	
		
		var el2 = document.getElementById('modal-body-real');
		el2.append(e1);
		el2.append(e1b);
		el2.append(e1a);
		
		 
	 });	//------------------------------------------------------
    //console.log("javascript!");

    //------------------------------------------------------
});
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
function displayAchievments(a,b,b2,c){



    const e1 = document.createElement('div');
    e1.id="post_content";
    e1.className = "container border justify-content-between";
    e1.setAttribute("style","background-color: white;");

    const e_a = document.createElement('p');
    e_a.innerHTML=a;
    const e_b = document.createElement('p');
    e_b.innerHTML=b;
    const e_b2 = document.createElement('a');
    e_b2.innerHTML=b2;
    e_b2.setAttribute("href",b2);
    const e_c = document.createElement('p');
    e_c.innerHTML=c;

    e1.append(e_a);
    e1.append(e_b);
    e1.append(e_b2);
    e1.append(e_c);
    var el2 = document.getElementById('modal-body-real');
    el2.append(e1);


}
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
function displayAchievments2(w){

    var modal = document.getElementById("myModal");
    modal.style.display = "block";


    console.log("jestem "+w.name);
   var  html_content = w.content;
   var p_href =  w.lacze;
   var p_href2 =  w.obraz1;
    var p_href3 =  w.opis2;
    var p_video =  w.video1;
   
    const e1 = document.createElement('div');
    e1.id="post_content";
    e1.className = "container border justify-content-between";
    e1.setAttribute("style","background-color: white;");

		for(var w in html_content) {
			
				
				e1.innerHTML += html_content[w];
		}		
    
	
	//console.log("hrefffffffffff="+p_href[0]);
	//--------------------------
	if(p_href != null && typeof(p_href[0]) != "undefined" ){
		
		const e_b2 = document.createElement('a');
		e_b2.innerHTML="Github source code";
		e_b2.setAttribute("href",p_href);
		
		e1.append(e_b2);
		
			const pp = document.createElement('p');
			e1.append(pp);
	}
	//--------------------------
	if(p_video != null && typeof(p_video[0]) != "undefined" ){
		
		const e_b2 = document.createElement('a');
		e_b2.innerHTML="Youtube presentation";
		e_b2.setAttribute("href",p_video);
		
		e1.append(e_b2);
		
			const pp = document.createElement('p');
			e1.append(pp);
	}
	//--------------------------
	if(p_href3 != null && typeof(p_href3[0]) != "undefined" ){
		
		const e_b2 = document.createElement('a');
		e_b2.innerHTML="Additional detailed specification";
		e_b2.setAttribute("href",p_href3);
		
		e1.append(e_b2);
		
			const pp = document.createElement('p');
			e1.append(pp);
	}
	//--------------------------
	
	
	if(p_href2 != null ){
			const img1 = document.createElement('img');
			//img1.innerHTML="Github link";
			img1.className ="portfelObraz";
			img1.setAttribute("src",p_href2);
			e1.append(img1);
		
	}
	
	
	
	
	
    var el2 = document.getElementById('modal-body-real');
    el2.append(e1);
	
    
	


}
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
function restartContainer(){
    var el = document.getElementById('modal-body-real');
    if(el === null){
        console.log("nie usuniete");
    }

    else{
        el.remove(); // Removes the div with the 'post_container' id
        console.log("usuniete");
    }

    const e0 = document.createElement('div');
    e0.id="modal-body-real";

    var el2 = document.getElementById('modal-body');
    el2.append(e0);
    // document.querySelector('#posts-view').style.display = 'block';




}
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
function generujProjekty(projekty,projekty3){
	
	
	 var el2 = document.getElementById('wykaz');
 
     console.log(projekty3);
	
	var i = 1;
	for(var w in projekty3) {
				
		const e1 = document.createElement('div');
		 e1.className = "project_item";
		 
		 const e14 = document.createElement('p');
		 
		 //switch(projektyPortal[w]){
            switch(projekty3[w].portal){    
			case "Harvard":
				  e1.setAttribute("style","background-color: #ffe6e6;");
				  e14.innerHTML ="made with "+projekty3[w].portal;

				break;
			case "Harvard but Java":
			case "Udemy and java":
				  e1.setAttribute("style","background-color: #f59842;");
				 	e14.innerHTML ="made with "+projekty3[w].portal;

				break;	
			case "Harvard - Final Project":
				  e1.setAttribute("style","background-color: #f25a2c;");
				 	e14.innerHTML ="made with "+projekty3[w].portal;

				break;		
			case "MSOffice":
					 e1.setAttribute("style","background-color: lightgreen;");
					  e14.innerHTML ="made with VBA in "+projekty3[w].portal;
				break;
				
			case "Android":
					 e1.setAttribute("style","background-color: #ffff99;");
					  e14.innerHTML ="made with Udemy - Java and "+projekty3[w].portal;
				break;	
				
			case "JS and JetBrains" :
			case "JavaScript":	
					e1.setAttribute("style","background-color: #dda1ed;");
					 e14.innerHTML ="made with "+projekty3[w].portal;
			   break;	

			case "Java":
				
				 e14.innerHTML ="made "+projekty3[w].portal;
		   break;   

			default:
				e14.innerHTML ="made with Java and "+projekty3[w].portal;			
				break;
			 
		 }
		 
		const e11 = document.createElement('p');
		 e11.className = "project_name";
		 e11.innerHTML = projekty3[w].name;
		 const e12 = document.createElement('button');
		 e12.className = "open-window";
		 e12.id="button_"+ i;
		 e12.innerHTML="Details";
		 
		
		
	
	
		 
		const e13 = document.createElement('hr');
			
		
		
		e1.append(e11);
		e1.append(e12);
		e1.append(e13);
		e1.append(e14);
		el2.append(e1);
		
		i++;
		}		
	
}
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
