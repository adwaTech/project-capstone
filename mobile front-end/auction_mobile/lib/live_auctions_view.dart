import 'package:auction_mobile/product_card.dart';
import 'package:auction_mobile/product_preview.dart';
import 'package:flutter/material.dart';

class LiveAuctionsBrowser extends StatelessWidget {
  Widget build(BuildContext context) => Center(
      child: Container(
          height: 360,
          margin: EdgeInsets.all(8),
          child: Card(
              elevation: 10,
              child: Column(children: [
                Padding(
                  padding: EdgeInsets.all(4),
                  child: Text(
                    'Live Auctions',
                    style: TextStyle(fontSize: 20),
                  ),
                ),
                Divider(),
                Container(
                    height: 250,
                    child: ListView.builder(
                        scrollDirection: Axis.horizontal,
                        itemCount: 7,
                        itemBuilder: (context, index) => Hero(
                            tag: 'liveproduct$index',
                            child: Product(() {
                              Navigator.of(context).push(MaterialPageRoute(
                                  builder: (context) =>
                                      ProductPreview('liveproduct$index')));
                            })))),
                Padding(
                  padding: EdgeInsets.all(8),
                  child: Align(
                    alignment: Alignment.bottomRight,
                    child: ElevatedButton(
                      onPressed: () {},
                      child: Text('Show all'),
                    ),
                  ),
                )
              ]))));
}
