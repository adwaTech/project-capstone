import 'package:auction_mobile/components/product_card.dart';
import 'package:auction_mobile/product_preview.dart';
import 'package:flutter/material.dart';

import 'components/category_card.dart';

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
              Divider(),
              Container(
                  height: 50,
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
                          child: ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: 7,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'houseproduct$index',
                                  child: Product(() {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: (context) =>
                                                ProductPreview(
                                                    'houseproduct$index')));
                                  })))),
                    ),
                    Tab(
                      child: Container(
                          height: 200,
                          child: ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: 7,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'electronicsproduct$index',
                                  child: Product(() {
                                    Navigator.of(context).push(MaterialPageRoute(
                                        builder: (context) => ProductPreview(
                                            'electronicsproduct$index')));
                                  })))),
                    ),
                    Tab(
                      child: Container(
                          height: 200,
                          child: ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: 7,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'vehicleproduct$index',
                                  child: Product(() {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: (context) =>
                                                ProductPreview(
                                                    'vehicleproduct$index')));
                                  })))),
                    ),
                    Tab(
                      child: Container(
                          height: 200,
                          child: ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: 7,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'governmentalproduct$index',
                                  child: Product(() {
                                    Navigator.of(context).push(MaterialPageRoute(
                                        builder: (context) => ProductPreview(
                                            'governmentalproduct$index')));
                                  })))),
                    ),
                    Tab(
                      child: Container(
                          height: 200,
                          child: ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: 7,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'landproduct$index',
                                  child: Product(() {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: (context) =>
                                                ProductPreview(
                                                    'landproduct$index')));
                                  })))),
                    ),
                    Tab(
                      child: Container(
                          height: 200,
                          child: ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: 7,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'rareproduct$index',
                                  child: Product(() {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: (context) =>
                                                ProductPreview(
                                                    'rareproduct$index')));
                                  })))),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: EdgeInsets.all(8),
                child: Align(
                  alignment: Alignment.bottomRight,
                  child: ElevatedButton(
                    onPressed: () {},
                    child: Text('Show All'),
                  ),
                ),
              )
            ])));
  }
}
