import 'package:auction_mobile/components/live_auction_viewer.dart';
import 'package:auction_mobile/components/product_card.dart';
import 'package:auction_mobile/product_preview.dart';
import 'package:auction_mobile/providers/stream_provider.dart';
import 'package:flutter/material.dart';

import 'api/api.dart';
import 'api/auction.dart';
import 'api/enums.dart';
import 'components/category_viewer.dart';

class LiveAuctionsBrowser extends StatelessWidget {
  Widget build(BuildContext context) => Center(
      child: StreamBuilder(
                          stream: ApiStream<List<Auction>>(
                              List.empty(), Duration(seconds: 2), (_) async {
                            return await API
                                .getInstance()
                                .getAuctions({'type': 'live'});
                          }).stream,
                          builder: (context, AsyncSnapshot<List<Auction>> snapshot) =>Container(
          height: 370,
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
                    child: (snapshot.data==null)?Center(child:CircularProgressIndicator())
                    :(snapshot.data.length==0)?Center(child:Text('No data'))
                    :ListView.builder(
                        scrollDirection: Axis.horizontal,
                        itemCount: snapshot.data.length,
                        itemBuilder: (context, index) => Hero(
                            tag: 'liveproduct$index',
                            child: Product(snapshot.data.skipWhile((value) => value.auctionType!=AuctionType.Live).elementAt(index),() {
                              Navigator.of(context).push(MaterialPageRoute(
                                  builder: (context) =>
                                      ProductPreview('liveproduct$index',snapshot.data.skipWhile((value) => value.auctionType!=AuctionType.Live).elementAt(index))));
                            })))),
                Padding(
                  padding: EdgeInsets.all(8),
                  child: Align(
                    alignment: Alignment.bottomRight,
                    child: ElevatedButton(
                      onPressed: () {
                        Navigator.of(context).push(MaterialPageRoute(
                            builder: (context) => LiveAuctionViewer(
                              ApiStream<List<Auction>>(List.empty(),Duration(seconds: 2),(_) async {
                          return await API.getInstance().getAuctions({
                            'type':'live'
                          });
                        })
                            )));
                      },
                      child: Text('Show all'),
                    ),
                  ),
                )
              ])))));
}
