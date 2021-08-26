import 'dart:convert';
import 'dart:io';

import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
class API {
  static API instance;
  static API getInstance() {
    if (instance == null) {
      instance = new API._();
    }
    return instance;
  }
  String _authToken;
  Uri _uri;
  String get authToken => _authToken;
  API._() {
    // setup authToken from sharedPreferences;
    _uri = Uri.parse('localhost:5000');
  }
  Future<bool> login(String email,String password) async {
    http.Response response = await http.post(_uri,body:{
      email:email,
      password:password
    });
    if(response.statusCode == HttpStatus.ok){
      _authToken = jsonDecode(response.body)['token'];
      return true;
    }
    return false;
  }
}
