import 'package:auction_mobile/api/user.dart';
import 'package:flutter/foundation.dart';

class SessionProvider extends ChangeNotifier {
  bool _isLoggedIn = false;
  User _user;
  User get user => _user;
  bool get isLoggedIn => _isLoggedIn;
  SessionProvider();
  SessionProvider.withUser(this._user);
  set isLoggedIn(isLoggedIn) {
    _isLoggedIn = isLoggedIn;
    notifyListeners();
  }

  set user(User user) {
    _user = user;
    notifyListeners();
  }
}
