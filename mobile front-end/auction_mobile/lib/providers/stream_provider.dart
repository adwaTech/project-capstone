import 'dart:async';

class ApiStream<T> {
  Timer timer;
  ApiStream(this._data, Duration period, Function callback) {
    _controller = StreamController<T>();
    timer = Timer.periodic(period, (timer) async {
      _data = await callback(_data);
      _controller.sink.add(_data);
    });
  }
  T _data;
  void terminate() {
    timer.cancel();
    _controller.close();
  }

  StreamController _controller;
  Stream<T> get stream => _controller.stream;
  StreamController<T> get streamController => _controller;
}
