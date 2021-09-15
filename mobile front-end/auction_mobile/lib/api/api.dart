import 'package:auction_mobile/api/user.dart';
import 'package:auction_mobile/providers/main_session_provider.dart';
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
  SessionProvider sessionProvider;
  User get user => _user;
  static final String baseUrl = 'http://localhost:5000/';
  static final String auctionImageUrl = 'http://localhost:5000/auctions/';
  static final String userImageUrl = 'http://localhost:5000/users/';
  static final String proposalImageUrl = 'http://localhost:5000/bids/';
  Dio _dio;
  String get authToken => _authToken;
  API._() {
    sessionProvider = SessionProvider();
    // setup authToken from sharedPreferences;
    _dio = Dio(BaseOptions(
      // TODO: Configure correct url path
      baseUrl: baseUrl,
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
      sessionProvider.user = _user;
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

  Future<double> deposit(double amount, String provider) async {
    print(amount is double);
    try {
      Response<dynamic> response = await _dio
          .post('/deposit',options: Options(
            headers: {
              'Authorization':'Bearer $_authToken'
            }
          ), data: {'value': amount, 'type': provider});

      _user.balance = response.data['newBalance'];
      sessionProvider.user = _user;
      return response.data['newBalance'];
    } catch (e) {
      print('deposit failed');
      print(e.response.data);
    }
  }

  Future<double> withdraw(double amount, String provider) async {
    try {
      Response<dynamic> response = await _dio
          .post('/withdraw',options:Options(
            headers: {
              'Authorization':'Bearer $_authToken'
            }
          ), data: {'value': amount, 'type': provider});
      _user.balance = response.data['newBalance'];
      sessionProvider.user = _user;
      return response.data['newBalance'];
    } catch (e) {
      print('withdraw failed');
      print(e);
    }
  }

  Future<List<Auction>> searchAuctions(String query) async {
    try {
      Response<dynamic> response =
          await _dio.get('/search', queryParameters: {'query': query});
      // TODO: make generic search for all types
      dynamic temp0 = response.data['auctionsWithName'];
      dynamic temp1 = response.data['auctionsWithCategory'];
      dynamic temp2 = response.data['auctionsWithBriefDescription'];
      dynamic temp3 = response.data['auctionsWithExtendedDescription'];
      dynamic temp = [...temp0, ...temp1, ...temp2, ...temp3];
      return List.generate(
          temp.length, (index) => Auction.fromJson(temp[index]));
    } catch (e) {
      print("couldn't search for term $query");
      print(e);
      return null;
    }
  }
}
