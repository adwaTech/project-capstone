import 'package:auction_mobile/components/drawer.dart';
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
                (context, index) => Card(
                      elevation: 20,
                      child: Container(
                        height: 150,
                        child: Row(
                          children: [
                            Image.asset(
                              'assets/images/product_logo.jpg',
                              fit: BoxFit.cover,
                            ),
                            Expanded(
                                child: Padding(
                                    padding: EdgeInsets.all(10),
                                    child: Container(
                                        height: 150,
                                        child: Column(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.center,
                                          children: [
                                            Text('Auction Title',
                                                style: TextStyle(fontSize: 20)),
                                            Row(
                                              children: [
                                                Expanded(
                                                    flex: 1,
                                                    child: Text('Deadline')),
                                                Expanded(
                                                    flex: 1,
                                                    child: Text('2013'))
                                              ],
                                            ),
                                            Row(
                                              children: [
                                                Expanded(
                                                    flex: 1,
                                                    child: Text('Other Stuff')),
                                                Expanded(
                                                    flex: 1,
                                                    child: Text('Other value'))
                                              ],
                                            ),
                                            Row(
                                              children: [
                                                Expanded(
                                                    flex: 1,
                                                    child: Text('Other stuff')),
                                                Expanded(
                                                    flex: 1,
                                                    child: Text('Other stuff'))
                                              ],
                                            ),
                                            Expanded(
                                                child: Row(children: [
                                              Expanded(
                                                  child: Align(
                                                      alignment:
                                                          Alignment.bottomRight,
                                                      child: Padding(
                                                          padding:
                                                              EdgeInsets.all(
                                                                  10),
                                                          child: ElevatedButton(
                                                              onPressed: () {},
                                                              child: Text(
                                                                  'Preview')))))
                                            ]))
                                          ],
                                        ))))
                          ],
                        ),
                      ),
                    ),
                childCount: 20),
          )
        ],
      ),
    );
  }
}
