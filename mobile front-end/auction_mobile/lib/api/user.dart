import 'package:auction_mobile/api/image.dart';

import 'enums.dart';

class User {
  String id;
  String firstName, lastName, sex;
  ImageViewer profileImage;
  double latitude, longtude;
  String city;
  String idNo;
  ImageViewer idPhoto;
  UserType userType;
  String phone;
  String email;
  double balance;
  User.fromJson(Map<String, dynamic> json) {
    id = json['_id'];
    firstName = json['firstName'];
    lastName = json['lastName'];
    sex = json['sex'];
    latitude = json['latitude'];
    longtude = json['longtude'];
    city = json['city'];
    idNo = json['idNo'];
    idPhoto = ImageViewer(json['idPhoto']);
    userType = _getUserType(json['userType']);
    phone = json['phone'];
    email = json['email'];
    balance = json['balance'];
  }
  UserType _getUserType(String usertype) {
    return (usertype == 'admin') ? UserType.Admin : UserType.Customer;
  }
}
