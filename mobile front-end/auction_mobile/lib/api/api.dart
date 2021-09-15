import 'package:auction_mobile/api/user.dart';
import 'package:auction_mobile/providers/stream_provider.dart';
import 'package:dio/dio.dart';

import 'auction.dart';

class API {
  static API _instance;
  static API getInstance() {
    if (_instance == null) {
      _instance = new API._();
    }
    return _instance;
  }

  Stream<List<Auction>> auctionStream;
  String _authToken;
  User _user;
  User get user => _user;
  Dio _dio;
  String get authToken => _authToken;
  API._() {
    // setup authToken from sharedPreferences;
    _dio = Dio(BaseOptions(
      // TODO: Configure correct url path
      baseUrl: 'http://localhost:5000/',
    ));
    // auctionStream = ApiStream<List<Auction>>([], Duration(seconds: 2), (value) async {
    //   return await getAuctions({'type': 'all'});
    // }).stream.asBroadcastStream();
  }
  Future<bool> login(String email, String password) async {
    print('Logging in ...');
    try {
      Response<dynamic> response = await _dio
          .post('/login', data: {'email': email, 'password': password});
      _authToken = response.data['token'];
      _user = User.fromJson(response.data['user']);
      print('Login success');
      return true;
    } catch (e) {
      print('Login failed');
      if (e.type == DioErrorType.response) {
        print(e.message);
      } else
        print(e);
      return false;
    }
  }

  Stream<List<Auction>> getAuctionStream() => auctionStream;
  Future<List<Auction>> getAuctions(Map<String, dynamic> query) async {
    print('getting Auctions');
    try {
      Response<dynamic> response =
          await _dio.get('/getAuctions', queryParameters: query);
      return List.generate(response.data.length,
          (index) => Auction.fromJson(response.data[index]));
    } catch (e) {
      print('getting Auctions failed');
      if (e.type == DioErrorType.response) {
        print(e.message);
      } else
        print(e);
      return null;
    }
  }
}
