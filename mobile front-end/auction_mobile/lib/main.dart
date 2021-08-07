import 'package:auction_mobile/components/category_card.dart';
import 'package:auction_mobile/components/drawer.dart';
import 'package:auction_mobile/live_auctions_view.dart';
import 'package:auction_mobile/product_browser.dart';
import 'package:auction_mobile/components/product_card.dart';
import 'package:auction_mobile/your_auctions.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import 'category_browser.dart';
import 'notifications.dart';

void main() {
  runApp(AuctionApp());
}

class AuctionApp extends StatefulWidget {
  _AuctionAppState createState() => _AuctionAppState();
}

class _AuctionAppState extends State<AuctionApp> with TickerProviderStateMixin {
  TabController _categoryTabController, _productsTabController;
  GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  void initState() {
    super.initState();
    _categoryTabController =
        TabController(initialIndex: 0, length: 6, vsync: this);
    _productsTabController =
        TabController(initialIndex: 0, length: 3, vsync: this);
  }

  Widget build(BuildContext context) => MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'M3K Auction',
      theme: ThemeData(primarySwatch: Colors.teal),
      home: Scaffold(
          key: _scaffoldKey,
          drawer: DrawerComponent(),
          body: CustomScrollView(
            physics: BouncingScrollPhysics(),
            slivers: [
              SliverAppBar(
                pinned: true,
                stretch: true,
                stretchTriggerOffset: 200,
                expandedHeight: 250,
                backgroundColor: Colors.teal[800],
                actions: [
                  Padding(
                      padding: EdgeInsets.all(8),
                      child: PopupMenuButton(
                        icon: Icon(Icons.face, size: 30),
                        itemBuilder: (context) => <PopupMenuItem>[
                          PopupMenuItem(child: Text('Your profile')),
                          PopupMenuItem(child: Text('Dashboard')),
                          PopupMenuItem(child: Text('Contact Us')),
                          PopupMenuItem(
                            child: Text('About Us'),
                          )
                        ],
                      ))
                ],
                title: Text('Auction App'),
                flexibleSpace: FlexibleSpaceBar(
                    collapseMode: CollapseMode.parallax,
                    // title: Text('Auction App'),
                    centerTitle: true,
                    background: DecoratedBox(
                        position: DecorationPosition.foreground,
                        decoration: BoxDecoration(
                            gradient: LinearGradient(
                                begin: Alignment.bottomCenter,
                                end: Alignment.center,
                                colors: [
                              Colors.teal[800],
                              Colors.transparent
                            ])),
                        child: Stack(fit: StackFit.expand, children: [
                          Image.asset('assets/images/product_logo.jpg',
                              fit: BoxFit.cover),
                          Container(
                            height: 300,
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                ListTile(
                                  onTap: () {},
                                  leading: Icon(
                                    Icons.shop,
                                    color: Colors.white,
                                  ),
                                  title: Text(
                                    'Post a new Auction',
                                    style: TextStyle(color: Colors.white),
                                  ),
                                ),
                                ListTile(
                                  onTap: () {
                                    Navigator.of(_scaffoldKey.currentContext)
                                        .push(MaterialPageRoute(
                                            builder: (context) =>
                                                YourAuctions()));
                                  },
                                  leading:
                                      Icon(Icons.history, color: Colors.white),
                                  title: Text('See your Auctions',
                                      style: TextStyle(color: Colors.white)),
                                ),
                                ListTile(
                                  onTap: () {
                                    Navigator.of(_scaffoldKey.currentContext)
                                        .push(MaterialPageRoute(
                                            builder: (context) =>
                                                Notifications()));
                                  },
                                  leading: Icon(Icons.notifications,
                                      color: Colors.white),
                                  title: Text('See your notifications',
                                      style: TextStyle(color: Colors.white)),
                                ),
                              ],
                            ),
                          )
                        ]))),
              ),
              SliverList(
                delegate: SliverChildListDelegate([
                  CategoriesBrowser(
                      categoryTabController: _categoryTabController),
                  ProductBrowser(productsTabController: _productsTabController),
                  LiveAuctionsBrowser(),
                ]),
              )
            ],
          )));
}
