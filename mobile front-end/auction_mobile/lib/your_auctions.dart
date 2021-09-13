import 'package:auction_mobile/components/product_tile.dart';
import 'package:auction_mobile/providers/stream_provider.dart';
import 'package:flutter/material.dart';

import 'api/api.dart';
import 'api/auction.dart';

class YourAuctions extends StatefulWidget {
  @override
  _YourAuctionsState createState() => _YourAuctionsState();
}

class _YourAuctionsState extends State<YourAuctions> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: StreamBuilder(
      stream: ApiStream<List<Auction>>(List.empty(), Duration(seconds: 2),
          (data) async {
        return API.getInstance().getAuctions(
            {'type': 'auctioneer', 'auctioneer': API.getInstance().user.id});
      }).stream,
      builder: (context, AsyncSnapshot<List<Auction>> snapshot) =>
          CustomScrollView(
        physics: BouncingScrollPhysics(),
        slivers: [
          SliverAppBar(
            title: Text('Your Auctions'),
          ),
          (snapshot.data == null)
              ? SliverFillRemaining(
                  child: Center(
                    child: CircularProgressIndicator(),
                  ),
                )
              : (snapshot.data.length == 0)
                  ? SliverFillRemaining(
                      child: Center(
                        child: Text('No data'),
                      ),
                    )
                  : SliverList(
                      delegate: SliverChildBuilderDelegate(
                          (context, index) =>
                              ProductTile(index, snapshot.data[index]),
                          childCount: snapshot.data.length),
                    )
        ],
      ),
    ));
  }
}
