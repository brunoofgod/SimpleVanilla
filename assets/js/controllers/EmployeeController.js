class EmployeeController{

    constructor(){
        this._search = document.getElementById("search");
        this.ammoutShow = 10;
        this._employeeServices = new EmployeeServices();
        var vm = this;
        document.getElementById("search")
            .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                vm.Search();
            }
        });

        this.ShowEmployeers();
    }

    ListMoreTen(event){
        this.ammoutShow +=10;
        this.ShowEmployeers();
    }

    Search(){
        this.ammoutShow=10;
        this.LoadElemntsOnScreen(this._employeeServices.FilterEmployeers(this._search.value));
    }

    ShowEmployeers(){
        this.LoadElemntsOnScreen(this._employeeServices.LoadAmmoutEmployeers(this._search.value));
    }

    LoadElemntsOnScreen(employeers){
        employeers = employeers.slice(0,this.ammoutShow);

        var trClone = document.getElementById("tr-clone").outerHTML;
        var removeElements = document.getElementsByClassName("toRemove");

        while(removeElements.length > 0){
          removeElements[0].parentNode.removeChild(removeElements[0]);
        }
    
        var vm = this;
        employeers.forEach(function (element, index, array){
          var newEl = vm._employeeServices.CreateNewLine(trClone, element);
          document.getElementById("tbody-employee").insertAdjacentHTML('beforeend', newEl);
        });
      }
}