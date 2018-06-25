class EmployeeServices {
  constructor(){
    this._employeers =[];
    this.LoadAllEmployeers();
  }

  LoadAllEmployeers(){
    var request = new XMLHttpRequest();
    var vm = this;
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        vm._employeers = JSON.parse(this.responseText);
      }
    };
    request.open("get", "./assets/dataset/people-collection.json", false);
    request.send();
  }

  GetById(id){
    var obj = this._employeers.find(x => x._id === id);
    return new EmployeeModel(obj._id, obj.isActive, obj.balance, obj.picture, obj.age, obj.eyeColor, obj.name, obj.gender, obj.company, obj.email, obj.phone, obj.address, obj.about, obj.registered, obj.latitude, obj.longitude );
  }

  LoadAmmoutEmployeers(filter){

    return this.FilteredEmployeers(filter);
  }

  FilterEmployeers(filter){
    return   this.FilteredEmployeers(filter);
  }

  FilteredEmployeers(filter){
    filter = filter.toUpperCase();
    return this._employeers.filter((item) => {
      return (
        item.name.toUpperCase().indexOf(filter) >= 0 
        || item.age.toString().indexOf(filter) >= 0
        || item.isActive.toString().toUpperCase().indexOf(filter) >= 0
        || item.email.toUpperCase().indexOf(filter) >= 0 
        || item.phone.indexOf(filter) >= 0
        || item.company.toUpperCase().indexOf(filter) >= 0
        || item.balance.toString().indexOf(filter) >= 0
        );
    });
  }

  CreateNewLine(elementClone, employee){
    return elementClone.replace("hidden", "toRemove")
      .replace("{{picture}}", employee.picture)
      .replace("{{name}}", employee.name)
      .replace("{{age}}", employee.age)
      .replace("{{active}}", employee.isActive)
      .replace("{{email}}", employee.email)
      .replace("{{phone}}", employee.phone)
      .replace("{{company}}", employee.company)
      .replace("{{balance}}", employee.balance)
      .replace("{{id}}", employee._id);
  }

  LoadDetails(element, employeeModel){

    var linkMaps = 
    `<iframe 
    width="300" 
    height="170" 
    frameborder="0" 
    scrolling="no" 
    marginheight="0" 
    marginwidth="0" 
    src="https://maps.google.com/maps?q={{_employeeModel.Latitude}},{{_employeeModel.Longitude}}&hl=es;z=14&amp;output=embed"
    ></iframe>`
    linkMaps = linkMaps
      .replace("{{_employeeModel.Latitude}}", employeeModel.Latitude)
      .replace("{{_employeeModel.Longitude}}", employeeModel.Longitude);

    return element.replace("{{_employeeModel.Name}}", employeeModel.Name)
      .replace("{{_employeeModel.Picture}}", employeeModel.Picture)
      .replace("{{_employeeModel.Name}}", employeeModel.Name)
      .replace("{{_employeeModel.Gender}}", employeeModel.Gender)
      .replace("{{_employeeModel.Phone}}", employeeModel.Phone)
      .replace("{{_employeeModel.Company}}", employeeModel.Company)
      .replace("{{_employeeModel.Adress}}", employeeModel.Adress)
      .replace("{{_employeeModel.About}}", employeeModel.About)
      .replace("{{_employeeModel.LinkMaps}}", linkMaps)
      .replace("{{_employeeModel.Latitude}}", employeeModel.Latitude)
      .replace("{{_employeeModel.Longitude}}", employeeModel.Longitude)
      .replace("{{_employeeModel.Registered}}", employeeModel.Registered.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  }
}
