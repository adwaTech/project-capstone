import 'package:auction_mobile/category_card.dart';
import 'package:auction_mobile/product_browser.dart';
import 'package:auction_mobile/product_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import 'category_browser.dart';

void main() {
  runApp(AuctionApp());
}

class AuctionApp extends StatefulWidget {
  _AuctionAppState createState() => _AuctionAppState();
}

class _AuctionAppState extends State<AuctionApp> with TickerProviderStateMixin {
  TabController _productsTabController;
  TabController _categoryTabController;
  void initState() {
    super.initState();
    _productsTabController =
        TabController(initialIndex: 0, length: 3, vsync: this);
    _categoryTabController =
        TabController(initialIndex: 0, length: 6, vsync: this);
  }

  Widget build(BuildContext context) => MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'M3K Auction',
        home: Scaffold(
          appBar: AppBar(
            title: Text('M3K Auction'), // Login,
            actions: [
              Padding(
                  padding: EdgeInsets.all(10),
                  child: IconButton(
                    onPressed: () {},
                    icon: Icon(Icons.face),
                  ))
            ],
          ),
          drawer: Drawer(
            child: ListView(
              children: [
                SizedBox(
                  height: 300,
                  child: Center(
                    child: Text('M3K Auctions'),
                  ),
                ),
                ListTile(
                  leading: Icon(Icons.home),
                  title: Text(
                      'Home'), // home, auction, categories, aobut, contact, FAQ, help and support'
                ),
                ListTile(
                  leading: Icon(Icons.shop),
                  title: Text('Auctions'),
                ),
                ListTile(
                  leading: Icon(Icons.category),
                  title: Text('Categories'),
                ),
                ListTile(
                  leading: Icon(Icons.info),
                  title: Text('About'),
                ),
                ListTile(
                  leading: Icon(Icons.contact_phone),
                  title: Text('Contact'),
                ),
                ListTile(
                  leading: Icon(Icons.question_answer),
                  title: Text('FAQ'),
                ),
                ListTile(
                  leading: Icon(Icons.help_center),
                  title: Text('Help and support'),
                )
              ],
            ),
          ),
          body: Container(
            child: ListView(
              shrinkWrap: true,
              children: [
                Card(
                  child: Container(
                    height: 300,
                    child: Stack(
                      fit: StackFit.expand,
                      children: [
                        Image.asset('assets/images/product_logo.jpg',
                            fit: BoxFit.cover),
                        Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Align(
                              alignment: Alignment.centerLeft,
                              child: Text(
                                'What do you want to do?',
                                style: TextStyle(
                                    color: Colors.white, fontSize: 20),
                              ),
                            ),
                            Text('Sell your item',
                                style: TextStyle(
                                    color: Colors.white, fontSize: 20)),
                            Text('Bid for a product',
                                style: TextStyle(
                                    color: Colors.white, fontSize: 20)),
                            Text('Check your notifications',
                                style: TextStyle(
                                    color: Colors.white, fontSize: 20)),
                          ],
                        )
                      ],
                    ),
                  ),
                ),
                CategoriesBrowser(
                    categoryTabController: _categoryTabController),
                ProductBrowser(productsTabController: _productsTabController)
              ],
            ),
          ),
        ),
      );
}
