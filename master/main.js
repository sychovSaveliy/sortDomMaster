window.onload = function(){
   
    function DomMan(){
    }

    DomMan.prototype.renderTable = function(toElement, tableList, nameTable) {
        if(document.querySelector("#" + nameTable)) {
            document.querySelector("#" + nameTable).remove();
        }

        var table = document.createElement("table");
        table.id = nameTable;

        toElement.appendChild(table);

        this.renderTh(table, tableList[0]);
        this.renderTd(table, tableList);
    }


     DomMan.prototype.renderTh = function(toTable, tableItem) {
         var tr = document.createElement("tr");
         for(var item in tableItem) {
            var th = document.createElement("th");
            th.innerHTML = item;
            tr.appendChild(th);
         }
         toTable.appendChild(tr);
     }


     DomMan.prototype.renderTd = function(toTable, tableList) {
        
        for(var i = 0; i < tableList.length; i++) {
            var tr = document.createElement("tr");
            var tableItem = tableList[i];
            for(var item in tableItem) {
                var td = document.createElement("td");
                td.innerHTML = tableItem[item];

                tr.appendChild(td);
            }

            toTable.appendChild(tr);
        }
     }


     DomMan.prototype.checkSate = function() {
         this.renderTable(container, table, "table");
     }

     DomMan.prototype.SortByField = function(sortObject, field="num") {
        bubbleSort(sortObject, field, false);
        this.checkSate("table");
     }


     function bubbleSort(arrObjs, field, param = true) {  
        var length = arrObjs.length;
        for (var i = 0; i < length-2; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
               
                if ((arrObjs[j][field] > arrObjs[j + 1][field] && param == true) || 
                    (arrObjs[j][field] < arrObjs[j + 1][field] && param == false)) {
                    var tmp = arrObjs[j];
                    arrObjs[j] = arrObjs[j + 1];
                    arrObjs[j + 1] = tmp;
                }
            }
        }
    }



    var  DomEx = new DomMan();


    var table = JSON.parse(IconJson);
    var container = document.querySelector(".container");

  
    
  
    setTimeout(function(){
       DomEx.SortByField(table, "num");
    }, 1000);

    
    DomEx.renderTable(container, table, "table");
}