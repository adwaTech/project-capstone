import 'package:auction_mobile/api/proposal.dart';
import 'package:auction_mobile/api/user.dart';

import 'enums.dart';

class ObjectId {
  ObjectId(ObjectType type, dynamic object) {
    _type = type;
    if (object is String) {
      objectString = object;
    } else if (object is Set || object is Map) {
      switch (type) {
        case ObjectType.User:
          _object = User.fromJson(object);
          objectString = object['_id'];
          break;
        case ObjectType.Auction:
          break;
        case ObjectType.Proposal:
          _object = Proposal.fromJson(object);
          objectString = object['_id'];
          break;
        case ObjectType.Payment:
          break;
        case ObjectType.Feedback:
          break;
        default:
      }
    }
  }
  static List<ObjectId> fromList(ObjectType type, List<dynamic> list) {
    return List.generate(list.length, (index) => ObjectId(type, list[index]));
  }

  static List<String> toStringList(List<ObjectId> list) =>
      List.generate(list.length, (index) => list[index].objectString);
  String objectString;
  ObjectType _type;
  ObjectType get type => _type;
  dynamic _object;
  dynamic get object => _object;
  // TODO: getObjectFromAPI method implementation
}
