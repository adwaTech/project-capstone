import 'package:auction_mobile/product_preview.dart';
import 'package:auction_mobile/providers/stream_provider.dart';
import 'package:flutter/material.dart';

import 'api/api.dart';
import 'api/auction.dart';
import 'components/category_card.dart';
import 'components/category_viewer.dart';
import 'components/product_card.dart';

class ProductBrowser extends StatelessWidget {
  const ProductBrowser({
    Key key,
    @required TabController productsTabController,
  })  : _productsTabController = productsTabController,
        super(key: key);

  final TabController _productsTabController;

  @override
  Widget build(BuildContext context) {
    return Card(
        elevation: 10,
        child: Container(
          height: 370,
          margin: EdgeInsets.all(10),
          child: Column(
            children: [
              Container(
                  height: 20,
                  child: Text(
                    'Available Products',
                    style: TextStyle(fontSize: 20),
                  )),
              Divider(),
              Container(
                  height: 50,
                  child: TabBar(
                    labelColor: Colors.black,
                    controller: _productsTabController,
                    isScrollable: true,
                    tabs: [
                      Category(Text('Latest')),
                      Category(Text('Popular')),
                      Category(Text('Recommeded')),
                    ],
                  )),
              Container(
                height: 200,
                margin: EdgeInsets.all(8),
                child: TabBarView(
                  physics: NeverScrollableScrollPhysics(),
                  controller: _productsTabController,
                  children: [
                    Tab(
                      // TODO: streambuilders should not be broadcast streams. Find another way to implement this
                      child: StreamBuilder(
                          stream: ApiStream<List<Auction>>(
                              List.empty(), Duration(seconds: 2), (_) async {
                            return await API
                                .getInstance()
                                .getAuctions({'type': 'latest'});
                          }).stream.asBroadcastStream(),
                          builder: (context, snapshot) => Container(
                              height: 200,
                              child: (snapshot.data == null)
                                  ? Center(child: CircularProgressIndicator())
                                  : (snapshot.data.length == 0)
                                      ? Center(
                                          child: Text('No data'),
                                        )
                                      : ListView.builder(
                                          scrollDirection: Axis.horizontal,
                                          itemCount: 7,
                                          itemBuilder: (context, index) => Hero(
                                              tag: 'latestproduct$index',
                                              child: Product(snapshot.data[index],() {
                                                Navigator.of(context).push(
                                                    MaterialPageRoute(
                                                        builder: (context) =>
                                                            ProductPreview(
                                                                'latestproduct$index',
                                                                snapshot.data[index])));
                                              }))))),
                    ),
                    Tab(
                        child: StreamBuilder(
                      stream: ApiStream<List<Auction>>(
                          List.empty(), Duration(seconds: 2), (_) async {
                        return await API
                            .getInstance()
                            .getAuctions({'type': 'popular'});
                      }).stream.asBroadcastStream(),
                      builder: (context, snapshot) => Container(
                          height: 200,
                          child: (snapshot.data == null)
                                  ? Center(child: CircularProgressIndicator())
                                  : (snapshot.data.length == 0)
                                      ? Center(
                                          child: Text('No data'),
                                        )
                                      :
                          ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: 7,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'popularproduct$index',
                                  child: Product(snapshot.data[index],() {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: (context) =>
                                                ProductPreview(
                                                    'popularproduct$index',
                                                    snapshot.data[index])));
                                  })))),
                    )),
                    Tab(
                        child: StreamBuilder(
                      stream: ApiStream<List<Auction>>(
                          List.empty(), Duration(seconds: 2), (_) async {
                        return await API
                            .getInstance()
                            .getAuctions({'type': 'popular'});
                      }).stream.asBroadcastStream(),
                      builder: (context, snapshot) => Container(
                          height: 200,
                          child: 
                          (snapshot.data == null)
                                  ? Center(child: CircularProgressIndicator())
                                  : (snapshot.data.length == 0)
                                      ? Center(
                                          child: Text('No data'),
                                        )
                                      :ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: 7,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'recommendedproduct$index',
                                  child: Product(snapshot.data[index],() {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: (context) =>
                                                ProductPreview(
                                                    'recommendedproduct$index',
                                                    snapshot.data[index])));
                                  })))),
                    )),
                  ],
                ),
              ),
              Padding(
                  padding: EdgeInsets.all(8),
                  child: Align(
                      alignment: Alignment.bottomRight,
                      child: ElevatedButton(
                          onPressed: () {
                            // TODO: add appropriate navigator
                            // Navigator.of(context).push(MaterialPageRoute(
                            //     builder: (context) => CategoryViewer()));
                          },
                          child: Text('Show all '))))
            ],
          ),
        ));
  }
}
