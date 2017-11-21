(function(){
    const table = document.querySelector('#table');
    const ths = document.querySelectorAll("thead th");
    const trs = document.querySelectorAll("tbody tr");

    // change ths pseudoarray to array:
    function makeArray(pseudoArray){
        let array = [];
        for(let i=0, max=pseudoArray.length; i<max ;i++){
            array.push(pseudoArray[i]);
        }
        return array;
    }
    

    // sorting core:
    function sort(e){
        //changing pseudoArrays to arrays
        let thsArray = makeArray(ths);
        let trsArray = makeArray(trs);

        //checking what was clicked:
        let target = e.target;
        let index = thsArray.indexOf(target);
        console.log(trsArray);

        // creating document fragment for page:
        let df = document.createDocumentFragment();

        //order ascending / descending
        let order = (target.className === "" || target.className === "descending")? "ascending" : "descending";

        //sorting
        trsArray.sort((a, b)=>{
            let tdA = a.children[index].textContent;
            let tdB = b.children[index].textContent;
            if (tdA < tdB) {
                return -1;
            } else if (tdA > tdB) {
                return 1;
            } else {
                return 0;
            };
          
        });
        
        // pushing to document fragment
        trsArray.forEach(tr=>{
            df.appendChild(tr);
        });
        
        table.querySelector("tbody").appendChild(df);
        trsArray;
    };



    // just onclick adding:
    ths.forEach(th=>th.onclick = sort);
    
    
}());