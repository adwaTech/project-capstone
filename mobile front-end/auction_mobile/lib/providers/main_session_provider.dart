import 'package:flutter/foundation.dart';

class SessionProvider extends ChangeNotifier{
  bool _isLoggedIn = false;
  bool get isLoggedIn => _isLoggedIn;
  set isLoggedIn(isLoggedIn) {
    _isLoggedIn=isLoggedIn;
    notifyListeners();
  }
}