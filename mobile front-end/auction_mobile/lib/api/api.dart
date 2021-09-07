
import 'package:dio/dio.dart';
import '';
class API {
  static API _instance;
  static API getInstance() {
    if (_instance == null) {
      _instance = new API._();
    }
    return _instance;
  }

  String _authToken;
  Dio _dio;
  String get authToken => _authToken;
  API._() {
    // setup authToken from sharedPreferences;
    _dio = Dio(BaseOptions(
      baseUrl: 'http://localhost:5000',
    ));
  }
  Future<bool> login(String email, String password) async {
    try {
      Response<dynamic> response = await _dio
          .post('/login', data: {'email': email, 'password': password});
      _authToken = response.data['token'];
      return true;
    } catch (e) {
      if (e.type == DioErrorType.response) {
        print(e.message);
      } else
        print(e);
      return false;
    }
  }
}
