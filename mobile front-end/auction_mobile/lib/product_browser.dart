import 'package:flutter/material.dart';

import 'category_card.dart';
import 'product_card.dart';

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
          height: 350,
          margin: EdgeInsets.all(10),
          child: Column(
            children: [
              Text(
                'Available Products',
                style: TextStyle(fontSize: 20),
              ),
              Divider(),
              TabBar(
                labelColor: Colors.black,
                controller: _productsTabController,
                tabs: [
                  Tab(
                    child: Category(Text('Latest')),
                  ),
                  Tab(
                    child: Category(Text('Popular')),
                  ),
                  Tab(
                    child: Category(Text('Recommeded')),
                  ),
                ],
              ),
              Container(
                height: 200,
                margin: EdgeInsets.all(8),
                child: TabBarView(
                  physics: NeverScrollableScrollPhysics(),
                  controller: _productsTabController,
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
                  ],
                ),
              ),
              Align(
                  alignment: Alignment.bottomRight,
                  child: ElevatedButton(
                      onPressed: () {}, child: Text('Show all ')))
            ],
          ),
        ));
  }
}
