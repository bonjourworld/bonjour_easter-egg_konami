// JS Easter Egg V 1.0
// James Roussel
// For Sheridan College
// 2015
// Konami Code

console.log("Hello World");

window.onload=function(){

	document.addEventListener('keydown', respondToKeydown);

}

window.onkeydown = function(e) {
  console.log("hi");	
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
};

var textInput=[];

// up 38, down 40, left 37, right 39, a 65, b 66, space 32, enter 13

// easter egg Value to verify=[38,38,40,40,37,39,37,39,66,65,32,13];

function respondToKeydown(ev){
	var key=ev.keyCode;
	console.log(key);

	textInput.push(parseInt(key));

	if(textInput[0]!=null){
			for(var i=0;i<textInput.length;i++){
				if(textInput[i]==38){
					var j=i+1;
					if(textInput[j]!=null && textInput[j]==38){
						var k=j+1;
						if(textInput[k]!=null && textInput[k]==40){
							var l=k+1;
							if(textInput[l]!=null && textInput[l]==40){
								var m=l+1;
								if(textInput[m]!=null && textInput[m]==37){
									var n=m+1;
									if(textInput[n]!=null && textInput[n]==39){
										var o=n+1;
										if(textInput[o]!=null && textInput[o]==37){
											var p=o+1;
											if(textInput[p]!=null && textInput[p]==39){
												var q=p+1;
												if(textInput[q]!=null && textInput[q]==66){
													var r=q+1;
													if(textInput[r]!=null && textInput[r]==65){
														var s=r+1;
														if(textInput[s]!=null && textInput[s]==32){
															var t=s+1;
															if(textInput[t]!=null && textInput[t]==13){
																
																console.log("found easter-egg!");
																// PLEASE PUT IN HERE THE ACTION FOR WHEN THE EASTER EGG CODE IS TYPED!
																// YOU ARE WELCOME TO TRY http://www.roussel.io/easter to see my example :)

															}else{
																if(textInput[t]==38){
																	textInput.pop();
																	continue;
																}else{
																	continue;
																}
															}
														}else{
															continue;
														}
													}else{
														continue;
													}
												}else{
													continue;
												}
											}else{
												continue;
											}
										}else{
											continue;
										}
									}else{
										continue;
									}
								}else{
									continue;
								}	
							}else{
								continue;
							}
						}else{
							continue;
						}
					}else{
						continue;
					}
				}else{
					continue;
				}
			}
		}else{
			console.log("please input more characters");
	}
	

	console.log(textInput); 
}