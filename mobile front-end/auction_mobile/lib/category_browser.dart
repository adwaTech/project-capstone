import 'package:auction_mobile/product_card.dart';
import 'package:flutter/material.dart';

import 'category_card.dart';

class CategoriesBrowser extends StatelessWidget {
  const CategoriesBrowser({
    Key key,
    @required TabController categoryTabController,
  })  : _categoryTabController = categoryTabController,
        super(key: key);

  final TabController _categoryTabController;

  @override
  Widget build(BuildContext context) {
    return Card(
        child: Container(
            margin: EdgeInsets.all(10),
            height: 350,
            child: Column(children: [
              Text(
                'Browse by Categories',
                style: TextStyle(fontSize: 20),
              ),
              Container(
                  height: 70,
                  child: TabBar(
                    isScrollable: true,
                    labelColor: Colors.black,
                    controller: _categoryTabController,
                    tabs: [
                      Category(Text('House')),
                      Category(Text('Electronics')),
                      Category(Text('Vehicle')),
                      Category(Text('Governmental')),
                      Category(Text('Land')),
                      Category(Text('Rare')),
                    ],
                  )),
              Container(
                margin: EdgeInsets.all(8),
                height: 200,
                child: TabBarView(
                  controller: _categoryTabController,
                  children: [
                    Tab(
                      child: Container(
                        height: 200,
                        child: ListView(
                          scrollDirection: Axis.horizontal,
                          children: [
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                          ],
                        ),
                      ),
                    ),
                    Tab(
                      child: Container(
                        height: 200,
                        child: ListView(
                          scrollDirection: Axis.horizontal,
                          children: [
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                          ],
                        ),
                      ),
                    ),
                    Tab(
                      child: Container(
                        height: 200,
                        child: ListView(
                          scrollDirection: Axis.horizontal,
                          children: [
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                          ],
                        ),
                      ),
                    ),
                    Tab(
                      child: Container(
                        height: 200,
                        child: ListView(
                          scrollDirection: Axis.horizontal,
                          children: [
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                          ],
                        ),
                      ),
                    ),
                    Tab(
                      child: Container(
                        height: 200,
                        child: ListView(
                          scrollDirection: Axis.horizontal,
                          children: [
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                          ],
                        ),
                      ),
                    ),
                    Tab(
                      child: Container(
                        height: 200,
                        child: ListView(
                          scrollDirection: Axis.horizontal,
                          children: [
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                            Product(),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Align(
                alignment: Alignment.bottomRight,
                child: ElevatedButton(
                  onPressed: () {},
                  child: Text('Show All'),
                ),
              )
            ])));
  }
}
