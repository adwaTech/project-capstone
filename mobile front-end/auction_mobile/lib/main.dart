import 'package:auction_mobile/components/contact_us.dart';
import 'package:auction_mobile/components/drawer.dart';
import 'package:auction_mobile/live_auctions_view.dart';
import 'package:auction_mobile/post_auction.dart';
import 'package:auction_mobile/product_browser.dart';
import 'package:auction_mobile/profile.dart';
import 'package:auction_mobile/providers/main_session_provider.dart';
import 'package:auction_mobile/search_view.dart';
import 'package:auction_mobile/your_auctions.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:provider/provider.dart';

import 'api/api.dart';
import 'api/auction.dart';
import 'category_browser.dart';
import 'components/about.dart';
import 'components/login.dart';
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
  bool isLoggedIn = false;
  API api = API.getInstance();
  void initState() {
    super.initState();
    _categoryTabController =
        TabController(initialIndex: 0, length: 7, vsync: this);
    _productsTabController =
        TabController(initialIndex: 0, length: 3, vsync: this);
  }

  Widget build(BuildContext context) => MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'M3K Auction',
      theme: ThemeData(primarySwatch: Colors.teal),
      home: MultiProvider(
        providers: [
          ChangeNotifierProvider(create: (_)=>API.getInstance().sessionProvider),
          StreamProvider<int>.value(value:Stream<int>.periodic(Duration(seconds: 1),(i)=>i+1), initialData: 0)
        ],
        child:Consumer<SessionProvider>(
          builder:(context,sessionProvider,child)=>(!sessionProvider.isLoggedIn)?LoginPage():Scaffold(
          key: _scaffoldKey,
          drawer: DrawerComponent(),
          floatingActionButton: FloatingActionButton(
            onPressed: (){
              //TODO: post new auction button
              Navigator.of(context).push(MaterialPageRoute(builder:(context)=>PostAuction()));
            },
            child: Icon(Icons.add),
            heroTag: 'postAuction',
          ),
          body:
          CustomScrollView(
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
                    padding: EdgeInsets.all(0),
                    child: IconButton(
                      alignment: Alignment.bottomCenter,
                      icon: Icon(
                        Icons.search,
                        size: 30,
                      ),
                      onPressed: () {
                        Navigator.of(_scaffoldKey.currentContext).push(
                            MaterialPageRoute(
                                builder: (context) => SearchView()));
                      },
                    ),
                  ),
                  Padding(
                      padding: EdgeInsets.all(8),
                      child: PopupMenuButton(
                        icon: Icon(Icons.face, size: 30),
                        onSelected: (value) {
                          switch (value) {
                            case 'profile':
                              Navigator.of(_scaffoldKey.currentContext).push(
                                  MaterialPageRoute(
                                      builder: (context) => ProfilePage()));
                              break;
                            case 'contact':
                              Navigator.of(_scaffoldKey.currentContext).push(
                                  MaterialPageRoute(
                                      builder: (context) => ContactUsPage()));
                              break;
                            case 'about':
                              Navigator.of(_scaffoldKey.currentContext).push(
                                  MaterialPageRoute(
                                      builder: (context) => AboutPage()));
                          }
                        },
                        itemBuilder: (context) => <PopupMenuItem>[
                          PopupMenuItem(
                              value: 'profile', child: Text('Your profile')),
                          PopupMenuItem(
                              value: 'contact', child: Text('Contact Us')),
                          PopupMenuItem(
                            value: 'about',
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
                                  onTap: () {
                                    Navigator.of(_scaffoldKey.currentContext)
                                        .push(MaterialPageRoute(
                                            builder: (context) =>
                                                PostAuction()));
                                  },
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
          )
          ))
          ));
}
