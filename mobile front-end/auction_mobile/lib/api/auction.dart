import 'package:auction_mobile/api/image.dart';
import 'package:auction_mobile/api/object_id.dart';
import 'package:flutter/cupertino.dart';

import 'enums.dart';
class Auction {
  Auction.fromJson(Map<String, dynamic> json) {
    name = json['auctionName'];
    briefDescription = json['briefDescription'];
    extendedDescription = json['extendedDescription'];
    latitude = json['latitude'];
    longtude = json['longtude'];
    auctionCategory = json['auctionCategory'];
    bidFee = json['bidFee'];
    minAmount = json['minAmount'];
    minCpo = json['minCpo'];
    owner = ObjectId(ObjectType.User,json['owner']);
    if(json['proposals'] is List)
      proposals = ObjectId.fromList(ObjectType.Proposal,json['proposals']);
    deadline = DateTime.parse(json['deadline']);
    postedOn = DateTime.parse(json['postedOn']);
    approval = json['approval'];
    auctionType = getAuctionType(json['auctionType']);
    if(auctionType==AuctionType.Live)
      startDate = DateTime.parse(json['startDate']);
    images = ImageViewer.fromList(json['images']);
    condition = getAuctionCondition(json['condition']);
    status = getAuctionStatus(json['status']);
  }
  Map<String, dynamic> toJson() {
    Map<String, dynamic> json = Map<String, dynamic>();
    json['auctionName'] = name;
    json['briefDescription'] = briefDescription;
    json['extendedDescription'] = extendedDescription;
    json['latitude'] = latitude;
    json['longtude'] = longtude;
    json['auctionCategory'] = auctionCategory;
    json['bidFee'] = bidFee;
    json['minAmount'] = minAmount;
    json['minCpo'] = minCpo;
    json['owner'] = owner.objectString;
    json['proposals'] = ObjectId.toStringList(proposals);
    json['startDate'] = startDate;
    json['deadline'] = deadline;
    json['postedOn'] = postedOn;
    json['approval'] = approval;
    json['auctionType'] = getAuctionTypeString(auctionType);
    json['images'] = ImageViewer.toStringList(images);
    json['condition'] = getAuctionConditionString(condition);
    json['status'] = getAuctionStatusString(status);
    return json;
  }
  String name, briefDescription, extendedDescription, latitude, longtude;
  String auctionCategory;
  double bidFee, minAmount, minCpo;
  ObjectId owner;
  List<ObjectId> proposals;
  DateTime startDate, deadline, postedOn;
  bool approval;
  AuctionType auctionType;
  List<ImageViewer> images;
  AuctionCondition condition;
  AuctionStatus status;
  String getAuctionTypeString(AuctionType type) =>
      (type == AuctionType.Sealed) ? 'sealed' : 'live';
  String getAuctionConditionString(AuctionCondition type) =>
      (type == AuctionCondition.New) ? 'new' : 'old';
  String getAuctionStatusString(AuctionStatus status) =>
      (status == AuctionStatus.Open)
          ? 'open'
          : (status == AuctionStatus.Ended)
              ? 'ended'
              : (status == AuctionStatus.Archieved)
                  ? 'archieved'
                  : 'inactive';
  AuctionType getAuctionType(String type) =>
      (type == 'sealed') ? AuctionType.Sealed : AuctionType.Live;
  AuctionCondition getAuctionCondition(String type) =>
      (type == 'new') ? AuctionCondition.New : AuctionCondition.Old;
  AuctionStatus getAuctionStatus(String status) => (status == 'open')
      ? AuctionStatus.Open
      : (status == 'ended')
          ? AuctionStatus.Ended
          : (status == 'archieved')
              ? AuctionStatus.Archieved
              : AuctionStatus.Inactive;
  @override
  String toString(){
    return 'An Auction with '
    'name: $name'
    'category: $auctionCategory'
    'type: $auctionType';
  }
  static Iterable<Auction> filterCategory(AsyncSnapshot<List<Auction>> snapshot,String category){
      return snapshot.data.skipWhile((value) => value.auctionCategory!=category);
  }
}
