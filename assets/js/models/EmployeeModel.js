class EmployeeModel {

    constructor(id, isActive, balance, picture, age, eyeColor, name, gender, company, email, phone, address, about, registered, latitude, longitude) {
      this.Id = id;
      this.IsActive = isActive;
      this.Balance = balance;
      this.Picture = picture;
      this.Age = age;
      this.EyeColor = eyeColor;
      this.Name = name;
      this.Gender = gender;
      this.Company = company;
      this.Email = email;
      this.Phone = phone;
      this.Address = address;
      this.About = about;
      this.Registered = new Date(registered.split(" +")[0]);
      this.Latitude = latitude;
      this.Longitude = longitude;
    }
}
