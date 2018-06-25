class DetailsController{

    constructor(){
        this._employeeServices = new EmployeeServices();

        var url = new URL(window.location.href);
        var id = url.searchParams.get("id");

        this.employeeModel = this._employeeServices.GetById(id);
        this.Load();
    }

    Load(){
        var body = document.getElementById("body");
        body.innerHTML =this._employeeServices.LoadDetails(body.outerHTML,this.employeeModel); 
        
    }
}