import 'package:auction_mobile/components/product_tile.dart';
import 'package:auction_mobile/product_preview.dart';
import 'package:flutter/material.dart';

class YourAuctions extends StatefulWidget {
  @override
  _YourAuctionsState createState() => _YourAuctionsState();
}

class _YourAuctionsState extends State<YourAuctions> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        physics: BouncingScrollPhysics(),
        slivers: [
          SliverAppBar(
            title: Text('Your Auctions'),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
                (context, index) => ProductTile(index),
                childCount: 20),
          )
        ],
      ),
    );
  }
}
