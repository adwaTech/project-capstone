import 'package:auction_mobile/components/post_auction_form.dart';
import 'package:flutter/material.dart';

class PostAuction extends StatefulWidget {
  @override
  _PostAuctionState createState() => _PostAuctionState();
}

class _PostAuctionState extends State<PostAuction> {
  @override
  Widget build(BuildContext context) {
    return Hero(
      tag:'postAuction',
      child:Scaffold(
        appBar: AppBar(
          title: Text('Post a new Auction'),
        ),
        body: Container(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Expanded(child: PostAuctionForm((result) {
                // use the result object
              }))
            ],
          ),
        )));
  }
}
