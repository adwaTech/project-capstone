import 'package:auction_mobile/api/auction.dart';
import 'package:flutter/material.dart';

import '../product_preview.dart';

// TODO: add all backend information
class ProductTile extends StatelessWidget {
  final int index;
  final Auction auction;
  ProductTile(this.index, this.auction);
  Widget build(BuildContext context) => Hero(
        tag: 'hero$index',
        child: Card(
          elevation: 20,
          child: Container(
            height: 150,
            child: Row(
              children: [
                Container(
                    height: 150,
                    child: Image.asset(
                      'assets/images/product_logo.jpg',
                      fit: BoxFit.cover,
                    )),
                Expanded(
                    child: Padding(
                        padding: EdgeInsets.all(10),
                        child: Container(
                            height: 150,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: [
                                Text(auction.name,
                                    style: TextStyle(fontSize: 20)),
                                Row(
                                  children: [
                                    Expanded(
                                        flex: 1,
                                        child:
                                            Text(auction.deadline.toString())),
                                    Expanded(
                                        flex: 1,
                                        child:
                                            Text(auction.postedOn.toString()))
                                  ],
                                ),
                                Row(
                                  children: [
                                    Expanded(
                                        flex: 1, child: Text('Other Stuff')),
                                    Expanded(
                                        flex: 1, child: Text('Other value'))
                                  ],
                                ),
                                Row(
                                  children: [
                                    Expanded(
                                        flex: 1, child: Text('Other stuff')),
                                    Expanded(
                                        flex: 1, child: Text('Other stuff'))
                                  ],
                                ),
                                Expanded(
                                    child: Row(children: [
                                  Expanded(
                                      child: Align(
                                          alignment: Alignment.bottomRight,
                                          child: Padding(
                                              padding: EdgeInsets.all(10),
                                              child: ElevatedButton(
                                                  onPressed: () {
                                                    Navigator.of(context).push(
                                                        MaterialPageRoute(
                                                            builder: (context) =>
                                                                ProductPreview(
                                                                    'hero$index',
                                                                    auction)));
                                                  },
                                                  child: Text('Preview')))))
                                ]))
                              ],
                            ))))
              ],
            ),
          ),
        ),
      );
}
